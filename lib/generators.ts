import { NodeItem, TunConfigOptions } from './types';

export function generateClashYaml(nodes: NodeItem[], options: TunConfigOptions): string {
  // Filter nodes matching options.minCapabilities if any
  const filteredNodes = nodes.filter((node) => {
    if (options.minCapabilities.length === 0) return true;
    return options.minCapabilities.every((cap) => node.capabilities[cap]?.supported);
  });

  const nodeNames = filteredNodes.map((n) => n.name);
  const antigravityNodes = filteredNodes
    .filter((n) => n.capabilities.Antigravity?.supported)
    .map((n) => n.name);
  const claudeNodes = filteredNodes
    .filter((n) => n.capabilities.ClaudeCode?.supported)
    .map((n) => n.name);
  const openAiNodes = filteredNodes
    .filter((n) => n.capabilities.OpenAI?.supported)
    .map((n) => n.name);
  const googleNodes = filteredNodes
    .filter((n) => n.capabilities.GoogleClean?.supported)
    .map((n) => n.name);
  const youtubeNodes = filteredNodes
    .filter((n) => n.capabilities.YouTube?.supported)
    .map((n) => n.name);

  // Fallbacks if lists are empty
  const safeAntigravity = antigravityNodes.length > 0 ? antigravityNodes : nodeNames;
  const safeClaude = claudeNodes.length > 0 ? claudeNodes : nodeNames;
  const safeOpenAi = openAiNodes.length > 0 ? openAiNodes : nodeNames;
  const safeGoogle = googleNodes.length > 0 ? googleNodes : nodeNames;
  const safeYoutube = youtubeNodes.length > 0 ? youtubeNodes : nodeNames;

  return `# ==============================================================================
# NodeMatrix - AI & Proxy Capability Managed Profile
# Generated: ${new Date().toISOString()}
# Total Nodes: ${filteredNodes.length} (Verified Antigravity: ${antigravityNodes.length})
# ==============================================================================

port: 7890
socks-port: 7891
mixed-port: 7890
allow-lan: false
mode: rule
log-level: info
ipv6: ${options.blockIpv6 ? 'false' : 'true'}
external-controller: 127.0.0.1:9090

# DNS Subsystem (Strictly tuned for TUN Mode & Preventing GeoIP Poisoning)
dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: ${options.blockIpv6 ? 'false' : 'true'}
  enhanced-mode: ${options.fakeIpMode ? 'fake-ip' : 'redir-host'}
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "localhost.ptlogin2.qq.com"
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.google/dns-query
    - https://1.1.1.1/dns-query

${
  options.enableTun
    ? `# TUN Interface Interceptor (Catches VS Code / Antigravity child daemons)
tun:
  enable: true
  stack: mixed
  auto-route: true
  auto-detect-interface: true
  dns-hijack:
    - "tcp://any:53"
    - "udp://any:53"
`
    : '# TUN mode disabled'
}

# Verified Proxy Outbounds
proxies:
${filteredNodes
  .map(
    (n) => `  - name: "${n.name}"
    type: ${n.type === 'hysteria2' ? 'hysteria2' : n.type}
    server: ${n.server}
    port: ${n.port}
    uuid: "a0000000-0000-0000-0000-000000000001"
    alterId: 0
    cipher: auto
    tls: true
    skip-cert-verify: false`
  )
  .join('\n')}

# High-Availability Smart Policy Groups
proxy-groups:
  - name: "🤖 AI-Services"
    type: fallback
    url: "https://generativelanguage.googleapis.com"
    interval: ${options.fallbackInterval}
    proxies:
      - "🔵 Gemini-Antigravity"
      - "🟣 Claude-Code"
      - "🟢 OpenAI-ChatGPT"

  - name: "🔵 Gemini-Antigravity"
    type: fallback
    url: "https://generativelanguage.googleapis.com"
    interval: ${options.fallbackInterval}
    proxies:
${safeAntigravity.map((name) => `      - "${name}"`).join('\n')}

  - name: "🟣 Claude-Code"
    type: fallback
    url: "https://api.anthropic.com"
    interval: ${options.fallbackInterval}
    proxies:
${safeClaude.map((name) => `      - "${name}"`).join('\n')}

  - name: "🟢 OpenAI-ChatGPT"
    type: fallback
    url: "https://api.openai.com"
    interval: ${options.fallbackInterval}
    proxies:
${safeOpenAi.map((name) => `      - "${name}"`).join('\n')}

  - name: "🎬 YouTube-Streaming"
    type: url-test
    url: "https://www.youtube.com/generate_204"
    interval: 600
    tolerance: 100
    proxies:
${safeYoutube.map((name) => `      - "${name}"`).join('\n')}

  - name: "🔍 Google-Clean"
    type: fallback
    url: "https://www.google.com/generate_204"
    interval: 600
    proxies:
${safeGoogle.map((name) => `      - "${name}"`).join('\n')}

  - name: "GLOBAL-FALLBACK"
    type: fallback
    url: "http://www.gstatic.com/generate_204"
    interval: 180
    proxies:
${nodeNames.map((name) => `      - "${name}"`).join('\n')}

# Routing Rules
rules:
  # Antigravity 2 & Gemini Services
  - DOMAIN,daily-cloudcode-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,cloudcode-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,generativelanguage.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN,alkalimakersuite-pa.googleapis.com,🔵 Gemini-Antigravity
  - DOMAIN-SUFFIX,antigravity.google,🔵 Gemini-Antigravity
  - DOMAIN-SUFFIX,ai.google.dev,🔵 Gemini-Antigravity
  - DOMAIN-KEYWORD,gemini,🔵 Gemini-Antigravity

  # Claude Code & Anthropic
  - DOMAIN-SUFFIX,anthropic.com,🟣 Claude-Code
  - DOMAIN-SUFFIX,claude.ai,🟣 Claude-Code

  # OpenAI & ChatGPT
  - DOMAIN-SUFFIX,openai.com,🟢 OpenAI-ChatGPT
  - DOMAIN-SUFFIX,chatgpt.com,🟢 OpenAI-ChatGPT
  - DOMAIN-SUFFIX,oaistatic.com,🟢 OpenAI-ChatGPT
  - DOMAIN-SUFFIX,oaiusercontent.com,🟢 OpenAI-ChatGPT

  # Streaming & IP Health
  - DOMAIN-SUFFIX,youtube.com,🎬 YouTube-Streaming
  - DOMAIN-SUFFIX,googlevideo.com,🎬 YouTube-Streaming
  - DOMAIN-SUFFIX,google.com,🔍 Google-Clean

  # Domestic Direct Bypass
  - GEOIP,CN,DIRECT
  - MATCH,GLOBAL-FALLBACK
`;
}

export function generateSingBoxJson(nodes: NodeItem[], options: TunConfigOptions): string {
  const filteredNodes = nodes.filter((node) => {
    if (options.minCapabilities.length === 0) return true;
    return options.minCapabilities.every((cap) => node.capabilities[cap]?.supported);
  });

  const outbounds = filteredNodes.map((n) => ({
    type: n.type === 'ss' ? 'shadowsocks' : n.type,
    tag: n.name,
    server: n.server,
    server_port: n.port,
    method: 'chacha20-ietf-poly1305',
    password: 'dummy-password',
  }));

  const config = {
    log: {
      level: 'info',
      timestamp: true,
    },
    dns: {
      servers: [
        {
          tag: 'dns-remote',
          address: 'https://1.1.1.1/dns-query',
          detour: 'select-antigravity',
        },
        {
          tag: 'dns-direct',
          address: '223.5.5.5',
          detour: 'direct',
        },
      ],
      rules: [
        {
          domain_suffix: ['googleapis.com', 'google.com', 'anthropic.com', 'openai.com'],
          server: 'dns-remote',
        },
      ],
      independent_cache: true,
    },
    inbounds: [
      {
        type: 'tun',
        tag: 'tun-in',
        interface_name: 'tun0',
        inet4_address: '172.19.0.1/30',
        auto_route: true,
        strict_route: true,
        stack: 'mixed',
        sniff: true,
      },
      {
        type: 'mixed',
        tag: 'mixed-in',
        listen: '127.0.0.1',
        listen_port: 7890,
      },
    ],
    outbounds: [
      {
        type: 'urltest',
        tag: 'select-antigravity',
        outbounds: filteredNodes.filter((n) => n.capabilities.Antigravity?.supported).map((n) => n.name),
        url: 'https://generativelanguage.googleapis.com',
        interval: '3m',
      },
      {
        type: 'urltest',
        tag: 'select-claude',
        outbounds: filteredNodes.filter((n) => n.capabilities.ClaudeCode?.supported).map((n) => n.name),
        url: 'https://api.anthropic.com',
        interval: '3m',
      },
      {
        type: 'urltest',
        tag: 'select-openai',
        outbounds: filteredNodes.filter((n) => n.capabilities.OpenAI?.supported).map((n) => n.name),
        url: 'https://api.openai.com',
        interval: '3m',
      },
      ...outbounds,
      {
        type: 'direct',
        tag: 'direct',
      },
    ],
    route: {
      rules: [
        {
          protocol: 'dns',
          outbound: 'dns-remote',
        },
        {
          domain_suffix: ['googleapis.com', 'antigravity.google'],
          outbound: 'select-antigravity',
        },
        {
          domain_suffix: ['anthropic.com', 'claude.ai'],
          outbound: 'select-claude',
        },
        {
          domain_suffix: ['openai.com', 'chatgpt.com'],
          outbound: 'select-openai',
        },
        {
          geosite: 'cn',
          outbound: 'direct',
        },
      ],
      auto_detect_interface: true,
    },
  };

  return JSON.stringify(config, null, 2);
}

export function generateShadowsocksBase64(nodes: NodeItem[]): { plainText: string; base64: string } {
  const lines = nodes.map((n) => {
    // ss://BASE64(method:password@hostname:port)#Tag
    const auth = `chacha20-ietf-poly1305:secret-key@${n.server}:${n.port}`;
    const encodedAuth = typeof window !== 'undefined' ? btoa(auth) : Buffer.from(auth).toString('base64');
    return `ss://${encodedAuth}#${encodeURIComponent(n.name)}`;
  });

  const plainText = lines.join('\n');
  const base64 = typeof window !== 'undefined' ? btoa(plainText) : Buffer.from(plainText).toString('base64');

  return { plainText, base64 };
}

export function generateGitHubWorkflowYaml(cronHours = 4): string {
  return `name: Antigravity & AI Node Capability Prober

on:
  schedule:
    - cron: '0 */${cronHours} * * *'  # Runs every ${cronHours} hours
  workflow_dispatch:

permissions:
  contents: write
  pages: write

jobs:
  probe-and-publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Python 3.10
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

      - name: Run Capability Prober
        env:
          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}
          SUBSCRIPTION_URLS: \${{ secrets.SUBSCRIPTION_URLS }}
        run: |
          pip install requests pyyaml urllib3
          python main.py

      - name: Deploy to GitHub Pages (Single-Commit Orphan Branch)
        run: |
          cd output
          git init
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add clash.yaml sing-box.json ss.txt matrix.json
          git commit -m "chore: auto-update capability classified subscriptions (\$(date -u))"
          git push -f https://\${{ secrets.GITHUB_TOKEN }}@github.com/\${{ github.repository }}.git HEAD:gh-pages
`;
}

export function generatePythonProberCode(): string {
  return `# probe_engine.py - Zero-Token Capability Detection Engine
import os
import requests
import urllib3
urllib3.disable_warnings()

class CapabilityProber:
    """
    Zero-token lightweight probe for major AI and web platforms.
    Evaluates response HTTP status codes and headers to determine if
    the proxy egress IP passed the Geo/WAF boundary.
    """
    def __init__(self, proxy_port=7890, timeout=6):
        self.proxies = {
            "http": f"http://127.0.0.1:{proxy_port}",
            "https": f"http://127.0.0.1:{proxy_port}"
        }
        self.timeout = timeout
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
        }

    def check_antigravity(self, gemini_key="AIzaSyDummyProbeKey"):
        """
        Antigravity 2 / Google Generative Language API
        PASS: HTTP 400 with 'INVALID_ARGUMENT' (IP valid, key dummy)
        BLOCKED: HTTP 400 with 'User location is not supported'
        """
        url = f"https://generativelanguage.googleapis.com/v1beta/models?key={gemini_key}"
        try:
            r = requests.get(url, proxies=self.proxies, timeout=self.timeout)
            if "User location is not supported" not in r.text and r.status_code == 400:
                return True, "PASS"
            return False, "LOCATION_BLOCKED"
        except Exception as e:
            return False, f"TIMEOUT_{str(e)[:15]}"

    def check_claude(self):
        """
        Anthropic Claude Code
        PASS: HTTP 401 with 'authentication_error' (WAF passed, key invalid)
        BLOCKED: HTTP 403 / Cloudflare 1020 error
        """
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": "sk-ant-dummy-probe-check",
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }
        try:
            r = requests.post(url, headers=headers, json={"model": "claude-3-haiku-20240307", "max_tokens": 1},
                              proxies=self.proxies, timeout=self.timeout)
            if r.status_code == 401 and "authentication_error" in r.text:
                return True, "PASS"
            return False, f"HTTP_{r.status_code}_WAF_BLOCKED"
        except Exception:
            return False, "TIMEOUT"

    def check_openai(self):
        """
        OpenAI API & ChatGPT Gateway
        PASS: HTTP 401 with 'invalid_api_key'
        BLOCKED: HTTP 403 with 'unsupported_country'
        """
        url = "https://api.openai.com/v1/models"
        headers = {"Authorization": "Bearer sk-dummy-probe-token"}
        try:
            r = requests.get(url, headers=headers, proxies=self.proxies, timeout=self.timeout)
            if r.status_code == 401 and "invalid_api_key" in r.text:
                return True, "PASS"
            return False, f"HTTP_{r.status_code}"
        except Exception:
            return False, "TIMEOUT"

    def check_google_search(self):
        """
        Google Search Cleanliness
        PASS: HTTP 200 without Recaptcha /sorry/ redirect
        """
        url = "https://www.google.com/search?q=test&hl=en"
        try:
            r = requests.get(url, headers=self.headers, proxies=self.proxies, timeout=self.timeout, allow_redirects=False)
            if r.status_code == 200 and "sorry/index" not in r.text:
                return True, "PASS"
            return False, "CAPTCHA_429"
        except Exception:
            return False, "TIMEOUT"

    def check_youtube(self):
        """
        YouTube Premium Catalog
        PASS: HTTP 200 with subscription purchase availability
        """
        url = "https://www.youtube.com/premium"
        try:
            r = requests.get(url, headers=self.headers, proxies=self.proxies, timeout=self.timeout)
            if r.status_code == 200:
                return True, "PASS"
            return False, f"HTTP_{r.status_code}"
        except Exception:
            return False, "TIMEOUT"

    def check_all(self):
        results = {}
        ok_anti, _ = self.check_antigravity()
        results["Antigravity"] = ok_anti

        ok_claude, _ = self.check_claude()
        results["ClaudeCode"] = ok_claude

        ok_openai, _ = self.check_openai()
        results["OpenAI"] = ok_openai

        ok_google, _ = self.check_google_search()
        results["GoogleClean"] = ok_google

        ok_yt, _ = self.check_youtube()
        results["YouTube"] = ok_yt

        return results
`;
}

export function generateCloudflareWorkerCode(): string {
  return `/**
 * NodeMatrix Edge Distribution Worker
 * Serves dynamic subscriptions (Clash / Sing-box / SS) based on Client User-Agent
 * Supports edge caching via Cloudflare Cache API
 */

const RAW_PAGES_BASE = "https://raw.githubusercontent.com/<YOUR_USER>/<YOUR_REPO>/gh-pages";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = (request.headers.get("User-Agent") || "").toLowerCase();
    const formatParam = url.searchParams.get("format");

    let targetFile = "clash.yaml";
    let contentType = "text/yaml; charset=utf-8";

    if (formatParam === "singbox" || userAgent.includes("sing-box") || userAgent.includes("box4")) {
      targetFile = "sing-box.json";
      contentType = "application/json; charset=utf-8";
    } else if (formatParam === "ss" || userAgent.includes("shadowrocket") || userAgent.includes("quantumult")) {
      targetFile = "ss.txt";
      contentType = "text/plain; charset=utf-8";
    }

    const upstreamUrl = \`\${RAW_PAGES_BASE}/\${targetFile}\`;
    const cacheKey = new Request(upstreamUrl, request);
    const cache = caches.default;

    let response = await cache.match(cacheKey);
    if (!response) {
      const upstreamRes = await fetch(upstreamUrl, {
        headers: { "User-Agent": "NodeMatrix-Worker" }
      });

      if (!upstreamRes.ok) {
        return new Response("Upstream subscription not found. Ensure GitHub Actions has completed.", { status: 502 });
      }

      const bodyText = await upstreamRes.text();
      response = new Response(bodyText, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=1800, s-maxage=3600",
          "Subscription-Userinfo": "upload=1024; download=20480; total=107374182400; expire=1799999999",
          "Access-Control-Allow-Origin": "*"
        }
      });

      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }

    return response;
  }
};
`;
}
