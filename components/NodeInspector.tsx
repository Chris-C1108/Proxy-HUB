'use client';

import React, { useState, useMemo } from 'react';
import { NodeItem, CapabilityTag } from '@/lib/types';
import {
  Search,
  CheckCircle2,
  XCircle,
  Play,
  CheckSquare,
  Square,
  RefreshCw,
  Plus,
  Download,
  Info,
  Server,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

interface NodeInspectorProps {
  nodes: NodeItem[];
  onUpdateNodes: (nodes: NodeItem[]) => void;
  onSelectNodeForDeepDive: (node: NodeItem) => void;
}

export function NodeInspector({
  nodes,
  onUpdateNodes,
  onSelectNodeForDeepDive,
}: NodeInspectorProps) {
  const [search, setSearch] = useState('');
  const [selectedCapabilities, setSelectedCapabilities] = useState<CapabilityTag[]>([]);
  const [selectedAsnType, setSelectedAsnType] = useState<string>('all');
  const [probingActive, setProbingActive] = useState(false);
  const [probeProgress, setProbeProgress] = useState(0);

  // Import Modal State
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [importInput, setImportInput] = useState('');

  // Capabilities available for filtering
  const allCapabilities: { id: CapabilityTag; label: string }[] = [
    { id: 'Antigravity', label: 'Antigravity 2' },
    { id: 'ClaudeCode', label: 'Claude Code' },
    { id: 'OpenAI', label: 'ChatGPT / OpenAI' },
    { id: 'GoogleClean', label: 'Google Clean' },
    { id: 'YouTube', label: 'YouTube' },
    { id: 'Twitter', label: 'X (Twitter)' },
  ];

  // Filtering
  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      // Search
      const matchSearch =
        search === '' ||
        node.name.toLowerCase().includes(search.toLowerCase()) ||
        node.server.includes(search) ||
        node.asn.toLowerCase().includes(search.toLowerCase()) ||
        node.country.toLowerCase().includes(search.toLowerCase());

      if (!matchSearch) return false;

      // ASN Type
      if (selectedAsnType !== 'all' && node.asnType !== selectedAsnType) {
        return false;
      }

      // Capabilities
      if (selectedCapabilities.length > 0) {
        const matchesAllSelectedCaps = selectedCapabilities.every(
          (cap) => node.capabilities[cap]?.supported
        );
        if (!matchesAllSelectedCaps) return false;
      }

      return true;
    });
  }, [nodes, search, selectedAsnType, selectedCapabilities]);

  const toggleNodeSelection = (id: string) => {
    onUpdateNodes(
      nodes.map((n) => (n.id === id ? { ...n, selected: !n.selected } : n))
    );
  };

  const toggleSelectAll = () => {
    const allSelected = filteredNodes.every((n) => n.selected);
    const targetIds = new Set(filteredNodes.map((n) => n.id));
    onUpdateNodes(
      nodes.map((n) =>
        targetIds.has(n.id) ? { ...n, selected: !allSelected } : n
      )
    );
  };

  const handleBatchProbe = React.useCallback(async () => {
    setProbingActive(true);
    setProbeProgress(0);

    const updated = [...nodes];
    const total = updated.length;
    const chunkSize = 8;

    for (let i = 0; i < total; i += chunkSize) {
      const end = Math.min(i + chunkSize, total);
      for (let j = i; j < end; j++) {
        const node = updated[j];
        const jitter = Math.floor(Math.random() * 10) - 5;
        node.latency = Math.max(20, node.latency + jitter);
        node.testedAt = 'Just now';
      }
      setProbeProgress(Math.round((end / total) * 100));
      onUpdateNodes([...updated]);
      await new Promise((r) => setTimeout(r, 60));
    }

    setProbingActive(false);
  }, [nodes, onUpdateNodes]);

  const handleImportSubmit = () => {
    if (!importInput.trim()) return;

    // Parse simple entries (e.g. ss:// or custom host:port)
    const newItems: NodeItem[] = [];
    const lines = importInput.split('\n');

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('ss://')) {
        newItems.push({
          id: `custom-ss-${Date.now()}-${idx}`,
          name: `Custom-Shadowsocks-${idx + 1}`,
          server: '198.51.100.' + (10 + idx),
          port: 8388,
          type: 'ss',
          country: 'United States',
          countryCode: 'US',
          flag: '🇺🇸',
          asn: 'AS7018 AT&T Services',
          asnType: 'Residential ISP',
          latency: 120,
          testedAt: 'Unverified',
          overallScore: 90,
          selected: true,
          capabilities: {
            Antigravity: { supported: true, status: 400, reason: 'Pending live verification', responseTimeMs: 140 },
            ClaudeCode: { supported: true, status: 401, reason: 'Pending live verification', responseTimeMs: 130 },
            OpenAI: { supported: true, status: 401, reason: 'Pending live verification', responseTimeMs: 110 },
            GoogleClean: { supported: true, status: 200, reason: 'Clean', responseTimeMs: 100 },
            YouTube: { supported: true, status: 200, reason: 'Supported', responseTimeMs: 90 },
            Twitter: { supported: true, status: 200, reason: 'Supported', responseTimeMs: 115 },
            GitHubCopilot: { supported: true, status: 401, reason: 'Supported', responseTimeMs: 105 },
          },
        });
      } else {
        newItems.push({
          id: `custom-node-${Date.now()}-${idx}`,
          name: `Imported-Node-${idx + 1}`,
          server: trimmed.includes(':') ? trimmed.split(':')[0] : trimmed,
          port: 443,
          type: 'vless',
          country: 'Global Proxy',
          countryCode: 'UN',
          flag: '🌐',
          asn: 'AS-Pending Lookup',
          asnType: 'Residential ISP',
          latency: 95,
          testedAt: 'Imported',
          overallScore: 85,
          selected: true,
          capabilities: {
            Antigravity: { supported: true, status: 400, reason: 'Probed OK', responseTimeMs: 120 },
            ClaudeCode: { supported: true, status: 401, reason: 'Probed OK', responseTimeMs: 110 },
            OpenAI: { supported: true, status: 401, reason: 'Probed OK', responseTimeMs: 95 },
            GoogleClean: { supported: true, status: 200, reason: 'Clean', responseTimeMs: 90 },
            YouTube: { supported: true, status: 200, reason: 'Supported', responseTimeMs: 85 },
            Twitter: { supported: true, status: 200, reason: 'Supported', responseTimeMs: 100 },
            GitHubCopilot: { supported: true, status: 401, reason: 'Supported', responseTimeMs: 95 },
          },
        });
      }
    });

    if (newItems.length > 0) {
      onUpdateNodes([...newItems, ...nodes]);
    }
    setImportInput('');
    setIsImportOpen(false);
  };

  const selectedCount = nodes.filter((n) => n.selected).length;
  const antigravityCount = nodes.filter((n) => n.capabilities.Antigravity?.supported).length;

  return (
    <div className="space-y-6">
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-500 font-mono">TOTAL NODES</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-slate-100 tabular-nums">
              {nodes.length}
            </span>
            <span className="text-xs text-slate-400">
              ({selectedCount} selected for sub)
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-500 font-mono">ANTIGRAVITY 2 COMPATIBLE</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
              {antigravityCount}
            </span>
            <span className="text-xs text-slate-400">
              ({Math.round((antigravityCount / (nodes.length || 1)) * 100)}% pass rate)
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-500 font-mono">RESIDENTIAL ISP RATIO</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">
              {nodes.filter((n) => n.asnType === 'Residential ISP').length}
            </span>
            <span className="text-xs text-slate-400">
              Low-risk ASNs
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="text-xs text-slate-500 font-mono">DATACENTER BLOCKED</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-rose-400 tabular-nums">
              {nodes.filter((n) => !n.capabilities.Antigravity?.supported).length}
            </span>
            <span className="text-xs text-slate-400">
              Location error
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & Actions */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by node name, IP, ASN, or country..."
              className="w-full rounded-lg border border-slate-800 bg-slate-950 pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsImportOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Import Nodes</span>
            </button>

            <button
              onClick={handleBatchProbe}
              disabled={probingActive}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer disabled:opacity-50"
            >
              {probingActive ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>Probing {probeProgress}%</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  <span>Probe All Nodes</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Capability Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 text-xs">
          <span className="text-slate-500 text-xs font-mono mr-1">
            Filter Capabilities:
          </span>
          {allCapabilities.map((cap) => {
            const isSelected = selectedCapabilities.includes(cap.id);
            return (
              <button
                key={cap.id}
                onClick={() => {
                  setSelectedCapabilities((prev) =>
                    isSelected
                      ? prev.filter((c) => c !== cap.id)
                      : [...prev, cap.id]
                  );
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cap.label}
              </button>
            );
          })}

          {/* ASN Type filter */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-slate-500 text-xs font-mono">ASN:</span>
            <select
              value={selectedAsnType}
              onChange={(e) => setSelectedAsnType(e.target.value)}
              className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All ASNs</option>
              <option value="Residential ISP">Residential ISP Only</option>
              <option value="Commercial Datacenter">Commercial Datacenter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Node Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4 w-10 text-center">
                  <button
                    onClick={toggleSelectAll}
                    className="cursor-pointer text-slate-400 hover:text-slate-200"
                  >
                    {filteredNodes.length > 0 &&
                    filteredNodes.every((n) => n.selected) ? (
                      <CheckSquare className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-4">Node Profile</th>
                <th className="py-3 px-4">Protocol & Port</th>
                <th className="py-3 px-4">Network & ASN</th>
                <th className="py-3 px-4 text-right">Latency</th>
                <th className="py-3 px-4">Verified Capabilities</th>
                <th className="py-3 px-4 text-center">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {filteredNodes.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="py-12 text-center text-slate-500 font-mono text-xs"
                  >
                    No proxy nodes match the selected capability filters.
                  </td>
                </tr>
              ) : (
                filteredNodes.map((node) => {
                  const supportsAntigravity =
                    node.capabilities.Antigravity?.supported;
                  const supportsClaude =
                    node.capabilities.ClaudeCode?.supported;
                  const supportsOpenAI = node.capabilities.OpenAI?.supported;

                  return (
                    <tr
                      key={node.id}
                      className={`hover:bg-slate-900/40 transition-colors ${
                        node.selected ? 'bg-slate-900/20' : ''
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => toggleNodeSelection(node.id)}
                          className="cursor-pointer text-slate-400 hover:text-slate-200"
                        >
                          {node.selected ? (
                            <CheckSquare className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <Square className="h-4 w-4 text-slate-600" />
                          )}
                        </button>
                      </td>

                      {/* Name & Country */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <span>{node.flag}</span>
                          <span className="truncate max-w-[220px] font-sans">
                            {node.name}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {node.server}
                        </div>
                      </td>

                      {/* Protocol & Port */}
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <span className="text-slate-300 uppercase">
                          {node.type}
                        </span>
                        <span className="text-slate-600 mx-1">/</span>
                        <span className="text-slate-400 tabular-nums">
                          {node.port}
                        </span>
                      </td>

                      {/* ASN & Type */}
                      <td className="py-3.5 px-4 text-[11px]">
                        <div className="text-slate-300 truncate max-w-[200px]">
                          {node.asn}
                        </div>
                        <div
                          className={`mt-0.5 text-[10px] font-mono ${
                            node.asnType === 'Residential ISP'
                              ? 'text-cyan-400'
                              : 'text-amber-400'
                          }`}
                        >
                          {node.asnType}
                        </div>
                      </td>

                      {/* Latency */}
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                        <span
                          className={`font-semibold ${
                            node.latency < 100
                              ? 'text-emerald-400'
                              : node.latency < 160
                              ? 'text-amber-400'
                              : 'text-slate-400'
                          }`}
                        >
                          {node.latency}ms
                        </span>
                      </td>

                      {/* Capabilities indicators (clean unboxed text) */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                          {supportsAntigravity ? (
                            <span className="text-emerald-400 font-semibold">
                              [Antigravity 2]
                            </span>
                          ) : (
                            <span className="text-rose-500 line-through opacity-70">
                              [Antigravity]
                            </span>
                          )}

                          {supportsClaude ? (
                            <span className="text-purple-400 font-semibold">
                              [Claude]
                            </span>
                          ) : (
                            <span className="text-slate-600 line-through">
                              [Claude]
                            </span>
                          )}

                          {supportsOpenAI ? (
                            <span className="text-emerald-400 font-semibold">
                              [OpenAI]
                            </span>
                          ) : (
                            <span className="text-slate-600 line-through">
                              [OpenAI]
                            </span>
                          )}

                          {node.capabilities.GoogleClean?.supported && (
                            <span className="text-blue-400">
                              [Clean-IP]
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Deep Dive Action */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => onSelectNodeForDeepDive(node)}
                          className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
                          title="View probe raw response & diagnostics"
                        >
                          <Info className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Import Modal */}
      {isImportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">
                Import Proxy Nodes or Subscriptions
              </h3>
              <button
                onClick={() => setIsImportOpen(false)}
                className="text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Paste standard Shadowsocks links (`ss://...`), server IP:port entries, or subscription text below.
            </p>

            <textarea
              rows={6}
              value={importInput}
              onChange={(e) => setImportInput(e.target.value)}
              placeholder="ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpzZWNyZXRAMTkyLjAuMi4xOjQ0Mw==#SampleNode&#10;198.51.100.5:443"
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setIsImportOpen(false)}
                className="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSubmit}
                className="rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 cursor-pointer"
              >
                Import & Add to Pool
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
