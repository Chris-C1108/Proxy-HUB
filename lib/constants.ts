import { ServiceProbeDefinition } from './types';

export const SERVICE_PROBES: ServiceProbeDefinition[] = [
  {
    id: 'Antigravity',
    name: 'Antigravity 2 (Gemini Agent)',
    category: 'AI Agents',
    targetEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
    gateway: 'Google Enterprise Service Frontend (ESF)',
    zeroTokenMethod: 'GET with dummy key ?key=AIzaSyDummyProbeCheck',
    passCondition: 'HTTP 400 with status: "INVALID_ARGUMENT" (Region allowed, Key invalid)',
    blockCondition: 'HTTP 400 with message: "User location is not supported for the API use."',
    detailedPrinciple:
      'Antigravity 2 language servers connect to Google ESF. Google maintains its own real-time GeoIP database and strictly penalizes Datacenter ASNs (Hetzner, OVH, Oracle, AWS, etc.), rejecting them even if physically located in the US. In TUN mode, domestic IPv6 leaks will directly expose the user location and trigger the block.',
    riskFactor: 'Strict (DC Block)',
  },
  {
    id: 'ClaudeCode',
    name: 'Claude Code (Anthropic API)',
    category: 'AI Agents',
    targetEndpoint: 'https://api.anthropic.com/v1/messages',
    gateway: 'Cloudflare Enterprise WAF + Anthropic Risk Engine',
    zeroTokenMethod: 'POST with dummy header x-api-key: sk-ant-dummy-probe',
    passCondition: 'HTTP 401 with type: "authentication_error" (Passed WAF/Geo, failed auth)',
    blockCondition: 'HTTP 403 Forbidden / Cloudflare 1020 / permission_error',
    detailedPrinciple:
      'Cloudflare edge reads the cf-ipcountry header and evaluates IP threat scores. If the IP is from an unsupported region (CN, HK, RU, etc.) or is on a blacklisted datacenter ASN, Cloudflare blocks it at the edge with HTTP 403 before Anthropic auth logic runs.',
    riskFactor: 'High (WAF + ASN)',
  },
  {
    id: 'OpenAI',
    name: 'ChatGPT & OpenAI API',
    category: 'AI Agents',
    targetEndpoint: 'https://api.openai.com/v1/models',
    gateway: 'Cloudflare Turnstile + Arkose Labs + OpenAI Gateway',
    zeroTokenMethod: 'GET with header Authorization: Bearer sk-dummy-check',
    passCondition: 'HTTP 401 with error code: "invalid_api_key"',
    blockCondition: 'HTTP 403 with error "unsupported_country" or Cloudflare Challenge page',
    detailedPrinciple:
      'Web access (chatgpt.com) enforces Cloudflare Turnstile bot checks and TLS fingerprinting. The API gateway validates geolocation against allowed country lists. High fraud score IPs trigger 403 unsupported_country or rate limit traps.',
    riskFactor: 'Medium (Turnstile)',
  },
  {
    id: 'GoogleClean',
    name: 'Google Search (Clean IP)',
    category: 'Search & IP Health',
    targetEndpoint: 'https://www.google.com/search?q=connectivity+test&hl=en',
    gateway: 'Google Abuse & Recaptcha Defense',
    zeroTokenMethod: 'GET search page with standard browser headers',
    passCondition: 'HTTP 200 without redirecting to /sorry/index',
    blockCondition: 'HTTP 429 or redirect to /sorry/index?continue=... (Unusual traffic Recaptcha)',
    detailedPrinciple:
      'Measures overall IP reputation. IPs heavily shared or abused by web scrapers are flagged by Google, presenting captchas. A clean IP that passes this test provides smooth browsing and reliable AI telemetry.',
    riskFactor: 'High (WAF + ASN)',
  },
  {
    id: 'YouTube',
    name: 'YouTube Premium & Media',
    category: 'Media & Social',
    targetEndpoint: 'https://www.youtube.com/premium',
    gateway: 'Google Global Cache (GGC) & Rights Engine',
    zeroTokenMethod: 'GET /premium landing page',
    passCondition: 'HTTP 200 with regional plan availability',
    blockCondition: 'HTTP 429 rate limit or region unsupported notice',
    detailedPrinciple:
      'Validates that the proxy egress IP is routed to a legitimate local GGC edge and is authorized for media streaming and YouTube Premium subscription purchasing.',
    riskFactor: 'Low (Rate limit)',
  },
  {
    id: 'Twitter',
    name: 'X.com / Twitter API',
    category: 'Media & Social',
    targetEndpoint: 'https://api.x.com/1.1/guest/activate.json',
    gateway: 'Twitter Anti-Scrape WAF',
    zeroTokenMethod: 'POST with public client credentials',
    passCondition: 'HTTP 200 with guest_token generated',
    blockCondition: 'HTTP 403 or HTTP 429 rate limit',
    detailedPrinciple:
      'Twitter tightly throttles guest activation tokens on noisy proxy pools. Passing guest token activation confirms the node can render Twitter feeds without aggressive login walls.',
    riskFactor: 'Medium (Turnstile)',
  },
  {
    id: 'GitHubCopilot',
    name: 'GitHub Copilot / API',
    category: 'AI Agents',
    targetEndpoint: 'https://api.github.com/copilot_internal/v2/token',
    gateway: 'Microsoft Azure Front Door / GitHub WAF',
    zeroTokenMethod: 'GET with dummy authorization',
    passCondition: 'HTTP 401 Bad credentials (IP allowed, bad token)',
    blockCondition: 'HTTP 403 Forbidden / Geo-restricted',
    detailedPrinciple:
      'Copilot telemetry requires low-jitter HTTPS endpoints. Blocked or throttled developer IPs will cause language server disconnects inside VS Code and Antigravity plugins.',
    riskFactor: 'Medium (Turnstile)',
  },
];

export const CORE_ANTIGRAVITY_DOMAINS = [
  'daily-cloudcode-pa.googleapis.com',
  'cloudcode-pa.googleapis.com',
  'generativelanguage.googleapis.com',
  'antigravity.google',
  'ai.google.dev',
  'alkalimakersuite-pa.googleapis.com',
];

export const TUN_PITFALLS = [
  {
    title: 'IPv6 Leak Bypass in Domestic Dual-Stack Networks',
    description:
      'When your local network assigns a public IPv6 address, client connections to Google endpoints frequently resolve and establish over IPv6 bypassing the IPv4 TUN proxy, immediately exposing domestic coordinates.',
    solution:
      'Set `ipv6: false` in Clash/Mihomo DNS and Global settings, and configure TUN stack to drop domestic IPv6 or bind exclusively to fake-ip.',
    codeSnippet: 'ipv6: false\ndns:\n  enable: true\n  ipv6: false\n  enhanced-mode: fake-ip',
  },
  {
    title: 'Language Server Daemon Sub-Process Bypass',
    description:
      'Antigravity 2 spawns child processes (`language_server_windows_x64.exe`, `node.exe`) that might bypass system proxy settings if the TUN adapter does not enforce strict global route interception.',
    solution:
      'Enable `auto-route: true`, `auto-detect-interface: true`, and `dns-hijack: ["tcp://any:53", "udp://any:53"]` in the TUN configuration.',
    codeSnippet: 'tun:\n  enable: true\n  stack: mixed\n  auto-route: true\n  auto-detect-interface: true\n  dns-hijack:\n    - "tcp://any:53"\n    - "udp://any:53"',
  },
  {
    title: 'Fake-IP Range Collision with Corporate Intranets',
    description:
      'Default fake-ip-range `198.18.0.1/16` is standard for RFC 2544 benchmark tests, but custom corporate setups may conflict if conflicting routes exist.',
    solution:
      'Stick to `198.18.0.1/16` or isolated class B space, with `fake-ip-filter` excluding local LAN domains (`*.lan`, `*.local`, `localhost`).',
    codeSnippet: 'dns:\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "*.lan"\n    - "*.local"\n    - "localhost.ptlogin2.qq.com"',
  },
  {
    title: 'Datacenter ASN Fingerprinting vs Residential Purity',
    description:
      'Even if an IP has no DNS or IPv6 leak, Google ESF will still reject it with 400 FAILED_PRECONDITION if the ASN belongs to high-frequency cloud hosting (Hetzner, OVH, Linode, AWS, GCP, Oracle).',
    solution:
      'Use the Capability Prober to tag nodes and assign only [Antigravity] verified nodes (typically residential ISP or unflagged hosting) to the Antigravity fallback policy group.',
    codeSnippet: 'proxy-groups:\n  - name: "Antigravity-Auto"\n    type: fallback\n    url: "https://generativelanguage.googleapis.com"\n    interval: 180\n    proxies:\n      - "[Antigravity] US-Residential-01"\n      - "[Antigravity] JP-Clean-02"',
  },
];
