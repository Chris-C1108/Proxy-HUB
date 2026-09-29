'use client';

import React, { useState } from 'react';
import {
  generateSubStoreOperatorScript,
  generateSubStoreArtifactTemplate,
  generateSyncWorkflowYaml,
  SubStoreConfig,
} from '@/lib/substore-integration';
import {
  Cloud,
  Workflow,
  Sparkles,
  ArrowRight,
  Terminal,
  FileCode,
  Copy,
  Check,
  Download,
  Settings,
  ShieldCheck,
  Layers,
  Database,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

export function SubStoreIntegration() {
  const [config, setConfig] = useState<SubStoreConfig>({
    baseUrl: 'https://dl.x-chat.ccwu.cc',
    token: 'iVision',
    rawCollectionName: 'daily',
    classifiedCollectionName: 'daily-classified',
    cronInterval: 4,
  });

  const [activeTab, setActiveTab] = useState<'workflow' | 'operator' | 'artifact'>('workflow');
  const [copied, setCopied] = useState(false);

  const workflowCode = generateSyncWorkflowYaml(config);
  const operatorCode = generateSubStoreOperatorScript();
  const artifactCode = generateSubStoreArtifactTemplate(config.baseUrl, config.token);

  const currentCode =
    activeTab === 'workflow'
      ? workflowCode
      : activeTab === 'operator'
      ? operatorCode
      : artifactCode;

  const currentFilename =
    activeTab === 'workflow'
      ? '.github/workflows/substore_sync.yml'
      : activeTab === 'operator'
      ? 'substore_antigravity_operator.js'
      : 'clash_tun_artifact_template.yaml';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([currentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFilename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Cloud className="h-4 w-4" />
          <span>SUB-STORE CLOUDFLARE 协同架构</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-100 mt-1">
          与 sub-store-cloudflare 深度整合全流程方案
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-4xl leading-relaxed">
          结合 Sub-Store Cloudflare 强大的多源汇聚与 KV 全球分发能力，弥补 Cloudflare Workers 无法运行本地代理内核进行真实探针的局限，构建闭环的<strong>「源采集 ➔ 离线测活打标 ➔ 反哺 Sub-Store ➔ 规则模板编排 ➔ 最终多协议分发」</strong>完整工程流水线。
        </p>
      </div>

      {/* 4-Phase Architecture Pipeline Map */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-100 flex items-center gap-2 font-mono">
          <Workflow className="h-4 w-4 text-emerald-400" />
          END-TO-END AUTOMATION FLOWCHART
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          {/* Phase 1 */}
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2 relative">
            <div className="text-slate-500 font-bold">PHASE 01</div>
            <div className="text-slate-200 font-semibold flex items-center gap-1.5 font-sans">
              <Database className="h-3.5 w-3.5 text-cyan-400" />
              <span>上游多源节点采集</span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              在 Sub-Store Cloudflare 中汇聚开源机场池、自建 VPS 与订阅链接，打包为未清洗的原始合集（Raw Collection，如 <code className="text-slate-200 bg-slate-900 px-1 py-0.5 rounded">/daily</code>）。
            </p>
          </div>

          {/* Phase 2 */}
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2 relative">
            <div className="text-slate-500 font-bold">PHASE 02</div>
            <div className="text-slate-200 font-semibold flex items-center gap-1.5 font-sans">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>Actions 离线探针测活</span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              GitHub Actions 拉取 Raw 合集，挂载 Mihomo 内核在真实网络环境向 Google ESF 与 Anthropic WAF 发起零 Token 探针，精准过滤机房阻断 IP。
            </p>
          </div>

          {/* Phase 3 */}
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2 relative">
            <div className="text-slate-500 font-bold">PHASE 03</div>
            <div className="text-slate-200 font-semibold flex items-center gap-1.5 font-sans">
              <RefreshCw className="h-3.5 w-3.5 text-purple-400" />
              <span>画像反哺与打标回传</span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              测活成功节点前置打上 <code className="text-emerald-300">[Antigravity]</code>、<code className="text-purple-300">[Claude]</code> 标签，自动推回 GitHub Pages 或同步到 Sub-Store 的清洗合集。
            </p>
          </div>

          {/* Phase 4 */}
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2 relative">
            <div className="text-slate-500 font-bold">PHASE 04</div>
            <div className="text-slate-200 font-semibold flex items-center gap-1.5 font-sans">
              <Layers className="h-3.5 w-3.5 text-amber-400" />
              <span>Artifact 规则编排与分发</span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              Sub-Store Cloudflare 加载预置 Artifact 模板，注入 TUN 防漏网参数与 Fallback 策略组，客户端直接订阅 Cloudflare 边缘极速链接。
            </p>
          </div>
        </div>
      </div>

      {/* Sub-Store Parameters Customizer */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-slate-100">
              Sub-Store Cloudflare 实例配置
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            动态同步参数绑定
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="space-y-1.5">
            <label className="text-slate-400 font-sans">Sub-Store 域名 / Worker URL</label>
            <input
              type="text"
              value={config.baseUrl}
              onChange={(e) => setConfig({ ...config, baseUrl: e.target.value })}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-400 font-sans">访问凭证 (Token)</label>
            <input
              type="text"
              value={config.token}
              onChange={(e) => setConfig({ ...config, token: e.target.value })}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-400 font-sans">原始合集名 (Raw Collection)</label>
            <input
              type="text"
              value={config.rawCollectionName}
              onChange={(e) => setConfig({ ...config, rawCollectionName: e.target.value })}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-400 font-sans">同步周期 (Cron Hours)</label>
            <select
              value={config.cronInterval}
              onChange={(e) => setConfig({ ...config, cronInterval: Number(e.target.value) })}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value={2}>每 2 小时</option>
              <option value={4}>每 4 小时 (推荐)</option>
              <option value={6}>每 6 小时</option>
            </select>
          </div>
        </div>
      </div>

      {/* Code & Scripts Integration Toolkit */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'workflow'
                ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>01. Actions 同步工作流 (`substore_sync.yml`)</span>
          </button>

          <button
            onClick={() => setActiveTab('operator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'operator'
                ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode className="h-3.5 w-3.5" />
            <span>02. Sub-Store JS 操作脚本 (`operator.js`)</span>
          </button>

          <button
            onClick={() => setActiveTab('artifact')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'artifact'
                ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>03. Sub-Store Clash Artifact 模板</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <FileCode className="h-4 w-4 text-emerald-400" />
              <span>{currentFilename}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(currentCode)}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>已复制!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>复制代码</span>
                  </>
                )}
              </button>

              <button
                onClick={downloadFile}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>下载文件</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 max-h-[560px] overflow-y-auto leading-relaxed shadow-inner">
            <pre className="whitespace-pre">{currentCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
