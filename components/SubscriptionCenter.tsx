'use client';

import React, { useState, useMemo } from 'react';
import { NodeItem, TunConfigOptions, CapabilityTag } from '@/lib/types';
import {
  generateClashYaml,
  generateSingBoxJson,
  generateShadowsocksBase64,
} from '@/lib/generators';
import {
  Copy,
  Check,
  Download,
  Link,
  Shield,
  Sliders,
  Settings2,
  FileCode2,
  Terminal,
  ExternalLink,
} from 'lucide-react';

interface SubscriptionCenterProps {
  nodes: NodeItem[];
}

export function SubscriptionCenter({ nodes }: SubscriptionCenterProps) {
  const [selectedFormat, setSelectedFormat] = useState<'clash' | 'singbox' | 'ss'>('clash');
  const [copied, setCopied] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // TUN Options
  const [tunOptions, setTunOptions] = useState<TunConfigOptions>({
    enableTun: true,
    blockIpv6: true,
    fakeIpMode: true,
    dnsHijack: true,
    fallbackInterval: 180,
    minCapabilities: ['Antigravity'],
    subscriptionName: 'NodeMatrix-AI-Managed',
  });

  const selectedNodes = useMemo(() => {
    return nodes.filter((n) => n.selected);
  }, [nodes]);

  const outputCode = useMemo(() => {
    if (selectedFormat === 'singbox') {
      return generateSingBoxJson(selectedNodes, tunOptions);
    }
    if (selectedFormat === 'ss') {
      const { base64 } = generateShadowsocksBase64(selectedNodes);
      return base64;
    }
    return generateClashYaml(selectedNodes, tunOptions);
  }, [selectedNodes, selectedFormat, tunOptions]);

  const subUrl = useMemo(() => {
    if (typeof window === 'undefined') return '/api/sub';
    const origin = window.location.origin;
    const filterParam =
      tunOptions.minCapabilities.includes('Antigravity') ? 'antigravity' : 'all';
    return `${origin}/api/sub?format=${selectedFormat}&filter=${filterParam}&tun=${tunOptions.enableTun}&blockIpv6=${tunOptions.blockIpv6}`;
  }, [selectedFormat, tunOptions]);

  const copyToClipboard = (text: string, isSubUrl = false) => {
    navigator.clipboard.writeText(text);
    if (isSubUrl) {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const ext =
      selectedFormat === 'clash'
        ? 'yaml'
        : selectedFormat === 'singbox'
        ? 'json'
        : 'txt';
    const blob = new Blob([outputCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nodematrix_${selectedFormat}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleMinCap = (cap: CapabilityTag) => {
    setTunOptions((prev) => {
      const hasCap = prev.minCapabilities.includes(cap);
      return {
        ...prev,
        minCapabilities: hasCap
          ? prev.minCapabilities.filter((c) => c !== cap)
          : [...prev.minCapabilities, cap],
      };
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-100">
          Multi-Protocol Subscription & Rule Center
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-4xl">
          Generate production-ready Clash/Mihomo configurations with robust TUN mode defaults, Sing-box JSON with DNS routing, and pure Shadowsocks link pools. Filter out datacenter IPs and automatically bind AI endpoints to verified clean fallbacks.
        </p>
      </div>

      {/* Subscription URL Quick Copy Banner */}
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 font-mono">
              <Link className="h-3.5 w-3.5" />
              <span>LIVE SUBSCRIBER ENDPOINT (AUTO-CONVERTED)</span>
            </div>
            <div className="text-xs text-slate-300 font-mono break-all">
              {subUrl}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => copyToClipboard(subUrl, true)}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              {copiedUrl ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Subscription URL</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls & Options (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Format Selector */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FileCode2 className="h-3.5 w-3.5 text-emerald-400" />
              Target Architecture
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedFormat('clash')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedFormat === 'clash'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-sm'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                Clash Meta
              </button>
              <button
                onClick={() => setSelectedFormat('singbox')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedFormat === 'singbox'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-sm'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                Sing-box
              </button>
              <button
                onClick={() => setSelectedFormat('ss')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedFormat === 'ss'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-sm'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                }`}
              >
                Shadowsocks
              </button>
            </div>
          </div>

          {/* TUN & Routing Customization */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Settings2 className="h-3.5 w-3.5 text-emerald-400" />
              TUN Mode & Anti-Leak Guards
            </h2>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-800 bg-slate-950 cursor-pointer">
                <div>
                  <div className="font-semibold text-slate-200">
                    Enable TUN Virtual Adapter
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Intercepts Antigravity & VS Code daemons
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={tunOptions.enableTun}
                  onChange={(e) =>
                    setTunOptions({ ...tunOptions, enableTun: e.target.checked })
                  }
                  className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-slate-900"
                />
              </label>

              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-800 bg-slate-950 cursor-pointer">
                <div>
                  <div className="font-semibold text-slate-200">
                    Strict IPv6 Disablement
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Blocks domestic IPv6 leaks bypassing TUN
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={tunOptions.blockIpv6}
                  onChange={(e) =>
                    setTunOptions({ ...tunOptions, blockIpv6: e.target.checked })
                  }
                  className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-slate-900"
                />
              </label>

              <label className="flex items-center justify-between p-2.5 rounded-lg border border-slate-800 bg-slate-950 cursor-pointer">
                <div>
                  <div className="font-semibold text-slate-200">
                    Enhanced Fake-IP DNS
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Range: 198.18.0.1/16 with DoH upstream
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={tunOptions.fakeIpMode}
                  onChange={(e) =>
                    setTunOptions({ ...tunOptions, fakeIpMode: e.target.checked })
                  }
                  className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-slate-900"
                />
              </label>
            </div>

            {/* Fallback Check Interval */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
              <label className="text-slate-400 font-medium">
                Policy Fallback Interval: {tunOptions.fallbackInterval}s
              </label>
              <input
                type="range"
                min={60}
                max={600}
                step={30}
                value={tunOptions.fallbackInterval}
                onChange={(e) =>
                  setTunOptions({
                    ...tunOptions,
                    fallbackInterval: Number(e.target.value),
                  })
                }
                className="w-full accent-emerald-500"
              />
            </div>

            {/* Node Capability Filter for Output */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
              <label className="text-slate-400 font-medium">
                Minimum Capability Requirement:
              </label>
              <div className="space-y-1.5">
                {(['Antigravity', 'ClaudeCode', 'OpenAI'] as CapabilityTag[]).map(
                  (cap) => {
                    const active = tunOptions.minCapabilities.includes(cap);
                    return (
                      <button
                        key={cap}
                        onClick={() => toggleMinCap(cap)}
                        className={`w-full text-left px-3 py-1.5 rounded-md border text-xs font-mono transition-colors cursor-pointer flex items-center justify-between ${
                          active
                            ? 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300'
                            : 'border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <span>Must pass [{cap}]</span>
                        <span className="text-[11px]">
                          {active ? 'ENFORCED' : 'OPTIONAL'}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Code Preview & Actions (Col 8) */}
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>
                Generated Output ({outputCode.split('\n').length} lines)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(outputCode)}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Config</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download File</span>
              </button>
            </div>
          </div>

          {/* Syntax Box */}
          <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 max-h-[620px] overflow-y-auto leading-relaxed shadow-inner">
            <pre className="whitespace-pre">{outputCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
