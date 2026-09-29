'use client';

import React from 'react';
import { ShieldCheck, Play, ArrowDownToLine, Plus } from 'lucide-react';

interface TopBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenImport: () => void;
  onQuickProbe: () => void;
  totalNodes: number;
  selectedNodesCount: number;
  antigravityCount: number;
  probingActive: boolean;
  probeProgress: number;
}

export function TopBar({
  activeTab,
  onTabChange,
  onOpenImport,
  onQuickProbe,
  totalNodes,
  selectedNodesCount,
  antigravityCount,
  probingActive,
  probeProgress,
}: TopBarProps) {
  const navItems = [
    { id: 'workbench', label: '01. 节点工作台与订阅分发 (内部核心)' },
    { id: 'pipeline', label: '02. Sub-Store & Actions 流水线 (外部集成)' },
    { id: 'diagnostics', label: '03. 探针矩阵与 TUN 速查' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md px-6 py-2.5">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onTabChange('workbench');
          }}
          className="text-base font-bold tracking-tight text-slate-100 whitespace-nowrap"
        >
          NodeMatrix
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`transition-colors hover:text-slate-100 whitespace-nowrap cursor-pointer py-1 ${
                activeTab === item.id
                  ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-slate-400 mr-2 tabular-nums">
            <span>总池 {totalNodes}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Antigravity可用 {antigravityCount}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-200">已选 {selectedNodesCount}</span>
          </div>

          <button
            onClick={onOpenImport}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 cursor-pointer whitespace-nowrap"
          >
            <Plus className="h-3.5 w-3.5 text-emerald-400" />
            <span>导入订阅/节点</span>
          </button>

          <button
            onClick={onQuickProbe}
            disabled={probingActive}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:opacity-50 cursor-pointer whitespace-nowrap"
          >
            <Play className="h-3.5 w-3.5" />
            <span>{probingActive ? `测活中 ${probeProgress}%` : '批量测活'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden overflow-x-auto gap-3 pt-2 text-xs border-t border-slate-900 mt-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`whitespace-nowrap px-2 py-1 rounded transition-colors ${
              activeTab === item.id
                ? 'bg-slate-800 text-emerald-400 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
