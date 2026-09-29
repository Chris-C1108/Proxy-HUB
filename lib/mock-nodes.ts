import { NodeItem } from './types';

// Pre-loaded from user-provided subscription:
// Source: https://dl.x-chat.ccwu.cc/download/collection/daily?token=iVision
export const INITIAL_NODES: NodeItem[] = [
  {
    "id": "sub-node-001",
    "name": "FPA-AU-yoyapai.com",
    "server": "163.8.195.241",
    "port": 2087,
    "type": "vless",
    "country": "Australia",
    "countryCode": "AU",
    "flag": "🇦🇺",
    "asn": "Commercial Datacenter (163.8.195.241)",
    "asnType": "Commercial Datacenter",
    "latency": 160,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 195
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 185
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 175
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 170
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Australia Catalog)",
        "responseTimeMs": 165
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 180
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 178
      }
    }
  },
  {
    "id": "sub-node-002",
    "name": "FPA-CA-yoyapai.com_14",
    "server": "155.46.167.30",
    "port": 8880,
    "type": "vless",
    "country": "Canada",
    "countryCode": "CA",
    "flag": "🇨🇦",
    "asn": "Commercial Datacenter (155.46.167.30)",
    "asnType": "Commercial Datacenter",
    "latency": 141,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 176
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 166
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 156
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 151
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Canada Catalog)",
        "responseTimeMs": 146
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 161
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 159
      }
    }
  },
  {
    "id": "sub-node-003",
    "name": "FPA-CA-yoyapai.com_15-1",
    "server": "104.21.23.72",
    "port": 8880,
    "type": "vless",
    "country": "Canada",
    "countryCode": "CA",
    "flag": "🇨🇦",
    "asn": "Cloudflare Warp / CDN (104.21.23.72)",
    "asnType": "Cloudflare Warp",
    "latency": 142,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 177
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 167
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 157
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 152
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Canada Catalog)",
        "responseTimeMs": 147
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 162
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 160
      }
    }
  },
  {
    "id": "sub-node-004",
    "name": "FPA-CA-yoyapai.com_16-2",
    "server": "104.21.23.72",
    "port": 8880,
    "type": "vless",
    "country": "Canada",
    "countryCode": "CA",
    "flag": "🇨🇦",
    "asn": "Cloudflare Warp / CDN (104.21.23.72)",
    "asnType": "Cloudflare Warp",
    "latency": 143,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 178
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 168
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 158
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 153
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Canada Catalog)",
        "responseTimeMs": 148
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 163
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 161
      }
    }
  },
  {
    "id": "sub-node-005",
    "name": "FPA-CH-CHE",
    "server": "ch.xiaoliyu.cyou",
    "port": 18333,
    "type": "hysteria2",
    "country": "Switzerland",
    "countryCode": "SW",
    "flag": "🇨🇭",
    "asn": "Commercial Datacenter (ch.xiaoliyu.cyou)",
    "asnType": "Commercial Datacenter",
    "latency": 184,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 219
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 209
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 199
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 194
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Switzerland Catalog)",
        "responseTimeMs": 189
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 204
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 202
      }
    }
  },
  {
    "id": "sub-node-006",
    "name": "FPA-DE-DEU",
    "server": "176.108.241.137",
    "port": 9891,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (176.108.241.137)",
    "asnType": "Commercial Datacenter",
    "latency": 185,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 220
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 210
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 200
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 195
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 190
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 205
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 203
      }
    }
  },
  {
    "id": "sub-node-007",
    "name": "FPA-DE-DEU 2",
    "server": "fi.astrafic.ru",
    "port": 443,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (fi.astrafic.ru)",
    "asnType": "Commercial Datacenter",
    "latency": 186,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 221
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 211
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 201
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 196
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 191
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 206
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 204
      }
    }
  },
  {
    "id": "sub-node-008",
    "name": "FPA-DE-yoyapai.com",
    "server": "46.101.253.244",
    "port": 2083,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (46.101.253.244)",
    "asnType": "Commercial Datacenter",
    "latency": 187,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 222
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 212
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 202
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 197
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 192
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 207
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 205
      }
    }
  },
  {
    "id": "sub-node-009",
    "name": "FPA-DE-yoyapai.com_12",
    "server": "169.40.42.229",
    "port": 443,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (169.40.42.229)",
    "asnType": "Commercial Datacenter",
    "latency": 188,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 223
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 213
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 203
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 198
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 193
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 208
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 206
      }
    }
  },
  {
    "id": "sub-node-010",
    "name": "FPA-FR-FRA 10",
    "server": "vpn-fr-002.fastervpn.world",
    "port": 443,
    "type": "hysteria2",
    "country": "France",
    "countryCode": "FR",
    "flag": "🇫🇷",
    "asn": "Commercial Datacenter (vpn-fr-002.fastervpn.world)",
    "asnType": "Commercial Datacenter",
    "latency": 189,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 224
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 214
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 204
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 199
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (France Catalog)",
        "responseTimeMs": 194
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 209
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 207
      }
    }
  },
  {
    "id": "sub-node-011",
    "name": "FPA-FR-yoyapai.com",
    "server": "94.140.0.100",
    "port": 8880,
    "type": "vless",
    "country": "France",
    "countryCode": "FR",
    "flag": "🇫🇷",
    "asn": "Commercial Datacenter (94.140.0.100)",
    "asnType": "Commercial Datacenter",
    "latency": 190,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 225
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 215
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 205
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 200
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (France Catalog)",
        "responseTimeMs": 195
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 210
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 208
      }
    }
  },
  {
    "id": "sub-node-012",
    "name": "FPA-HK-HKG",
    "server": "xg1.mangshe.xyz",
    "port": 2060,
    "type": "hysteria2",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "Commercial Datacenter (xg1.mangshe.xyz)",
    "asnType": "Commercial Datacenter",
    "latency": 46,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 81
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 71
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 61
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 56
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 51
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 66
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 64
      }
    }
  },
  {
    "id": "sub-node-013",
    "name": "FPA-HK-yoyapai.com",
    "server": "91.193.58.93",
    "port": 443,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.93)",
    "asnType": "Commercial Datacenter",
    "latency": 47,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 82
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 72
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 62
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 57
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 52
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 67
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 65
      }
    }
  },
  {
    "id": "sub-node-014",
    "name": "FPA-HK-yoyapai.com_1",
    "server": "91.193.58.243",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.243)",
    "asnType": "Commercial Datacenter",
    "latency": 48,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 83
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 73
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 63
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 58
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 53
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 68
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 66
      }
    }
  },
  {
    "id": "sub-node-015",
    "name": "FPA-HK-yoyapai.com_1-2",
    "server": "91.193.58.195",
    "port": 443,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.195)",
    "asnType": "Commercial Datacenter",
    "latency": 49,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 84
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 74
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 64
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 59
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 54
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 69
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 67
      }
    }
  },
  {
    "id": "sub-node-016",
    "name": "FPA-HK-yoyapai.com_2",
    "server": "91.193.58.141",
    "port": 443,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.141)",
    "asnType": "Commercial Datacenter",
    "latency": 50,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 85
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 75
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 65
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 60
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 55
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 70
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 68
      }
    }
  },
  {
    "id": "sub-node-017",
    "name": "FPA-HK-yoyapai.com_2-2",
    "server": "91.193.58.246",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.246)",
    "asnType": "Commercial Datacenter",
    "latency": 51,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 86
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 76
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 66
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 61
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 56
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 71
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 69
      }
    }
  },
  {
    "id": "sub-node-018",
    "name": "FPA-HK-yoyapai.com_3",
    "server": "91.193.58.117",
    "port": 443,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.117)",
    "asnType": "Commercial Datacenter",
    "latency": 52,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 87
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 77
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 67
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 62
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 57
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 72
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 70
      }
    }
  },
  {
    "id": "sub-node-019",
    "name": "FPA-HK-yoyapai.com_3-2",
    "server": "91.193.58.209",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.209)",
    "asnType": "Commercial Datacenter",
    "latency": 53,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 88
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 78
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 68
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 63
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 58
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 73
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 71
      }
    }
  },
  {
    "id": "sub-node-020",
    "name": "FPA-HK-yoyapai.com_4",
    "server": "91.193.58.92",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.92)",
    "asnType": "Commercial Datacenter",
    "latency": 54,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 89
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 79
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 69
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 64
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 59
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 74
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 72
      }
    }
  },
  {
    "id": "sub-node-021",
    "name": "FPA-HK-yoyapai.com_4-2",
    "server": "91.193.58.197",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.197)",
    "asnType": "Commercial Datacenter",
    "latency": 55,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 90
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 80
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 70
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 65
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 60
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 75
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 73
      }
    }
  },
  {
    "id": "sub-node-022",
    "name": "FPA-HK-yoyapai.com_5",
    "server": "91.193.58.179",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.179)",
    "asnType": "Commercial Datacenter",
    "latency": 56,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 91
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 81
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 71
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 66
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 61
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 76
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 74
      }
    }
  },
  {
    "id": "sub-node-023",
    "name": "FPA-HK-yoyapai.com_5-2",
    "server": "91.193.58.93",
    "port": 80,
    "type": "vless",
    "country": "Hong Kong",
    "countryCode": "HO",
    "flag": "🇭🇰",
    "asn": "HK Datacenter BGP (91.193.58.93)",
    "asnType": "Commercial Datacenter",
    "latency": 57,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 400,
        "reason": "BLOCKED: User location is not supported (HK region barred)",
        "responseTimeMs": 92
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 82
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 72
      },
      "GoogleClean": {
        "supported": false,
        "status": 429,
        "reason": "CAPTCHA /sorry/index",
        "responseTimeMs": 67
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Hong Kong Catalog)",
        "responseTimeMs": 62
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 77
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 75
      }
    }
  },
  {
    "id": "sub-node-024",
    "name": "FPA-JP-JPN 3",
    "server": "13.230.30.102",
    "port": 38830,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "AWS EC2 Datacenter (13.230.30.102)",
    "asnType": "Commercial Datacenter",
    "latency": 88,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 123
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 113
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 103
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 98
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 93
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 108
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 106
      }
    }
  },
  {
    "id": "sub-node-025",
    "name": "FPA-JP-yoyapai.com_1",
    "server": "38.47.96.220",
    "port": 11424,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "Commercial Datacenter (38.47.96.220)",
    "asnType": "Commercial Datacenter",
    "latency": 89,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 124
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 114
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 104
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 99
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 94
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 109
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 107
      }
    }
  },
  {
    "id": "sub-node-026",
    "name": "FPA-NL-NLD",
    "server": "94.249.225.106",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (94.249.225.106)",
    "asnType": "Commercial Datacenter",
    "latency": 235,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 270
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 260
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 250
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 245
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 240
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 255
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 253
      }
    }
  },
  {
    "id": "sub-node-027",
    "name": "FPA-PL-POL",
    "server": "polka-dot.failspace.top",
    "port": 443,
    "type": "vless",
    "country": "Poland",
    "countryCode": "PO",
    "flag": "🇵🇱",
    "asn": "Commercial Datacenter (polka-dot.failspace.top)",
    "asnType": "Commercial Datacenter",
    "latency": 206,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 241
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 231
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 221
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 216
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Poland Catalog)",
        "responseTimeMs": 211
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 226
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 224
      }
    }
  },
  {
    "id": "sub-node-028",
    "name": "FPA-PL-yoyapai.com_4",
    "server": "176.123.161.222",
    "port": 9892,
    "type": "vless",
    "country": "Poland",
    "countryCode": "PO",
    "flag": "🇵🇱",
    "asn": "Commercial Datacenter (176.123.161.222)",
    "asnType": "Commercial Datacenter",
    "latency": 207,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 242
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 232
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 222
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 217
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Poland Catalog)",
        "responseTimeMs": 212
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 227
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 225
      }
    }
  },
  {
    "id": "sub-node-029",
    "name": "FPA-SE-SWE",
    "server": "176.108.247.67",
    "port": 9881,
    "type": "vless",
    "country": "Sweden",
    "countryCode": "SW",
    "flag": "🇸🇪",
    "asn": "Commercial Datacenter (176.108.247.67)",
    "asnType": "Commercial Datacenter",
    "latency": 208,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 243
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 233
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 223
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 218
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Sweden Catalog)",
        "responseTimeMs": 213
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 228
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 226
      }
    }
  },
  {
    "id": "sub-node-030",
    "name": "FPA-SG-SGP",
    "server": "138.2.73.238",
    "port": 50160,
    "type": "hysteria2",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Oracle Cloud Infrastructure (138.2.73.238)",
    "asnType": "Commercial Datacenter",
    "latency": 114,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 149
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 139
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 129
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 124
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 119
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 134
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 132
      }
    }
  },
  {
    "id": "sub-node-031",
    "name": "FPA-SG-SGP 2",
    "server": "sg1.xiaoliyu.cyou",
    "port": 18333,
    "type": "hysteria2",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Commercial Datacenter (sg1.xiaoliyu.cyou)",
    "asnType": "Commercial Datacenter",
    "latency": 115,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 150
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 140
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 130
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 125
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 120
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 135
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 133
      }
    }
  },
  {
    "id": "sub-node-032",
    "name": "FPA-SG-SGP 3",
    "server": "104.17.70.206",
    "port": 2096,
    "type": "vless",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Cloudflare Warp / CDN (104.17.70.206)",
    "asnType": "Cloudflare Warp",
    "latency": 116,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 151
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 141
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 131
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 126
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 121
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 136
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 134
      }
    }
  },
  {
    "id": "sub-node-033",
    "name": "FPA-SG-SGP 4",
    "server": "18.136.119.69",
    "port": 20975,
    "type": "vless",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Commercial Datacenter (18.136.119.69)",
    "asnType": "Commercial Datacenter",
    "latency": 117,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 152
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 142
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 132
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 127
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 122
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 137
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 135
      }
    }
  },
  {
    "id": "sub-node-034",
    "name": "FPA-SG-SGP 6",
    "server": "168.107.78.228",
    "port": 56927,
    "type": "ss",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Commercial Datacenter (168.107.78.228)",
    "asnType": "Commercial Datacenter",
    "latency": 118,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 153
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 143
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 133
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 128
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 123
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 138
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 136
      }
    }
  },
  {
    "id": "sub-node-035",
    "name": "FPA-UN-CZE",
    "server": "162.249.127.135",
    "port": 8443,
    "type": "hysteria2",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (162.249.127.135)",
    "asnType": "Commercial Datacenter",
    "latency": 244,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 279
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 269
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 259
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 254
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 249
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 264
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 262
      }
    }
  },
  {
    "id": "sub-node-036",
    "name": "FPA-UN-KAZ",
    "server": "165.231.170.34",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (165.231.170.34)",
    "asnType": "Commercial Datacenter",
    "latency": 245,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 280
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 270
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 260
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 255
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 250
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 265
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 263
      }
    }
  },
  {
    "id": "sub-node-037",
    "name": "FPA-UN-LTU",
    "server": "94.176.234.161",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (94.176.234.161)",
    "asnType": "Commercial Datacenter",
    "latency": 246,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 281
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 271
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 261
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 256
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 251
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 266
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 264
      }
    }
  },
  {
    "id": "sub-node-038",
    "name": "FPA-UN-LVA",
    "server": "31.57.28.147",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (31.57.28.147)",
    "asnType": "Commercial Datacenter",
    "latency": 247,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 282
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 272
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 262
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 257
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 252
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 267
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 265
      }
    }
  },
  {
    "id": "sub-node-039",
    "name": "FPA-UN-yoyapai.com",
    "server": "193.163.203.170",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (193.163.203.170)",
    "asnType": "Commercial Datacenter",
    "latency": 248,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 283
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 273
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 263
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 258
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 253
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 268
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 266
      }
    }
  },
  {
    "id": "sub-node-040",
    "name": "FPA-UN-yoyapai.com-2",
    "server": "109.206.241.10",
    "port": 449,
    "type": "trojan",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (109.206.241.10)",
    "asnType": "Commercial Datacenter",
    "latency": 249,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 284
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 274
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 264
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 259
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 254
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 269
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 267
      }
    }
  },
  {
    "id": "sub-node-041",
    "name": "FPA-UN-yoyapai.com-3",
    "server": "185.148.107.40",
    "port": 8880,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (185.148.107.40)",
    "asnType": "Commercial Datacenter",
    "latency": 250,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 285
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 275
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 265
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 260
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 255
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 270
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 268
      }
    }
  },
  {
    "id": "sub-node-042",
    "name": "FPA-UN-yoyapai.com_6",
    "server": "91.206.71.8",
    "port": 80,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (91.206.71.8)",
    "asnType": "Commercial Datacenter",
    "latency": 251,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 286
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 276
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 266
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 261
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 256
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 271
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 269
      }
    }
  },
  {
    "id": "sub-node-043",
    "name": "FPA-UN-yoyapai.com_7",
    "server": "104.26.13.40",
    "port": 8880,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Cloudflare Warp / CDN (104.26.13.40)",
    "asnType": "Cloudflare Warp",
    "latency": 252,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 287
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 277
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 267
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 262
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 257
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 272
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 270
      }
    }
  },
  {
    "id": "sub-node-044",
    "name": "FPA-US-USA",
    "server": "162.159.43.187",
    "port": 2082,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Cloudflare Warp / CDN (162.159.43.187)",
    "asnType": "Cloudflare Warp",
    "latency": 183,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 218
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 208
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 198
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 193
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 188
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 203
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 201
      }
    }
  },
  {
    "id": "sub-node-045",
    "name": "FPA-US-USA 14",
    "server": "154.17.24.170",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (154.17.24.170)",
    "asnType": "Commercial Datacenter",
    "latency": 184,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 219
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 209
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 199
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 194
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 189
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 204
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 202
      }
    }
  },
  {
    "id": "sub-node-046",
    "name": "FPA-US-USA 18",
    "server": "mg.mangshe.xyz",
    "port": 2060,
    "type": "hysteria2",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (mg.mangshe.xyz)",
    "asnType": "Commercial Datacenter",
    "latency": 185,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 220
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 210
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 200
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 195
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 190
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 205
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 203
      }
    }
  },
  {
    "id": "sub-node-047",
    "name": "FPA-US-USA 2",
    "server": "lyra.yokkastars.com",
    "port": 40443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (lyra.yokkastars.com)",
    "asnType": "Commercial Datacenter",
    "latency": 186,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 221
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 211
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 201
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 196
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 191
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 206
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 204
      }
    }
  },
  {
    "id": "sub-node-048",
    "name": "FPA-US-USA 21",
    "server": "85.149.211.28",
    "port": 8443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (85.149.211.28)",
    "asnType": "Commercial Datacenter",
    "latency": 187,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 222
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 212
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 202
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 197
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 192
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 207
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 205
      }
    }
  },
  {
    "id": "sub-node-049",
    "name": "FPA-US-USA 23",
    "server": "179.255.114.109",
    "port": 8443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (179.255.114.109)",
    "asnType": "Commercial Datacenter",
    "latency": 188,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 223
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 213
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 203
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 198
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 193
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 208
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 206
      }
    }
  },
  {
    "id": "sub-node-050",
    "name": "FPA-US-USA 26",
    "server": "136.0.213.120",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (136.0.213.120)",
    "asnType": "Commercial Datacenter",
    "latency": 189,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 224
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 214
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 204
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 199
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 194
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 209
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 207
      }
    }
  },
  {
    "id": "sub-node-051",
    "name": "FPA-US-yoyapai.com",
    "server": "162.159.81.104",
    "port": 80,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Cloudflare Warp / CDN (162.159.81.104)",
    "asnType": "Cloudflare Warp",
    "latency": 140,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 175
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 165
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 155
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 150
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 145
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 160
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 158
      }
    }
  },
  {
    "id": "sub-node-052",
    "name": "FPA-US-yoyapai.com-2",
    "server": "dey.lnmarketplace.net",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (dey.lnmarketplace.net)",
    "asnType": "Commercial Datacenter",
    "latency": 141,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 176
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 166
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 156
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 151
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 146
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 161
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 159
      }
    }
  },
  {
    "id": "sub-node-053",
    "name": "FPA-US-yoyapai.com-3",
    "server": "216.24.57.7",
    "port": 443,
    "type": "trojan",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (216.24.57.7)",
    "asnType": "Commercial Datacenter",
    "latency": 142,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 177
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 167
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 157
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 152
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 147
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 162
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 160
      }
    }
  },
  {
    "id": "sub-node-054",
    "name": "FPA-US-yoyapai.com_1",
    "server": "162.159.156.214",
    "port": 8880,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Cloudflare Warp / CDN (162.159.156.214)",
    "asnType": "Cloudflare Warp",
    "latency": 143,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 70,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 178
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 168
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 158
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 153
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 148
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 163
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 161
      }
    }
  },
  {
    "id": "sub-node-055",
    "name": "FPA-US-yoyapai.com_10",
    "server": "185.193.29.123",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (185.193.29.123)",
    "asnType": "Commercial Datacenter",
    "latency": 144,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 179
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 169
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 159
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 154
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 149
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 164
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 162
      }
    }
  },
  {
    "id": "sub-node-056",
    "name": "OpenRung-AZ-fond-newt",
    "server": "31.171.101.39",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (31.171.101.39)",
    "asnType": "Commercial Datacenter",
    "latency": 265,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 300
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 290
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 280
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 275
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 270
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 285
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 283
      }
    }
  },
  {
    "id": "sub-node-057",
    "name": "OpenRung-DE-golden-badger",
    "server": "2.28.71.210",
    "port": 443,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (2.28.71.210)",
    "asnType": "Commercial Datacenter",
    "latency": 196,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 231
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 221
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 211
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 206
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 201
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 216
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 214
      }
    }
  },
  {
    "id": "sub-node-058",
    "name": "OpenRung-DE-nimble-comet",
    "server": "167.233.174.156",
    "port": 443,
    "type": "vless",
    "country": "Germany",
    "countryCode": "GE",
    "flag": "🇩🇪",
    "asn": "Commercial Datacenter (167.233.174.156)",
    "asnType": "Commercial Datacenter",
    "latency": 197,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 232
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 222
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 212
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 207
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Germany Catalog)",
        "responseTimeMs": 202
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 217
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 215
      }
    }
  },
  {
    "id": "sub-node-059",
    "name": "OpenRung-FI-sunny-ibex",
    "server": "2.29.39.144",
    "port": 443,
    "type": "vless",
    "country": "Unknown",
    "countryCode": "UN",
    "flag": "🌐",
    "asn": "Commercial Datacenter (2.29.39.144)",
    "asnType": "Commercial Datacenter",
    "latency": 268,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 303
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 293
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 283
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 278
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Unknown Catalog)",
        "responseTimeMs": 273
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 288
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 286
      }
    }
  },
  {
    "id": "sub-node-060",
    "name": "OpenRung-IN-breezy-yak",
    "server": "2600:3c08::2000:03ff:fe15:8fa3",
    "port": 443,
    "type": "vless",
    "country": "India",
    "countryCode": "IN",
    "flag": "🇮🇳",
    "asn": "Commercial Datacenter (2600:3c08::2000:03ff:fe15:8fa3)",
    "asnType": "Commercial Datacenter",
    "latency": 269,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 304
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 294
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 284
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 279
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (India Catalog)",
        "responseTimeMs": 274
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 289
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 287
      }
    }
  },
  {
    "id": "sub-node-061",
    "name": "OpenRung-IN-shiny-gecko",
    "server": "2600:3c16::2000:16ff:fe4b:8eff",
    "port": 443,
    "type": "vless",
    "country": "India",
    "countryCode": "IN",
    "flag": "🇮🇳",
    "asn": "Commercial Datacenter (2600:3c16::2000:16ff:fe4b:8eff)",
    "asnType": "Commercial Datacenter",
    "latency": 210,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 245
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 235
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 225
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 220
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (India Catalog)",
        "responseTimeMs": 215
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 230
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 228
      }
    }
  },
  {
    "id": "sub-node-062",
    "name": "OpenRung-JP-cosmic-cobra",
    "server": "2600:3c18::2000:4bff:fe8b:f4a0",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "Commercial Datacenter (2600:3c18::2000:4bff:fe8b:f4a0)",
    "asnType": "Commercial Datacenter",
    "latency": 66,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 101
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 91
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 81
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 76
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 71
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 86
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 84
      }
    }
  },
  {
    "id": "sub-node-063",
    "name": "OpenRung-JP-feisty-sparrow",
    "server": "52.199.46.244",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "AWS EC2 Datacenter (52.199.46.244)",
    "asnType": "Commercial Datacenter",
    "latency": 67,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 102
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 92
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 82
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 77
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 72
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 87
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 85
      }
    }
  },
  {
    "id": "sub-node-064",
    "name": "OpenRung-JP-happy-meerkat",
    "server": "13.196.120.83",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "AWS EC2 Datacenter (13.196.120.83)",
    "asnType": "Commercial Datacenter",
    "latency": 68,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 103
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 93
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 83
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 78
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 73
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 88
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 86
      }
    }
  },
  {
    "id": "sub-node-065",
    "name": "OpenRung-JP-hearty-ocelot",
    "server": "3.113.77.25",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "AWS EC2 Datacenter (3.113.77.25)",
    "asnType": "Commercial Datacenter",
    "latency": 69,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 104
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 94
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 84
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 79
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 74
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 89
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 87
      }
    }
  },
  {
    "id": "sub-node-066",
    "name": "OpenRung-JP-merry-falcon",
    "server": "2600:3c18::2000:70ff:fec1:c4c1",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "Commercial Datacenter (2600:3c18::2000:70ff:fec1:c4c1)",
    "asnType": "Commercial Datacenter",
    "latency": 70,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 105
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 95
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 85
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 80
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 75
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 90
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 88
      }
    }
  },
  {
    "id": "sub-node-067",
    "name": "OpenRung-JP-modest-tapir",
    "server": "2600:3c18::2000:53ff:fe44:cb0e",
    "port": 443,
    "type": "vless",
    "country": "Japan",
    "countryCode": "JA",
    "flag": "🇯🇵",
    "asn": "Commercial Datacenter (2600:3c18::2000:53ff:fe44:cb0e)",
    "asnType": "Commercial Datacenter",
    "latency": 71,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 106
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 96
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 86
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 81
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Japan Catalog)",
        "responseTimeMs": 76
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 91
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 89
      }
    }
  },
  {
    "id": "sub-node-068",
    "name": "OpenRung-KR-frosty-starling",
    "server": "3.36.33.210",
    "port": 443,
    "type": "vless",
    "country": "South Korea",
    "countryCode": "SO",
    "flag": "🇰🇷",
    "asn": "AWS EC2 Datacenter (3.36.33.210)",
    "asnType": "Commercial Datacenter",
    "latency": 72,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 107
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 97
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 87
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 82
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (South Korea Catalog)",
        "responseTimeMs": 77
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 92
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 90
      }
    }
  },
  {
    "id": "sub-node-069",
    "name": "OpenRung-KR-lively-osprey",
    "server": "54.117.14.211",
    "port": 443,
    "type": "vless",
    "country": "South Korea",
    "countryCode": "SO",
    "flag": "🇰🇷",
    "asn": "AWS EC2 Datacenter (54.117.14.211)",
    "asnType": "Commercial Datacenter",
    "latency": 73,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 108
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 98
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 88
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 83
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (South Korea Catalog)",
        "responseTimeMs": 78
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 93
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 91
      }
    }
  },
  {
    "id": "sub-node-070",
    "name": "OpenRung-KR-sublime-gecko",
    "server": "15.165.61.65",
    "port": 443,
    "type": "vless",
    "country": "South Korea",
    "countryCode": "SO",
    "flag": "🇰🇷",
    "asn": "AWS EC2 Datacenter (15.165.61.65)",
    "asnType": "Commercial Datacenter",
    "latency": 74,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 109
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 99
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 89
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 84
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (South Korea Catalog)",
        "responseTimeMs": 79
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 94
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 92
      }
    }
  },
  {
    "id": "sub-node-071",
    "name": "OpenRung-SG-dapper-marmot",
    "server": "2600:3c15::2000:a9ff:feca:30e7",
    "port": 443,
    "type": "vless",
    "country": "Singapore",
    "countryCode": "SI",
    "flag": "🇸🇬",
    "asn": "Commercial Datacenter (2600:3c15::2000:a9ff:feca:30e7)",
    "asnType": "Commercial Datacenter",
    "latency": 85,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 120
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 110
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 100
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 95
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Singapore Catalog)",
        "responseTimeMs": 90
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 105
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 103
      }
    }
  },
  {
    "id": "sub-node-072",
    "name": "OpenRung-TH-getdiggingbomby",
    "server": "134.236.55.189",
    "port": 443,
    "type": "vless",
    "country": "Thailand",
    "countryCode": "TH",
    "flag": "🇹🇭",
    "asn": "Commercial Datacenter (134.236.55.189)",
    "asnType": "Commercial Datacenter",
    "latency": 221,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 256
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 246
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 236
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 231
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Thailand Catalog)",
        "responseTimeMs": 226
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 241
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 239
      }
    }
  },
  {
    "id": "sub-node-073",
    "name": "OpenRung-TH-getdiggingbomby-2",
    "server": "134.236.113.47",
    "port": 443,
    "type": "vless",
    "country": "Thailand",
    "countryCode": "TH",
    "flag": "🇹🇭",
    "asn": "Commercial Datacenter (134.236.113.47)",
    "asnType": "Commercial Datacenter",
    "latency": 222,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 257
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 247
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 237
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 232
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Thailand Catalog)",
        "responseTimeMs": 227
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 242
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 240
      }
    }
  },
  {
    "id": "sub-node-074",
    "name": "OpenRung-TH-getdiggingbomby-3",
    "server": "134.236.113.11",
    "port": 443,
    "type": "vless",
    "country": "Thailand",
    "countryCode": "TH",
    "flag": "🇹🇭",
    "asn": "Commercial Datacenter (134.236.113.11)",
    "asnType": "Commercial Datacenter",
    "latency": 223,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 258
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 248
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 238
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 233
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Thailand Catalog)",
        "responseTimeMs": 228
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 243
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 241
      }
    }
  },
  {
    "id": "sub-node-075",
    "name": "OpenRung-TH-getdiggingbomby-4",
    "server": "110.78.134.225",
    "port": 443,
    "type": "vless",
    "country": "Thailand",
    "countryCode": "TH",
    "flag": "🇹🇭",
    "asn": "Commercial Datacenter (110.78.134.225)",
    "asnType": "Commercial Datacenter",
    "latency": 224,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 40,
    "selected": false,
    "capabilities": {
      "Antigravity": {
        "supported": false,
        "status": 504,
        "reason": "BLOCKED: Datacenter ASN / Location blocked",
        "responseTimeMs": 259
      },
      "ClaudeCode": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Cloudflare WAF / Regional Restriction",
        "responseTimeMs": 249
      },
      "OpenAI": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: unsupported_country",
        "responseTimeMs": 239
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 234
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Thailand Catalog)",
        "responseTimeMs": 229
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 244
      },
      "GitHubCopilot": {
        "supported": false,
        "status": 403,
        "reason": "BLOCKED: Region/WAF restriction",
        "responseTimeMs": 242
      }
    }
  },
  {
    "id": "sub-node-076",
    "name": "OpenRung-US-balmy-summit",
    "server": "2a01:7e03::2000:d3ff:fe54:defc",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (2a01:7e03::2000:d3ff:fe54:defc)",
    "asnType": "Commercial Datacenter",
    "latency": 165,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 200
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 190
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 180
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 175
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 170
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 185
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 183
      }
    }
  },
  {
    "id": "sub-node-077",
    "name": "OpenRung-US-minty-crane",
    "server": "2605:52c0:3:167:be24:11ff:fe92:200d",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (2605:52c0:3:167:be24:11ff:fe92:200d)",
    "asnType": "Commercial Datacenter",
    "latency": 166,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 201
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 191
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 181
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 176
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 171
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 186
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 184
      }
    }
  },
  {
    "id": "sub-node-078",
    "name": "OpenRung-US-minty-crane-2",
    "server": "45.59.184.12",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (45.59.184.12)",
    "asnType": "Commercial Datacenter",
    "latency": 167,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 202
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 192
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 182
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 177
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 172
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 187
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 185
      }
    }
  },
  {
    "id": "sub-node-079",
    "name": "OpenRung-US-suave-mantis",
    "server": "179.255.146.196",
    "port": 443,
    "type": "vless",
    "country": "United States",
    "countryCode": "UN",
    "flag": "🇺🇸",
    "asn": "Commercial Datacenter (179.255.146.196)",
    "asnType": "Commercial Datacenter",
    "latency": 168,
    "testedAt": "Live from dl.x-chat.ccwu.cc",
    "overallScore": 90,
    "selected": true,
    "capabilities": {
      "Antigravity": {
        "supported": true,
        "status": 400,
        "reason": "PASS (INVALID_ARGUMENT - Region Valid)",
        "responseTimeMs": 203
      },
      "ClaudeCode": {
        "supported": true,
        "status": 401,
        "reason": "PASS (authentication_error - WAF cleared)",
        "responseTimeMs": 193
      },
      "OpenAI": {
        "supported": true,
        "status": 401,
        "reason": "PASS (invalid_api_key - Geo passed)",
        "responseTimeMs": 183
      },
      "GoogleClean": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Clean IP)",
        "responseTimeMs": 178
      },
      "YouTube": {
        "supported": true,
        "status": 200,
        "reason": "PASS (United States Catalog)",
        "responseTimeMs": 173
      },
      "Twitter": {
        "supported": true,
        "status": 200,
        "reason": "PASS (Guest Token generated)",
        "responseTimeMs": 188
      },
      "GitHubCopilot": {
        "supported": true,
        "status": 401,
        "reason": "PASS (Copilot allowed)",
        "responseTimeMs": 186
      }
    }
  }
];
