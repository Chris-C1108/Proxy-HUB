'use client';

import React, { useState } from 'react';
import {
  generateSubStoreOperatorScript,
  generateSubStoreArtifactTemplate,
  generateSyncWorkflowYaml,
  SubStoreConfig,
} from '@/lib/substore-integration';
import {
  generatePythonProberCode,
  generateCloudflareWorkerCode,
} from '@/lib/generators';
import {
  Settings,
  FileCode,
  Copy,
  Check,
  Download,
  Terminal,
  GitBranch,
  Cloud,
  Layers,
  RefreshCw,
} from 'lucide-react';

export function ExternalPipelineView() {
  const [config, setConfig] = useState<SubStoreConfig>({
    baseUrl: 'https://dl.x-chat.ccwu.cc',
    token: 'iVision',
    rawCollectionName: 'daily',
    classifiedCollectionName: 'daily-classified',
    cronInterval: 4,
  });

  const [activeArtifact, setActiveArtifact] = useState<
    'sync_yml' | 'python_prober' | 'substore_js' | 'substore_artifact' | 'cf_worker'
  >('sync_yml');
  const [copied, setCopied] = useState(false);

  const [triggerStatus, setTriggerStatus] = useState<string | null>(null);
  const [isTriggering, setIsTriggering] = useState(false);
  const [proberStats, setProberStats] = useState<any>(null);

  const handleTriggerProber = async () => {
    setIsTriggering(true);
    setTriggerStatus("正在向 Cloudflare Worker 发起调度请求...");
    try {
      const res = await fetch(`${config.baseUrl}/api/prober/trigger`, {
        method: "POST",
        headers: {
          "x-sub-store-token": config.token,
        },
      });
      const data = await res.json();
      if (res.ok && data.status === "success") {
        setTriggerStatus("✅ 探测指令已成功送达 GitHub Actions！云端 Ubuntu 节点测活环境中...");
      } else {
        setTriggerStatus(`❌ 调度失败: ${data.message || data.error || JSON.stringify(data)}`);
      }
    } catch (e: any) {
      setTriggerStatus(`❌ 网络请求异常: ${e.message}`);
    } finally {
      setIsTriggering(false);
    }
  };

  const handleFetchStatus = async () => {
    try {
      const res = await fetch(`${config.baseUrl}/api/prober/status`, {
        headers: { "x-sub-store-token": config.token },
      });
      const data = await res.json();
      if (data.status === "success") {
        setProberStats(data.data);
      }
    } catch (e) {}
  };


  const artifacts = {
    sync_yml: {
      label: '01. GitHub Actions 同步工作流',
      filename: '.github/workflows/substore_sync.yml',
      env: '外部运行: GitHub Actions Ubuntu VM (挂载 Mihomo 内核真实测活)',
      code: generateSyncWorkflowYaml(config),
    },
    python_prober: {
      label: '02. Python 零Token探针脚本',
      filename: 'probe_engine.py',
      env: '外部运行: Actions / Linux CLI (执行 HTTP 400/401/403 特征判定)',
      code: generatePythonProberCode(),
    },
    substore_js: {
      label: '03. Sub-Store JS 过滤算子',
      filename: 'substore_antigravity_operator.js',
      env: '外部运行: Sub-Store Cloudflare Worker (脚本操作符)',
      code: generateSubStoreOperatorScript(),
    },
    substore_artifact: {
      label: '04. Sub-Store Clash TUN 模板',
      filename: 'substore_clash_tun_artifact.yaml',
      env: '外部运行: Sub-Store Cloudflare Artifact (规则与策略组注入)',
      code: generateSubStoreArtifactTemplate(config.baseUrl, config.token),
    },
    cf_worker: {
      label: '05. CF Worker 边缘分发脚本',
      filename: 'worker.js',
      env: '外部运行: Cloudflare Workers (按 User-Agent 动态路由订阅)',
      code: generateCloudflareWorkerCode(),
    },
  };

  const current = artifacts[activeArtifact];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleDownload = () => {
    const blob = new Blob([current.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = current.filename.split('/').pop() || 'config.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">

      {/* Cloud Remote Trigger Console */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Cloud className="h-4 w-4 text-cyan-400" />
              云端自动化探测调度 (GitHub Actions Ubuntu Runner)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              点击通过 Cloudflare Worker API 远程唤起 GitHub Actions 执行多路并发 Zero-Token 连通性测试。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleFetchStatus}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              查询节点状态
            </button>
            <button
              onClick={handleTriggerProber}
              disabled={isTriggering}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400 disabled:opacity-50 transition-colors cursor-pointer"
            >
              <Terminal className="h-3.5 w-3.5" />
              {isTriggering ? "唤起中..." : "一键唤起云端测活"}
            </button>
          </div>
        </div>

        {triggerStatus && (
          <div className="rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-xs font-mono text-cyan-300">
            {triggerStatus}
          </div>
        )}

        {proberStats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
            <div className="bg-slate-950/60 p-2 rounded border border-slate-800/50">
              <span className="text-slate-500 block text-[10px]">总收录节点</span>
              <span className="text-slate-200 font-bold">{proberStats.stats?.total ?? 0}</span>
            </div>
            <div className="bg-slate-950/60 p-2 rounded border border-slate-800/50">
              <span className="text-emerald-500 block text-[10px]">健康正常 (Active)</span>
              <span className="text-emerald-400 font-bold">{proberStats.stats?.statusBreakdown?.active ?? 0}</span>
            </div>
            <div className="bg-slate-950/60 p-2 rounded border border-slate-800/50">
              <span className="text-amber-500 block text-[10px]">预警抖动 (Degrading)</span>
              <span className="text-amber-400 font-bold">{proberStats.stats?.statusBreakdown?.degrading ?? 0}</span>
            </div>
            <div className="bg-slate-950/60 p-2 rounded border border-slate-800/50">
              <span className="text-rose-500 block text-[10px]">连续失效熔断 (Dead)</span>
              <span className="text-rose-400 font-bold">{proberStats.stats?.statusBreakdown?.dead ?? 0}</span>
            </div>
          </div>
        )}
      </div>

      {/* Compact Pipeline Architecture Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-2 text-slate-300">
          <span className="text-cyan-400">1. Sub-Store 原始合集采集</span>
          <span className="text-slate-600">➔</span>
          <span className="text-emerald-400">2. Actions Mihomo 真机探针打标</span>
          <span className="text-slate-600">➔</span>
          <span className="text-purple-400">3. 孤儿分支推回清洗池</span>
          <span className="text-slate-600">➔</span>
          <span className="text-amber-400">4. Sub-Store Artifact 注入 TUN 分发</span>
        </div>
        <span className="text-[11px] text-slate-400">
          运行域: 外部基础设施 (突破浏览器沙盒 Socket 限制)
        </span>
      </div>

      {/* Parameter Binding Bar */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          <div className="space-y-1">
            <label className="text-slate-400 font-sans text-[11px]">
              Sub-Store 域名 (Worker URL)
            </label>
            <input
              type="text"
              value={config.baseUrl}
              onChange={(e) => setConfig({ ...config, baseUrl: e.target.value })}
              className="w-full rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 font-sans text-[11px]">
              订阅 Token 凭证
            </label>
            <input
              type="text"
              value={config.token}
              onChange={(e) => setConfig({ ...config, token: e.target.value })}
              className="w-full rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 font-sans text-[11px]">
              上游未清洗合集名 (Raw Collection)
            </label>
            <input
              type="text"
              value={config.rawCollectionName}
              onChange={(e) =>
                setConfig({ ...config, rawCollectionName: e.target.value })
              }
              className="w-full rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 font-sans text-[11px]">
              Actions 巡检频率 (防封禁策略)
            </label>
            <select
              value={config.cronInterval}
              onChange={(e) =>
                setConfig({ ...config, cronInterval: Number(e.target.value) })
              }
              className="w-full rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value={2}>每 2 小时 (0 */2 * * *)</option>
              <option value={4}>每 4 小时 (推荐 - 0 */4 * * *)</option>
              <option value={6}>每 6 小时 (0 */6 * * *)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Unified Code Generator Workspace */}
      <div className="rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/80 px-3 py-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              Object.keys(artifacts) as Array<keyof typeof artifacts>
            ).map((key) => (
              <button
                key={key}
                onClick={() => setActiveArtifact(key)}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeArtifact === key
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {artifacts[key].label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-200 hover:bg-slate-800 cursor-pointer"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              <span>{copied ? '已复制' : '复制代码'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1 rounded bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-slate-950 hover:bg-emerald-400 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>下载 {current.filename.split('/').pop()}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-slate-900 bg-slate-950 px-4 py-1.5 text-[11px] font-mono text-slate-400">
          <span>文件路径: {current.filename}</span>
          <span className="text-emerald-400">{current.env}</span>
        </div>

        <div className="p-4 font-mono text-xs text-slate-300 max-h-[540px] overflow-y-auto leading-relaxed">
          <pre className="whitespace-pre">{current.code}</pre>
        </div>
      </div>
    </div>
  );
}
