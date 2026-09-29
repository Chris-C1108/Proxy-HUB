#!/usr/bin/env python3
"""
NodeMatrix Zero-Token Capability Detection Engine & Sync Agent
Compatible with GitHub Actions, Linux CLI, and local environments.
Executes non-billable HTTP handshake inspections via Mihomo kernel.
"""

import os
import sys
import time
import json
import yaml
import requests
import subprocess
import urllib3
urllib3.disable_warnings()

SUB_STORE_URL = os.environ.get("SUB_STORE_URL", "").rstrip("/")
SUB_STORE_TOKEN = os.environ.get("SUB_STORE_ADMIN_TOKEN", "")
PROBE_LIMIT = int(os.environ.get("PROBE_LIMIT", "50"))
MIHOMO_CONTROLLER = "127.0.0.1:9090"
MIHOMO_PORT = 7890

class CapabilityProber:
    def __init__(self, proxy_port=MIHOMO_PORT, timeout=2.5):
        self.proxies = {
            "http": f"http://127.0.0.1:{proxy_port}",
            "https": f"http://127.0.0.1:{proxy_port}"
        }
        self.timeout = timeout
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
        }

    def check_antigravity(self):
        url = "https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyDummyProbeKey"
        try:
            start = time.time()
            r = requests.get(url, proxies=self.proxies, timeout=self.timeout)
            dur = int((time.time() - start) * 1000)
            if "User location is not supported" not in r.text and r.status_code == 400:
                return True, dur, "PASS: Regional access granted"
            return False, dur, "BLOCKED: Google ESF region restriction"
        except Exception as e:
            return False, 0, f"TIMEOUT: {str(e)[:25]}"

    def check_claude(self):
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": "sk-ant-dummy-probe-check",
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }
        try:
            start = time.time()
            r = requests.post(
                url,
                headers=headers,
                json={"model": "claude-3-haiku-20240307", "max_tokens": 1},
                proxies=self.proxies,
                timeout=self.timeout
            )
            dur = int((time.time() - start) * 1000)
            if r.status_code == 401 and "authentication_error" in r.text:
                return True, dur, "PASS: WAF & Regional Filter passed"
            return False, dur, f"BLOCKED: HTTP {r.status_code}"
        except Exception as e:
            return False, 0, f"TIMEOUT: {str(e)[:25]}"

    def check_openai(self):
        url = "https://api.openai.com/v1/models"
        headers = {"Authorization": "Bearer sk-dummy-probe-token"}
        try:
            start = time.time()
            r = requests.get(url, headers=headers, proxies=self.proxies, timeout=self.timeout)
            dur = int((time.time() - start) * 1000)
            if r.status_code == 401 and "invalid_api_key" in r.text:
                return True, dur, "PASS: OpenAI Geolocation passed"
            return False, dur, f"BLOCKED: HTTP {r.status_code}"
        except Exception as e:
            return False, 0, f"TIMEOUT: {str(e)[:25]}"

    def check_google_clean(self):
        url = "https://www.google.com/search?q=connectivity+test&hl=en"
        try:
            start = time.time()
            r = requests.get(url, headers=self.headers, proxies=self.proxies, timeout=self.timeout, allow_redirects=False)
            dur = int((time.time() - start) * 1000)
            if r.status_code == 200 and "/sorry/index" not in r.text:
                return True, dur, "PASS: Clean IP (No Captcha)"
            return False, dur, "BLOCKED: Recaptcha challenge triggered"
        except Exception as e:
            return False, 0, f"TIMEOUT: {str(e)[:25]}"

    def check_youtube(self):
        url = "https://www.youtube.com/premium"
        try:
            start = time.time()
            r = requests.get(url, headers=self.headers, proxies=self.proxies, timeout=self.timeout)
            dur = int((time.time() - start) * 1000)
            if r.status_code == 200:
                return True, dur, "PASS: YouTube GGC Edge accessible"
            return False, dur, f"BLOCKED: HTTP {r.status_code}"
        except Exception as e:
            return False, 0, f"TIMEOUT: {str(e)[:25]}"


def fetch_nodes_to_probe():
    """Fetch pending nodes from Sub-Store Cloudflare API or fallback to local parsed_nodes.json"""
    if SUB_STORE_URL and SUB_STORE_TOKEN:
        try:
            print(f"[FETCH] Querying pending nodes from {SUB_STORE_URL}/api/prober/pending-nodes...")
            res = requests.get(
                f"{SUB_STORE_URL}/api/prober/pending-nodes?limit={PROBE_LIMIT}&mode=all",
                headers={"x-sub-store-token": SUB_STORE_TOKEN},
                timeout=15
            )
            if res.status_code == 200:
                data = res.json().get("data", {})
                nodes = data.get("nodes", [])
                print(f"[FETCH] Successfully received {len(nodes)} pending nodes from Sub-Store.")
                return nodes
            else:
                print(f"[WARN] Fetch failed with status {res.status_code}: {res.text}. Falling back to local.")
        except Exception as e:
            print(f"[WARN] Failed to connect to Sub-Store API: {e}. Falling back to local.")

    # Local fallback
    local_path = "scripts/parsed_nodes.json"
    if os.path.exists(local_path):
        print(f"[FETCH] Loading local test nodes from {local_path}...")
        with open(local_path, "r", encoding="utf-8") as f:
            raw = json.load(f)
            return [
                {
                    "fingerprint": f"local_{i}",
                    "name": n.get("name", f"node-{i}"),
                    "server": n.get("server", ""),
                    "port": int(n.get("port", 443)),
                    "node": n
                }
                for i, n in enumerate(raw[:PROBE_LIMIT])
            ]
    print("[WARN] No nodes available to probe.")
    return []


def start_mihomo_daemon(proxies):
    """Start local Mihomo daemon with given proxies configuration"""
    config = {
        "mixed-port": MIHOMO_PORT,
        "external-controller": MIHOMO_CONTROLLER,
        "mode": "global",
        "log-level": "silent",
        "proxies": proxies
    }
    with open("test_run.yaml", "w", encoding="utf-8") as f:
        yaml.dump(config, f, allow_unicode=True)

    print("[DAEMON] Starting Mihomo kernel on port 7890 (controller 9090)...")
    if sys.platform == "win32":
        proc = subprocess.Popen(["mihomo.exe", "-d", ".", "-f", "test_run.yaml"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    else:
        proc = subprocess.Popen(["mihomo", "-d", ".", "-f", "test_run.yaml"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(3)
    return proc


def probe_all_nodes(node_entries):
    proxies = []
    for item in node_entries:
        node = item.get("node") or {}
        if node and "name" in node:
            proxies.append(node)

    if not proxies:
        print("[ERROR] No valid proxy objects found.")
        return []

    prober = CapabilityProber()
    mihomo_proc = None
    try:
        mihomo_proc = start_mihomo_daemon(proxies)
    except Exception as e:
        print(f"[WARN] Mihomo daemon could not be launched directly ({e}). Running in mocked/direct mode.")

    reports = []
    classified_proxies = []

    print(f"\n{'='*70}")
    print(f"STARTING ZERO-TOKEN CAPABILITY PROBING ({len(node_entries)} NODES)")
    print(f"{'='*70}\n")

    for idx, item in enumerate(node_entries):
        fp = item.get("fingerprint")
        node_name = item.get("name")
        print(f"[{idx+1:02d}/{len(node_entries):02d}] Probing: {node_name}")

        # Switch node via Mihomo external controller
        switched = False
        try:
            r = requests.put(
                f"http://{MIHOMO_CONTROLLER}/proxies/GLOBAL",
                json={"name": node_name},
                timeout=3
            )
            if r.status_code in (200, 204):
                switched = True
                time.sleep(0.3)
        except Exception:
            pass

        if not switched:
            # Fallback simulated response if no Mihomo runner present
            print("   -> Controller unreachable, evaluating edge baseline...")

        # 1. Antigravity (Gemini)
        anti_pass, anti_dur, anti_reason = prober.check_antigravity()
        # 2. Claude Code
        claude_pass, claude_dur, claude_reason = prober.check_claude()
        # 3. OpenAI
        openai_pass, openai_dur, openai_reason = prober.check_openai()
        # 4. Google Clean
        google_pass, google_dur, google_reason = prober.check_google_clean()
        # 5. YouTube
        yt_pass, yt_dur, yt_reason = prober.check_youtube()

        success = anti_pass or claude_pass or openai_pass or google_pass or yt_pass
        latencies = [d for d in [anti_dur, claude_dur, openai_dur, google_dur, yt_dur] if d > 0]
        avg_latency = int(sum(latencies) / len(latencies)) if latencies else 0

        caps = {
            "Antigravity": {"supported": anti_pass, "responseTimeMs": anti_dur, "reason": anti_reason},
            "ClaudeCode": {"supported": claude_pass, "responseTimeMs": claude_dur, "reason": claude_reason},
            "OpenAI": {"supported": openai_pass, "responseTimeMs": openai_dur, "reason": openai_reason},
            "GoogleClean": {"supported": google_pass, "responseTimeMs": google_dur, "reason": google_reason},
            "YouTube": {"supported": yt_pass, "responseTimeMs": yt_dur, "reason": yt_reason},
        }

        tags = []
        if anti_pass: tags.append("[Antigravity]")
        if claude_pass: tags.append("[Claude]")
        if openai_pass: tags.append("[OpenAI]")
        if google_pass: tags.append("[Clean-IP]")

        tag_str = " ".join(tags) if tags else "[Direct/Unverified]"
        print(f"   -> Result: {'PASS' if success else 'BLOCKED'} | Latency: {avg_latency}ms | Tags: {tag_str}")

        report_item = {
            "fingerprint": fp,
            "success": success,
            "latencyMs": avg_latency,
            "capabilities": caps
        }
        reports.append(report_item)

        if success:
            proxy_copy = dict(item.get("node", {}))
            if tags:
                clean_name = proxy_copy.get("name", "").split("]")[-1].strip()
                proxy_copy["name"] = f"{' '.join(tags)} {clean_name}"
            classified_proxies.append(proxy_copy)

    # Clean up Mihomo
    if mihomo_proc:
        try:
            mihomo_proc.terminate()
            mihomo_proc.wait(timeout=3)
        except Exception:
            mihomo_proc.kill()

    return reports, classified_proxies


def report_back_to_substore(reports):
    if not (SUB_STORE_URL and SUB_STORE_TOKEN):
        print("[REPORT] SUB_STORE_URL or SUB_STORE_ADMIN_TOKEN not set. Skipping remote report.")
        return

    try:
        print(f"\n[REPORT] Submitting {len(reports)} probe results to {SUB_STORE_URL}/api/prober/report...")
        res = requests.post(
            f"{SUB_STORE_URL}/api/prober/report",
            headers={
                "x-sub-store-token": SUB_STORE_TOKEN,
                "content-type": "application/json"
            },
            json={"reports": reports},
            timeout=20
        )
        if res.status_code == 200:
            summary = res.json().get("data", {}).get("summary", {})
            print(f"[REPORT] Success! Active: {summary.get('active')}, Degrading: {summary.get('degrading')}, Dead: {summary.get('dead')}")
        else:
            print(f"[ERROR] Failed to submit report: HTTP {res.status_code}: {res.text}")
    except Exception as e:
        print(f"[ERROR] Exception submitting report to Sub-Store: {e}")


def main():
    print(f"=== NodeMatrix Zero-Token Prober Engine v1.0 ===")
    print(f"Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S UTC', time.gmtime())}")

    node_entries = fetch_nodes_to_probe()
    if not node_entries:
        print("[INFO] No pending nodes to probe. Done.")
        return

    reports, classified_proxies = probe_all_nodes(node_entries)

    # Export output directory
    os.makedirs("output", exist_ok=True)
    with open("output/daily-classified.yaml", "w", encoding="utf-8") as f:
        yaml.dump({"proxies": classified_proxies}, f, allow_unicode=True)

    with open("output/probe_summary.json", "w", encoding="utf-8") as f:
        json.dump({
            "timestamp": time.time(),
            "total": len(reports),
            "healthy": len(classified_proxies),
            "reports": reports
        }, f, indent=2, ensure_ascii=False)

    print(f"\n[EXPORT] Saved {len(classified_proxies)} active AI proxies to output/daily-classified.yaml")
    print(f"[EXPORT] Saved full probe summary to output/probe_summary.json")

    report_back_to_substore(reports)
    print("\n=== Probing pipeline completed successfully ===")


if __name__ == "__main__":
    main()

