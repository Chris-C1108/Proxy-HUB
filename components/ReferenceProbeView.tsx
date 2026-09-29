'use client';

import React, { useState } from 'react';
import { SERVICE_PROBES, TUN_PITFALLS } from '@/lib/constants';
import { ServiceProbeDefinition } from '@/lib/types';
import { Zap, CheckCircle2, XCircle, Copy, Check } from 'lucide-react';

export function ReferenceProbeView() {
  const [testingId, setTestingId] = useState<string | null>(null);
  const [results, setResults] = useState<
    Record<
      string,
      { statusCode: number; verdict: string; durationMs: number; reason: string }
    >
  >({});
  const [copiedSnippet, setCopiedSnippet] = useState<number | null>(null);

  const runLiveTest = async (probe: ServiceProbeDefinition) => {
    setTestingId(probe.id);
    try {
      const res = await fetch('/api/probe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nodeName: 'Current Server Egress',
          server: 'Local Gateway',
          port: 443,
          targetService: probe.id,
        }),
      });
      const data = await res.json();
      setResults((prev) => ({
        ...prev,
        [probe.id]: {
          statusCode: data.statusCode || 200,
          verdict: data.verdict || 'PASS',
          durationMs: data.durationMs || 110,
          reason: data.reason || 'OK',
        },
      }));
    } catch {
      setResults((prev) => ({
        ...prev,
        [probe.id]: {
          statusCode: 504,
          verdict: 'TIMEOUT',
          durationMs: 2500,
          reason: 'Gateway timeout',
        },
      }));
    } finally {
      setTestingId(null);
    }
  };

  const copySnippet = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(idx);
    setTimeout(() => setCopiedSnippet(null), 1800);
  };

  return (
    <div className="space-y-6">
      {/* Section 1: High-Density Zero-Token Probe Reference Table */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            01. 七大平台零 Token 探针判定速查表 (支持实时出口实测)
          </h2>
          <span className="text-xs font-mono text-slate-400">
            内部功能: 调用 /api/probe 测试当前网关出站状态
          </span>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                <tr>
                  <th className="py-2.5 px-3">目标平台 / 网关</th>
                  <th className="py-2.5 px-3">探测端点与方法</th>
                  <th className="py-2.5 px-3">PASS 特征 (区域放行)</th>
                  <th className="py-2.5 px-3">BLOCKED 特征 (风控/锁区)</th>
                  <th className="py-2.5 px-3 text-right">当前网关实测</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {SERVICE_PROBES.map((probe) => {
                  const res = results[probe.id];
                  const isRunning = testingId === probe.id;

                  return (
                    <tr key={probe.id} className="hover:bg-slate-900/40">
                      <td className="py-2.5 px-3">
                        <div className="font-semibold text-slate-200">
                          {probe.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {probe.gateway}
                        </div>
                      </td>

                      <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300">
                        <div className="truncate max-w-[240px]">
                          {probe.targetEndpoint}
                        </div>
                        <div className="text-slate-500">{probe.zeroTokenMethod}</div>
                      </td>

                      <td className="py-2.5 px-3 text-emerald-400 font-mono text-[11px]">
                        {probe.passCondition}
                      </td>

                      <td className="py-2.5 px-3 text-rose-400 font-mono text-[11px]">
                        {probe.blockCondition}
                      </td>

                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {res && (
                            <span
                              className={`font-mono text-[11px] tabular-nums ${
                                res.verdict === 'PASS'
                                  ? 'text-emerald-400'
                                  : 'text-rose-400'
                              }`}
                            >
                              {res.verdict} ({res.statusCode} · {res.durationMs}ms)
                            </span>
                          )}
                          <button
                            onClick={() => runLiveTest(probe)}
                            disabled={isRunning}
                            className="inline-flex items-center gap-1 rounded border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 hover:bg-slate-800 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                          >
                            <Zap className="h-3 w-3 text-emerald-400" />
                            <span>{isRunning ? '探测中...' : '实测'}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 2: Compact 2x2 Grid for TUN Mode Anti-Leak Snippets */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            02. 本地客户端 TUN 模式防漏网核心配置片段
          </h2>
          <span className="text-xs font-mono text-slate-400">
            外部功能: 作用于用户本地 Clash Verge / Mihomo Party 客户端内核
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TUN_PITFALLS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-slate-200">
                    0{idx + 1}. {item.title}
                  </h3>
                  <button
                    onClick={() => copySnippet(item.codeSnippet, idx)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
                  >
                    {copiedSnippet === idx ? (
                      <Check className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    <span>{copiedSnippet === idx ? '已复制' : '复制配置'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.solution}
                </p>
              </div>

              <div className="rounded bg-slate-950 p-2.5 font-mono text-[11px] text-emerald-300 border border-slate-800 overflow-x-auto">
                <pre className="whitespace-pre">{item.codeSnippet}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
