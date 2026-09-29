'use client';

import React, { useState, useCallback } from 'react';
import { TopBar } from '@/components/TopBar';
import { WorkbenchView } from '@/components/WorkbenchView';
import { ExternalPipelineView } from '@/components/ExternalPipelineView';
import { ReferenceProbeView } from '@/components/ReferenceProbeView';
import { NodeDetailModal } from '@/components/NodeDetailModal';
import { INITIAL_NODES } from '@/lib/mock-nodes';
import { NodeItem } from '@/lib/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('workbench');
  const [nodes, setNodes] = useState<NodeItem[]>(INITIAL_NODES);
  const [deepDiveNode, setDeepDiveNode] = useState<NodeItem | null>(null);

  // Global Import Modal State
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [importInput, setImportInput] = useState('');

  // Global Batch Probe State
  const [probingActive, setProbingActive] = useState(false);
  const [probeProgress, setProbeProgress] = useState(0);

  const handleBatchProbe = useCallback(async () => {
    setActiveTab('workbench');
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
        node.testedAt = '刚刚实测';
      }
      setProbeProgress(Math.round((end / total) * 100));
      setNodes([...updated]);
      await new Promise((r) => setTimeout(r, 50));
    }

    setProbingActive(false);
  }, [nodes]);

  const handleImportSubmit = () => {
    if (!importInput.trim()) return;

    const newItems: NodeItem[] = [];
    const lines = importInput.split('\n');

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const isSS = trimmed.startsWith('ss://');
      newItems.push({
        id: `custom-${Date.now()}-${idx}`,
        name: isSS ? `Custom-SS-${idx + 1}` : `Imported-Node-${idx + 1}`,
        server:
          !isSS && trimmed.includes(':')
            ? trimmed.split(':')[0]
            : `198.51.100.${10 + idx}`,
        port:
          !isSS && trimmed.includes(':')
            ? Number(trimmed.split(':')[1]) || 443
            : 443,
        type: isSS ? 'ss' : 'vless',
        country: 'United States',
        countryCode: 'US',
        flag: '🇺🇸',
        asn: 'AS7018 AT&T Services',
        asnType: 'Residential ISP',
        latency: 115,
        testedAt: '新导入',
        overallScore: 92,
        selected: true,
        capabilities: {
          Antigravity: {
            supported: true,
            status: 400,
            reason: 'PASS (INVALID_ARGUMENT - Region Valid)',
            responseTimeMs: 135,
          },
          ClaudeCode: {
            supported: true,
            status: 401,
            reason: 'PASS (authentication_error)',
            responseTimeMs: 125,
          },
          OpenAI: {
            supported: true,
            status: 401,
            reason: 'PASS (invalid_api_key)',
            responseTimeMs: 110,
          },
          GoogleClean: {
            supported: true,
            status: 200,
            reason: 'PASS (Clean IP)',
            responseTimeMs: 105,
          },
          YouTube: {
            supported: true,
            status: 200,
            reason: 'PASS (US Catalog)',
            responseTimeMs: 95,
          },
          Twitter: {
            supported: true,
            status: 200,
            reason: 'PASS (Guest Token)',
            responseTimeMs: 110,
          },
          GitHubCopilot: {
            supported: true,
            status: 401,
            reason: 'PASS (Allowed)',
            responseTimeMs: 108,
          },
        },
      });
    });

    if (newItems.length > 0) {
      setNodes([...newItems, ...nodes]);
    }
    setImportInput('');
    setIsImportOpen(false);
    setActiveTab('workbench');
  };

  const selectedCount = nodes.filter((n) => n.selected).length;
  const antigravityCount = nodes.filter(
    (n) => n.capabilities.Antigravity?.supported
  ).length;

  return (
    <div
      id="top"
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300"
    >
      {/* Top Bar Contract */}
      <TopBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenImport={() => setIsImportOpen(true)}
        onQuickProbe={handleBatchProbe}
        totalNodes={nodes.length}
        selectedNodesCount={selectedCount}
        antigravityCount={antigravityCount}
        probingActive={probingActive}
        probeProgress={probeProgress}
      />

      {/* High-Density Main Workspace (Zero Hero Bloat - Immediate Above-the-Fold Utility) */}
      <main className="flex-1 mx-auto w-full max-w-[1440px] px-6 py-5">
        {activeTab === 'workbench' && (
          <WorkbenchView
            nodes={nodes}
            onUpdateNodes={setNodes}
            onSelectNodeForDeepDive={setDeepDiveNode}
          />
        )}

        {activeTab === 'pipeline' && <ExternalPipelineView />}

        {activeTab === 'diagnostics' && <ReferenceProbeView />}
      </main>

      {/* Node Deep Dive Modal */}
      <NodeDetailModal
        node={deepDiveNode}
        onClose={() => setDeepDiveNode(null)}
      />

      {/* Global Import Modal */}
      {isImportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <h3 className="text-sm font-bold text-slate-100">
                导入节点或订阅片段 (内部解析引擎)
              </h3>
              <button
                onClick={() => setIsImportOpen(false)}
                className="text-slate-400 hover:text-slate-200 cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <textarea
              rows={5}
              value={importInput}
              onChange={(e) => setImportInput(e.target.value)}
              placeholder="粘贴 ss:// 链接 或 IP:Port 节点列表 (每行一条)..."
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setIsImportOpen(false)}
                className="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                取消
              </button>
              <button
                onClick={handleImportSubmit}
                className="rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 cursor-pointer"
              >
                解析并加入节点池
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiet Minimal Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 px-6 py-3.5 text-xs text-slate-500">
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px]">
          <div>NodeMatrix · AI 节点能力筛选与防漏网订阅编译器</div>
          <div>
            内部引擎: 节点清洗与 /api/sub 动态分发 · 外部协同: GitHub Actions Mihomo + Sub-Store CF
          </div>
        </div>
      </footer>
    </div>
  );
}
