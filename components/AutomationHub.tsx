'use client';

import React, { useState } from 'react';
import {
  generateGitHubWorkflowYaml,
  generatePythonProberCode,
  generateCloudflareWorkerCode,
} from '@/lib/generators';
import {
  GitBranch,
  Terminal,
  Cloud,
  Copy,
  Check,
  Download,
  AlertTriangle,
  Sparkles,
  FileCode,
  Clock,
  Key,
} from 'lucide-react';

export function AutomationHub() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'python' | 'worker'>('workflow');
  const [cronHours, setCronHours] = useState(4);
  const [copied, setCopied] = useState(false);

  const workflowCode = generateGitHubWorkflowYaml(cronHours);
  const pythonCode = generatePythonProberCode();
  const workerCode = generateCloudflareWorkerCode();

  const currentCode =
    activeTab === 'workflow'
      ? workflowCode
      : activeTab === 'python'
      ? pythonCode
      : workerCode;

  const currentFilename =
    activeTab === 'workflow'
      ? '.github/workflows/update_antigravity.yml'
      : activeTab === 'python'
      ? 'probe_engine.py'
      : 'worker.js';

  const copyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([currentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFilename.split('/').pop() || 'script.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-100">
          CI/CD Automation & Edge Distribution Hub
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-4xl">
          Automate node health extraction, zero-token capability probing, and subscription compilation using GitHub Actions and Cloudflare Workers. Designed with zero-bloat git commits and abuse-resistant intervals.
        </p>
      </div>

      {/* Architecture Highlights: What We Kept vs What We Eliminated */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-emerald-400">
            <Sparkles className="h-4 w-4" />
            <span>Retained Architectural Merits (取其精华)</span>
          </div>
          <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
            <li>
              <strong className="text-slate-100">Multi-source dynamic harvesting</strong>: Aggregates multiple public node pools to maintain high candidate redundancy.
            </li>
            <li>
              <strong className="text-slate-100">Smart Fallback / URL-test groups</strong>: Auto-heals node drops by letting client kernels route around dead proxies.
            </li>
            <li>
              <strong className="text-slate-100">GitHub Pages zero-cost distribution</strong>: Serves static YAML/JSON profiles without needing server maintenance.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-4 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-rose-400">
            <AlertTriangle className="h-4 w-4" />
            <span>Eliminated Inefficiencies & Redundancy (去其鸡肋)</span>
          </div>
          <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
            <li>
              <strong className="text-slate-100">Discarded 30-min hyper-frequency Cron</strong>: Scaled to 4-6 hours to prevent GitHub Actions abuse suspension.
            </li>
            <li>
              <strong className="text-slate-100">Replaced meaningless HTTP 204 ping</strong>: Swapped for real Zero-Token API probes (Google ESF, Cloudflare WAF).
            </li>
            <li>
              <strong className="text-slate-100">Stopped Git commit history explosion</strong>: Uses orphan branch / single commit overwrite to prevent repository multi-GB bloat.
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('workflow')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'workflow'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <GitBranch className="h-3.5 w-3.5" />
          <span>GitHub Actions Workflow</span>
        </button>

        <button
          onClick={() => setActiveTab('python')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'python'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="h-3.5 w-3.5" />
          <span>Python Prober Script</span>
        </button>

        <button
          onClick={() => setActiveTab('worker')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'worker'
              ? 'bg-slate-800 text-emerald-400 border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cloud className="h-3.5 w-3.5" />
          <span>Cloudflare Worker Proxy</span>
        </button>
      </div>

      {/* Configuration bar for active tool */}
      {activeTab === 'workflow' && (
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">Cron Schedule Interval:</span>
            <select
              value={cronHours}
              onChange={(e) => setCronHours(Number(e.target.value))}
              className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value={2}>Every 2 Hours (0 */2 * * *)</option>
              <option value={4}>Every 4 Hours (Recommended - 0 */4 * * *)</option>
              <option value={6}>Every 6 Hours (0 */6 * * *)</option>
              <option value={12}>Every 12 Hours (0 */12 * * *)</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <Key className="h-3.5 w-3.5 text-amber-400" />
            <span>Requires GitHub Secret: `GEMINI_API_KEY`</span>
          </div>
        </div>
      )}

      {/* Code Viewer */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <FileCode className="h-4 w-4 text-emerald-400" />
            <span>{currentFilename}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
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
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={downloadFile}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 max-h-[580px] overflow-y-auto leading-relaxed">
          <pre className="whitespace-pre">{currentCode}</pre>
        </div>
      </div>
    </div>
  );
}
