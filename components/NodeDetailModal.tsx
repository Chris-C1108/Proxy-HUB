'use client';

import React from 'react';
import { NodeItem, CapabilityTag } from '@/lib/types';
import { SERVICE_PROBES } from '@/lib/constants';
import {
  X,
  CheckCircle2,
  XCircle,
  Server,
  Network,
  Clock,
  Shield,
  Activity,
} from 'lucide-react';

interface NodeDetailModalProps {
  node: NodeItem | null;
  onClose: () => void;
}

export function NodeDetailModal({ node, onClose }: NodeDetailModalProps) {
  if (!node) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">{node.flag}</span>
              <h2 className="text-base font-bold text-slate-100 font-mono">
                {node.name}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>{node.server}:{node.port}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase text-slate-300">{node.type}</span>
              <span aria-hidden="true">·</span>
              <span className={node.asnType === 'Residential ISP' ? 'text-cyan-400' : 'text-amber-400'}>
                {node.asnType}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Vital Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="text-slate-500 text-[10px]">LATENCY</div>
            <div className="text-emerald-400 font-bold text-base mt-0.5 tabular-nums">
              {node.latency} ms
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="text-slate-500 text-[10px]">HEALTH SCORE</div>
            <div className="text-cyan-400 font-bold text-base mt-0.5 tabular-nums">
              {node.overallScore} / 100
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="text-slate-500 text-[10px]">ASN IDENTIFIER</div>
            <div className="text-slate-300 font-bold text-xs truncate mt-1">
              {node.asn.split(' ')[0]}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="text-slate-500 text-[10px]">LAST PROBED</div>
            <div className="text-slate-300 text-xs mt-1">
              {node.testedAt || 'Just now'}
            </div>
          </div>
        </div>

        {/* Detailed Service Probes Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Zero-Token Probe Diagnostic Breakdown
          </h3>

          <div className="space-y-2">
            {SERVICE_PROBES.map((probe) => {
              const cap = node.capabilities[probe.id];
              const isSupported = cap?.supported;

              return (
                <div
                  key={probe.id}
                  className={`rounded-lg border p-3 text-xs space-y-1.5 transition-colors ${
                    isSupported
                      ? 'border-emerald-500/20 bg-emerald-950/10'
                      : 'border-slate-800 bg-slate-950'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                      {isSupported ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                      )}
                      <span className={isSupported ? 'text-slate-200' : 'text-slate-400'}>
                        {probe.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] tabular-nums">
                      <span className={isSupported ? 'text-emerald-400' : 'text-rose-400'}>
                        HTTP {cap?.status || 0}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">{cap?.responseTimeMs || 0}ms</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono pl-6">
                    {cap?.reason || 'No diagnostic output recorded'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Close Footer */}
        <div className="flex items-center justify-end border-t border-slate-800 pt-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
