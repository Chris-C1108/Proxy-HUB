export type ProtocolType = 'vmess' | 'vless' | 'trojan' | 'ss' | 'hysteria2';

export type CapabilityTag = 
  | 'Antigravity'
  | 'ClaudeCode'
  | 'OpenAI'
  | 'GoogleClean'
  | 'YouTube'
  | 'Twitter'
  | 'GitHubCopilot';

export interface ServiceProbeDefinition {
  id: CapabilityTag;
  name: string;
  category: 'AI Agents' | 'Search & IP Health' | 'Media & Social';
  targetEndpoint: string;
  gateway: string;
  zeroTokenMethod: string;
  passCondition: string;
  blockCondition: string;
  detailedPrinciple: string;
  riskFactor: 'Strict (DC Block)' | 'High (WAF + ASN)' | 'Medium (Turnstile)' | 'Low (Rate limit)';
}

export interface NodeItem {
  id: string;
  name: string;
  server: string;
  port: number;
  type: ProtocolType;
  country: string;
  countryCode: string;
  flag: string;
  asn: string;
  asnType: 'Residential ISP' | 'Commercial Datacenter' | 'Cloudflare Warp' | 'Unknown';
  latency: number; // in ms
  testedAt?: string;
  capabilities: Record<CapabilityTag, {
    supported: boolean;
    status: number;
    reason: string;
    responseTimeMs: number;
  }>;
  overallScore: number; // 0 - 100
  selected?: boolean;
}

export interface FilterState {
  search: string;
  capabilities: CapabilityTag[];
  asnTypes: string[];
  countries: string[];
  maxLatency: number;
  protocol: string;
}

export interface TunConfigOptions {
  enableTun: boolean;
  blockIpv6: boolean;
  fakeIpMode: boolean;
  dnsHijack: boolean;
  fallbackInterval: number;
  minCapabilities: CapabilityTag[];
  subscriptionName: string;
}
