/**
 * Sub-Store Cloudflare Integration Engine
 * Generates Sub-Store Operator scripts, Artifact templates, and bidirectional sync workflows.
 */

export interface SubStoreConfig {
  baseUrl: string;
  token: string;
  rawCollectionName: string;
  classifiedCollectionName: string;
  cronInterval: number; // in hours
}

export function generateSubStoreOperatorScript(): string {
  return `/**
 * Sub-Store Script Operator: Antigravity & AI Capability Filter
 * Compatible with Sub-Store Cloudflare / Node.js runtime.
 * Usage: Add as a Script Operator in Sub-Store Collection or Artifact.
 */

function operator(proxies = [], targetPlatform) {
  // Regex identifying verified capability markers
  const ANTIGRAVITY_REGEX = /\\[Antigravity|\\[Gemini|Gemini|Antigravity/i;
  const CLAUDE_REGEX = /\\[Claude|ClaudeCode/i;
  const OPENAI_REGEX = /\\[OpenAI|ChatGPT/i;
  const CLEAN_IP_REGEX = /\\[Clean-IP\\]/i;

  return proxies.map(proxy => {
    const name = proxy.name || '';
    
    // Tag detected capabilities
    const isAntigravity = ANTIGRAVITY_REGEX.test(name);
    const isClaude = CLAUDE_REGEX.test(name);
    const isOpenAI = OPENAI_REGEX.test(name);

    // Filter out known hostile ASNs or bad landing types
    if (proxy.server && (proxy.server.startsWith('104.21.') || proxy.server.startsWith('104.26.'))) {
      // Cloudflare worker edge - mark as incompatible with Google ESF
      proxy._isCloudflareWorker = true;
    }

    return proxy;
  });
}
`;
}

export function generateSubStoreArtifactTemplate(subStoreUrl: string, token: string): string {
  return `# Sub-Store Cloudflare Artifact Template: Clash TUN + AI Smart Policy
# Path: /download/artifact/antigravity-clash?token=${token}

mixed-port: 7890
allow-lan: false
mode: rule
log-level: info
ipv6: false

dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
  nameserver:
    - https://dns.google/dns-query
    - https://1.1.1.1/dns-query

tun:
  enable: true
  stack: mixed
  auto-route: true
  auto-detect-interface: true
  dns-hijack:
    - "tcp://any:53"
    - "udp://any:53"

# Sub-Store Injected Proxy Groups
proxy-groups:
  - name: "🤖 AI-Services"
    type: fallback
    url: "https://generativelanguage.googleapis.com"
    interval: 180
    proxies:
      - "🔵 Gemini-Antigravity"
      - "🟣 Claude-Code"
      - "🟢 OpenAI-ChatGPT"

  - name: "🔵 Gemini-Antigravity"
    type: fallback
    url: "https://generativelanguage.googleapis.com"
    interval: 180
    filter: "(?i)\\[Antigravity"
    use:
      - verified-sub

  - name: "🟣 Claude-Code"
    type: fallback
    url: "https://api.anthropic.com"
    interval: 180
    filter: "(?i)\\[Claude"
    use:
      - verified-sub

  - name: "🟢 OpenAI-ChatGPT"
    type: fallback
    url: "https://api.openai.com"
    interval: 180
    filter: "(?i)\\[OpenAI"
    use:
      - verified-sub

  - name: "🎬 Media-Streaming"
    type: url-test
    url: "https://www.youtube.com/generate_204"
    interval: 600
    filter: "(?i)HK|HongKong|TW|JP"
    use:
      - verified-sub

  - name: "GLOBAL-FALLBACK"
    type: fallback
    url: "http://www.gstatic.com/generate_204"
    interval: 180
    use:
      - verified-sub

proxy-providers:
  verified-sub:
    type: http
    url: "${subStoreUrl}/download/collection/daily-classified?token=${token}"
    path: ./profiles/proxies/verified.yaml
    interval: 7200
    health-check:
      enable: true
      url: https://generativelanguage.googleapis.com
      interval: 300

rules:
  # Antigravity 2 Core Routing
  - DOMAIN,daily-cloudcode-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,cloudcode-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,generativelanguage.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,alkalimakersuite-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN-SUFFIX,antigravity.google,🔵 Gemini-Antigravity
  - DOMAIN-KEYWORD,gemini,🔵 Gemini-Antigravity

  # Claude Code & Anthropic
  - DOMAIN-SUFFIX,anthropic.com,🟣 Claude-Code
  - DOMAIN-SUFFIX,claude.ai,🟣 Claude-Code

  # OpenAI & ChatGPT
  - DOMAIN-SUFFIX,openai.com,🟢 OpenAI-ChatGPT
  - DOMAIN-SUFFIX,chatgpt.com,🟢 OpenAI-ChatGPT

  # Streaming & Media
  - DOMAIN-SUFFIX,youtube.com,🎬 Media-Streaming
  - DOMAIN-SUFFIX,googlevideo.com,🎬 Media-Streaming

  # Direct Domestic Traffic
  - GEOIP,CN,DIRECT
  - MATCH,GLOBAL-FALLBACK
`;
}

export function generateSyncWorkflowYaml(config: SubStoreConfig): string {
  return `name: Sub-Store Cloudflare Capability Sync Pipeline

on:
  schedule:
    - cron: '0 */${config.cronInterval} * * *'  # Triggered every ${config.cronInterval} hours
  workflow_dispatch:

permissions:
  contents: write

jobs:
  probe-and-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Setup Python 3.10
        uses: actions/setup-python@v5
        with:
          python-version: '3.10'
          cache: 'pip'

      - name: Install Mihomo Kernel (Clash Meta)
        run: |
          wget -q -O mihomo.gz https://github.com/MetaCubeX/mihomo/releases/download/v1.18.7/mihomo-linux-amd64-v1.18.7.gz
          gunzip mihomo.gz
          chmod +x mihomo
          sudo mv mihomo /usr/local/bin/

      - name: Fetch Raw Collection from Sub-Store Cloudflare
        run: |
          pip install requests pyyaml
          # Pull unclassified raw aggregation
          curl -sL "${config.baseUrl}/download/collection/${config.rawCollectionName}?token=${config.token}" -o raw_nodes.yaml

      - name: Execute Zero-Token Capability Prober
        env:
          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}
        run: |
          python -c '
          import os, time, yaml, requests

          with open("raw_nodes.yaml") as f:
              data = yaml.safe_load(f)
          proxies = data.get("proxies", [])
          print(f"Total raw proxies fetched: {len(proxies)}")

          # Start Mihomo daemon
          temp_cfg = {
              "mixed-port": 7890,
              "external-controller": "127.0.0.1:9090",
              "mode": "global",
              "proxies": proxies
          }
          with open("test_run.yaml", "w") as f:
              yaml.dump(temp_cfg, f)

          os.system("mihomo -d . -f test_run.yaml > /dev/null 2>&1 &")
          time.sleep(3)

          tagged_proxies = []
          for p in proxies:
              name = p["name"]
              # Switch node via clash external controller API
              try:
                  requests.put("http://127.0.0.1:9090/proxies/GLOBAL", json={"name": name}, timeout=3)
                  time.sleep(0.4)

                  # 1. Antigravity 2 Probe
                  anti_pass = False
                  try:
                      r = requests.get(
                          "https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyDummyProbe",
                          proxies={"http": "http://127.0.0.1:7890", "https": "http://127.0.0.1:7890"},
                          timeout=6
                      )
                      if "User location is not supported" not in r.text and r.status_code == 400:
                          anti_pass = True
                  except:
                      pass

                  # 2. Claude Code Probe
                  claude_pass = False
                  try:
                      r2 = requests.post(
                          "https://api.anthropic.com/v1/messages",
                          headers={"x-api-key": "sk-ant-dummy-probe", "anthropic-version": "2023-06-01", "content-type": "application/json"},
                          json={"model": "claude-3-haiku-20240307", "max_tokens": 1},
                          proxies={"http": "http://127.0.0.1:7890", "https": "http://127.0.0.1:7890"},
                          timeout=5
                      )
                      if r2.status_code == 401 and "authentication_error" in r2.text:
                          claude_pass = True
                  except:
                      pass

                  # Tag name
                  tags = []
                  if anti_pass: tags.append("[Antigravity]")
                  if claude_pass: tags.append("[Claude]")
                  
                  tag_prefix = " ".join(tags)
                  if tag_prefix:
                      p["name"] = f"{tag_prefix} {name}"
                      tagged_proxies.append(p)
                      print(f" -> PASSED: {p[\"name\"]}")
                  else:
                      print(f" -> BLOCKED/DC: {name}")
              except Exception as e:
                  continue

          os.system("pkill -9 mihomo || true")

          # Write classified collection
          out_data = {"proxies": tagged_proxies}
          os.makedirs("output", exist_ok=True)
          with open("output/daily-classified.yaml", "w") as f:
              yaml.dump(out_data, f, allow_unicode=True)
          print(f"Tagged {len(tagged_proxies)} active AI proxies.")
          '

      - name: Push Back to Sub-Store Cloudflare / GitHub Pages
        run: |
          # 1. Distribute via GitHub Pages / Branch
          cd output
          git init
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add daily-classified.yaml
          git commit -m "chore: sync classified proxies to Sub-Store source (\$(date -u))"
          git push -f https://\${{ secrets.GITHUB_TOKEN }}@github.com/\${{ github.repository }}.git HEAD:sub-store-sync
`;
}
