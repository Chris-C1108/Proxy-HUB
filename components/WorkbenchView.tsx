'use client';

import React, { useState, useMemo } from 'react';
import { NodeItem, CapabilityTag, TunConfigOptions } from '@/lib/types';
import {
  generateClashYaml,
  generateSingBoxJson,
  generateShadowsocksBase64,
} from '@/lib/generators';
import {
  Search,
  CheckSquare,
  Square,
  Info,
  Copy,
  Check,
  Download,
  Link,
  Sliders,
  Terminal,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  KeyRound,
} from 'lucide-react';

interface WorkbenchViewProps {
  nodes: NodeItem[];
  onUpdateNodes: (nodes: NodeItem[]) => void;
  onSelectNodeForDeepDive: (node: NodeItem) => void;
}

export function WorkbenchView({
  nodes,
  onUpdateNodes,
  onSelectNodeForDeepDive,
}: WorkbenchViewProps) {
  // Filtering State
  const [search, setSearch] = useState('');
  const [selectedCapabilities, setSelectedCapabilities] = useState<CapabilityTag[]>([]);
  const [selectedAsnType, setSelectedAsnType] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  // Subscription Compiler State
  const [selectedFormat, setSelectedFormat] = useState<'clash' | 'singbox' | 'ss'>('clash');
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showCodePreview, setShowCodePreview] = useState(true);

  
  const [downloadToken, setDownloadToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sub_download_token") || "iVision";
    }
    return "iVision";
  });

  const [adminToken, setAdminToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sub_admin_token") || "iVision";
    }
    return "iVision";
  });

  const [isHarvesting, setIsHarvesting] = useState(false);
  const [harvestMsg, setHarvestMsg] = useState<string | null>(null);

  const handleDownloadTokenChange = (val: string) => {
    setDownloadToken(val);
    if (typeof window !== "undefined") {
      localStorage.setItem("sub_download_token", val);
    }
  };

  const handleAdminTokenChange = (val: string) => {
    setAdminToken(val);
    if (typeof window !== "undefined") {
      localStorage.setItem("sub_admin_token", val);
    }
  };

  const handleManualHarvest = async () => {
    setIsHarvesting(true);
    setHarvestMsg("正在连接 Cloudflare Worker 深度采集最新订阅与 OpenRung 双通道中继...");
    try {
      const res = await fetch("/api/openrung/refresh?deep=1", {
        method: "POST",
        headers: { "x-sub-store-token": adminToken.trim() },
      });
      const data = await res.json();
      if (res.ok && data.status === "success") {
        setHarvestMsg("✅ 采集成功！已从 API 与镜像双通道聚合 " + (data.data?.nodes ?? 0) + " 个活跃节点写入 D1 历史库。");
      } else {
        const errMsg = data.error?.message || data.message || (res.status === 401 ? "管理员 Token 无效，请在下方配置 Admin Token" : ("HTTP " + res.status));
        setHarvestMsg("❌ 采集失败: " + errMsg);
      }
    } catch (e: any) {
      setHarvestMsg("❌ 网络请求异常: " + e.message);
    } finally {
      setIsHarvesting(false);
      setTimeout(() => setHarvestMsg(null), 6000);
    }
  };

  const [tunOptions, setTunOptions] = useState<TunConfigOptions>({
    enableTun: true,
    blockIpv6: true,
    fakeIpMode: true,
    dnsHijack: true,
    fallbackInterval: 180,
    minCapabilities: ['Antigravity'],
    subscriptionName: 'NodeMatrix-AI-Managed',
  });

  const allCapabilities: { id: CapabilityTag; label: string }[] = [
    { id: 'Antigravity', label: 'Antigravity 2' },
    { id: 'ClaudeCode', label: 'Claude Code' },
    { id: 'OpenAI', label: 'OpenAI' },
    { id: 'GoogleClean', label: 'Google Clean' },
    { id: 'YouTube', label: 'YouTube' },
  ];

  const countries = useMemo(() => {
    const set = new Set<string>();
    nodes.forEach((n) => {
      if (n.country) set.add(n.country);
    });
    return Array.from(set).sort();
  }, [nodes]);

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      const matchSearch =
        search === '' ||
        node.name.toLowerCase().includes(search.toLowerCase()) ||
        node.server.includes(search) ||
        node.asn.toLowerCase().includes(search.toLowerCase()) ||
        node.country.toLowerCase().includes(search.toLowerCase());

      if (!matchSearch) return false;
      if (selectedAsnType !== 'all' && node.asnType !== selectedAsnType) return false;
      if (selectedCountry !== 'all' && node.country !== selectedCountry) return false;

      if (selectedCapabilities.length > 0) {
        const matchesAll = selectedCapabilities.every(
          (cap) => node.capabilities[cap]?.supported
        );
        if (!matchesAll) return false;
      }

      return true;
    });
  }, [nodes, search, selectedAsnType, selectedCountry, selectedCapabilities]);

  const selectedNodes = useMemo(() => nodes.filter((n) => n.selected), [nodes]);

  // Live Compiled Output
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
    if (typeof window === 'undefined') return '/api/sub?format=clash&filter=antigravity&tun=true';
    const origin = window.location.origin;
    const filterParam = tunOptions.minCapabilities.includes('Antigravity')
      ? 'antigravity'
      : 'all';
    return `${origin}/api/sub?format=${selectedFormat}&filter=${filterParam}&tun=${tunOptions.enableTun}&blockIpv6=${tunOptions.blockIpv6}`;
  }, [selectedFormat, tunOptions]);

  const toggleNodeSelection = (id: string) => {
    onUpdateNodes(
      nodes.map((n) => (n.id === id ? { ...n, selected: !n.selected } : n))
    );
  };

  const toggleSelectAllFiltered = () => {
    const allSelected =
      filteredNodes.length > 0 && filteredNodes.every((n) => n.selected);
    const targetIds = new Set(filteredNodes.map((n) => n.id));
    onUpdateNodes(
      nodes.map((n) =>
        targetIds.has(n.id) ? { ...n, selected: !allSelected } : n
      )
    );
  };

  const selectOnlyAntigravity = () => {
    onUpdateNodes(
      nodes.map((n) => ({
        ...n,
        selected: Boolean(n.capabilities.Antigravity?.supported),
      }))
    );
  };

  const copyText = (text: string, isUrl = false) => {
    navigator.clipboard.writeText(text);
    if (isUrl) {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 1800);
    } else {
      setCopiedConfig(true);
      setTimeout(() => setCopiedConfig(false), 1800);
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

  const antigravityCount = nodes.filter(
    (n) => n.capabilities.Antigravity?.supported
  ).length;
  const claudeCount = nodes.filter(
    (n) => n.capabilities.ClaudeCode?.supported
  ).length;
  const blockedCount = nodes.length - antigravityCount;

  return (
    <div className="space-y-4">
      {/* Compact Single-Row Telemetry Bar (Replaces Bloated Hero + Duplicate Stat Cards) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-xs">
        <div className="flex flex-wrap items-center gap-3 font-mono tabular-nums">
          <span className="text-slate-400">
            数据源: <strong className="text-slate-200">dl.x-chat.ccwu.cc/daily</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">
            总节点 <strong className="text-slate-100">{nodes.length}</strong>
          </span>
          <span className="text-slate-700">·</span>
          <span className="text-slate-400">
            Antigravity可用 <strong className="text-emerald-400">{antigravityCount}</strong>
          </span>
          <span className="text-slate-700">·</span>
          <span className="text-slate-400">
            Claude可用 <strong className="text-purple-400">{claudeCount}</strong>
          </span>
          <span className="text-slate-700">·</span>
          <span className="text-slate-400">
            风控阻断/HK <strong className="text-rose-400">{blockedCount}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <button onClick={handleManualHarvest} disabled={isHarvesting} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors disabled:opacity-50 cursor-pointer shadow-sm" title="触发 Cloudflare Worker 深度收割最新节点"><RefreshCw className={"h-3.5 w-3.5 " + (isHarvesting ? "animate-spin" : "")} /><span>{isHarvesting ? "采集收割中..." : "手动采集最新节点"}</span></button>
        </div>
      </div>

      {/* Main 12-Column Split Workbench: 8 Cols Node Table + 4 Cols Live Subscription Compiler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* LEFT 8 COLUMNS: High-Density Filter & Node Data Grid */}
        <div className="lg:col-span-8 space-y-3">
          {/* Filter Bar */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 space-y-2.5">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜索节点名、IP、国家或 ASN..."
                  className="w-full rounded-md border border-slate-800 bg-slate-950 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">所有国家 ({countries.length})</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={selectedAsnType}
                onChange={(e) => setSelectedAsnType(e.target.value)}
                className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">所有 ASN 类型</option>
                <option value="Residential ISP">Residential ISP</option>
                <option value="Commercial Datacenter">Commercial Datacenter</option>
                <option value="Cloudflare Warp">Cloudflare Worker/CDN</option>
              </select>
            </div>

            {/* Interactive Capability Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-500 font-mono text-[11px] mr-1">
                  能力筛选:
                </span>
                {allCapabilities.map((cap) => {
                  const active = selectedCapabilities.includes(cap.id);
                  return (
                    <button
                      key={cap.id}
                      onClick={() =>
                        setSelectedCapabilities((prev) =>
                          active
                            ? prev.filter((c) => c !== cap.id)
                            : [...prev, cap.id]
                        )
                      }
                      className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {cap.label}
                    </button>
                  );
                })}
                {selectedCapabilities.length > 0 && (
                  <button
                    onClick={() => setSelectedCapabilities([])}
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline ml-1 cursor-pointer"
                  >
                    重置
                  </button>
                )}
              </div>

              <button
                onClick={selectOnlyAntigravity}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline cursor-pointer whitespace-nowrap"
              >
                一键仅勾选 Antigravity 可用 ({antigravityCount})
              </button>
            </div>
          </div>

          {/* High-Density Node Table */}
          <div className="rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
            <div className="max-h-[620px] overflow-y-auto overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3 w-9 text-center">
                      <button
                        onClick={toggleSelectAllFiltered}
                        className="cursor-pointer text-slate-400 hover:text-slate-200"
                        title="全选/取消当前筛选结果"
                      >
                        {filteredNodes.length > 0 &&
                        filteredNodes.every((n) => n.selected) ? (
                          <CheckSquare className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Square className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </th>
                    <th className="py-2.5 px-3">节点名称 / 落地 IP</th>
                    <th className="py-2.5 px-2">协议</th>
                    <th className="py-2.5 px-3">ASN 属性</th>
                    <th className="py-2.5 px-3">能力矩阵 (Antigravity · Claude · OpenAI)</th>
                    <th className="py-2.5 px-3 text-right">延迟</th>
                    <th className="py-2.5 px-2 text-center">诊断</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  {filteredNodes.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="py-10 text-center text-slate-500 font-mono text-xs"
                      >
                        当前筛选条件下无匹配节点
                      </td>
                    </tr>
                  ) : (
                    filteredNodes.map((node) => {
                      const okAnti = node.capabilities.Antigravity?.supported;
                      const okClaude = node.capabilities.ClaudeCode?.supported;
                      const okOpenAI = node.capabilities.OpenAI?.supported;

                      return (
                        <tr
                          key={node.id}
                          onClick={() => toggleNodeSelection(node.id)}
                          className={`hover:bg-slate-900/60 transition-colors cursor-pointer ${
                            node.selected ? 'bg-slate-900/25' : 'opacity-60'
                          }`}
                        >
                          <td
                            className="py-2 px-3 text-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => toggleNodeSelection(node.id)}
                              className="cursor-pointer text-slate-400 hover:text-slate-200"
                            >
                              {node.selected ? (
                                <CheckSquare className="h-3.5 w-3.5 text-emerald-400" />
                              ) : (
                                <Square className="h-3.5 w-3.5 text-slate-600" />
                              )}
                            </button>
                          </td>

                          <td className="py-2 px-3">
                            <div className="font-medium text-slate-200 flex items-center gap-1.5">
                              <span>{node.flag}</span>
                              <span className="truncate max-w-[200px]">
                                {node.name}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono tabular-nums">
                              {node.server}:{node.port}
                            </div>
                          </td>

                          <td className="py-2 px-2 font-mono text-[11px] uppercase text-slate-400">
                            {node.type}
                          </td>

                          <td className="py-2 px-3 text-[11px] font-mono">
                            <span
                              className={
                                node.asnType === 'Residential ISP'
                                  ? 'text-cyan-400'
                                  : node.asnType === 'Cloudflare Warp'
                                  ? 'text-rose-400'
                                  : 'text-amber-400'
                              }
                            >
                              {node.asnType === 'Commercial Datacenter'
                                ? 'IDC 机房'
                                : node.asnType === 'Cloudflare Warp'
                                ? 'CF Worker'
                                : '住宅 ISP'}
                            </span>
                          </td>

                          <td className="py-2 px-3 font-mono text-[11px]">
                            <div className="flex items-center gap-1.5 whitespace-nowrap">
                              <span
                                className={
                                  okAnti
                                    ? 'text-emerald-400 font-semibold'
                                    : 'text-slate-600 line-through'
                                }
                              >
                                Antigravity
                              </span>
                              <span className="text-slate-700">·</span>
                              <span
                                className={
                                  okClaude
                                    ? 'text-purple-400 font-semibold'
                                    : 'text-slate-600 line-through'
                                }
                              >
                                Claude
                              </span>
                              <span className="text-slate-700">·</span>
                              <span
                                className={
                                  okOpenAI
                                    ? 'text-slate-300'
                                    : 'text-slate-600 line-through'
                                }
                              >
                                OpenAI
                              </span>
                            </div>
                          </td>

                          <td className="py-2 px-3 text-right font-mono tabular-nums text-[11px]">
                            <span
                              className={
                                node.latency < 90
                                  ? 'text-emerald-400'
                                  : node.latency < 160
                                  ? 'text-amber-400'
                                  : 'text-slate-400'
                              }
                            >
                              {node.latency}ms
                            </span>
                          </td>

                          <td
                            className="py-2 px-2 text-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => onSelectNodeForDeepDive(node)}
                              className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 cursor-pointer"
                              title="查看 HTTP 状态码与阻断详情"
                            >
                              <Info className="h-3.5 w-3.5" />
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
        </div>

        {/* RIGHT 4 COLUMNS: Sticky Real-Time Subscription & Rule Compiler */}
        <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-16">
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-emerald-400" />
                <h2 className="text-xs font-semibold text-slate-100">
                  实时订阅与防漏网规则编译器
                </h2>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 tabular-nums">
                已纳入 {selectedNodes.length} 节点
              </span>
            </div>

            {/* Target Format Segmented Control */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
              {(['clash', 'singbox', 'ss'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`py-1.5 px-2 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedFormat === fmt
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {fmt === 'clash'
                    ? 'Clash Meta'
                    : fmt === 'singbox'
                    ? 'Sing-box'
                    : 'SS Base64'}
                </button>
              ))}
            </div>

            {/* Compact TUN Anti-Leak Guard Switches */}
            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between px-3 py-2 rounded-md border border-slate-800 bg-slate-950 cursor-pointer">
                <span className="text-slate-200 font-medium">
                  开启 TUN 虚拟网卡劫持 (`auto-route`)
                </span>
                <input
                  type="checkbox"
                  checked={tunOptions.enableTun}
                  onChange={(e) =>
                    setTunOptions({ ...tunOptions, enableTun: e.target.checked })
                  }
                  className="h-3.5 w-3.5 accent-emerald-500"
                />
              </label>

              <label className="flex items-center justify-between px-3 py-2 rounded-md border border-slate-800 bg-slate-950 cursor-pointer">
                <span className="text-slate-200 font-medium">
                  强制禁用 IPv6 (`ipv6: false` 防直连泄漏)
                </span>
                <input
                  type="checkbox"
                  checked={tunOptions.blockIpv6}
                  onChange={(e) =>
                    setTunOptions({ ...tunOptions, blockIpv6: e.target.checked })
                  }
                  className="h-3.5 w-3.5 accent-emerald-500"
                />
              </label>

              <label className="flex items-center justify-between px-3 py-2 rounded-md border border-slate-800 bg-slate-950 cursor-pointer">
                <span className="text-slate-200 font-medium">
                  仅输出支持 Antigravity 的纯净节点
                </span>
                <input
                  type="checkbox"
                  checked={tunOptions.minCapabilities.includes('Antigravity')}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setTunOptions({
                      ...tunOptions,
                      minCapabilities: checked ? ['Antigravity'] : [],
                    });
                  }}
                  className="h-3.5 w-3.5 accent-emerald-500"
                />
              </label>
            </div>

            {/* Direct Subscription Endpoint Box */}
            
              {/* Token Configuration Inputs */}
              <div className="rounded-md border border-slate-800 bg-slate-950/80 p-3 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1 font-semibold text-slate-200">
                    <KeyRound className="h-3.5 w-3.5 text-cyan-400" />
                    订阅与管理员凭据配置
                  </span>
                  <span className="text-[10px] text-slate-500">自动保存至本地</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>客户端下载 Token (SUB_STORE_PUBLIC_DOWNLOAD_TOKEN)</span>
                    <span className="text-emerald-400/80">免 401 鉴权</span>
                  </label>
                  <input
                    type="text"
                    value={downloadToken}
                    onChange={(e) => handleDownloadTokenChange(e.target.value)}
                    placeholder="输入下载 Token (如 iVision)"
                    className="w-full rounded border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>管理后台 Token (SUB_STORE_ADMIN_TOKEN)</span>
                    <span className="text-cyan-400/80">供手动采集与云端调度</span>
                  </label>
                  <input
                    type="password"
                    value={adminToken}
                    onChange={(e) => handleAdminTokenChange(e.target.value)}
                    placeholder="输入管理 Token (如 iVision)"
                    className="w-full rounded border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-mono text-slate-300 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="rounded-md border border-emerald-500/30 bg-emerald-950/20 p-3 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <Link className="h-3 w-3" />
                  动态订阅直链 (支持客户端直接拉取)
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-300 truncate bg-slate-950 px-2.5 py-1.5 rounded border border-slate-800">
                {subUrl}
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => copyText(subUrl, true)}
                  className="flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>已复制链接</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>复制订阅链接</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>下载配置文件</span>
                </button>
              </div>
            </div>

            {/* Collapsible Code Preview */}
            <div className="space-y-2 pt-1 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => setShowCodePreview(!showCodePreview)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 font-mono text-[11px] cursor-pointer"
                >
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>配置源码预览 ({outputCode.split('\n').length} 行)</span>
                  {showCodePreview ? (
                    <ChevronUp className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronDown className="h-3.5 w-3.5" />
                  )}
                </button>

                <button
                  onClick={() => copyText(outputCode, false)}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  {copiedConfig ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  <span>{copiedConfig ? '已复制源码' : '复制源码'}</span>
                </button>
              </div>

              {showCodePreview && (
                <div className="rounded-md border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-300 max-h-[270px] overflow-y-auto leading-relaxed">
                  <pre className="whitespace-pre">{outputCode}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
