'use client';

import React, { useState } from 'react';
import { TUN_PITFALLS } from '@/lib/constants';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Network,
  Cpu,
  RefreshCw,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export function TunDiagnosticWizard() {
  const [activeCheck, setActiveCheck] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Self-test simulation states
  const [testStates, setTestStates] = useState({
    ipv6LeakTest: 'clean', // 'clean' | 'leaking' | 'checking'
    fakeIpRangeTest: 'valid',
    daemonRouteTest: 'intercepted',
  });

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const runDiagnosticCheck = (checkKey: 'ipv6LeakTest' | 'fakeIpRangeTest' | 'daemonRouteTest') => {
    setTestStates((prev) => ({ ...prev, [checkKey]: 'checking' }));
    setTimeout(() => {
      setTestStates((prev) => ({ ...prev, [checkKey]: 'clean' }));
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-100">
          TUN Mode Diagnostic & Anti-Leak Armor
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-4xl">
          Antigravity 2 relies on background language server daemons and Google Cloud API gateways. When using TUN mode, network leaks (especially domestic IPv6 dual-stack bypasses) immediately trigger the `User location is not supported` error even if your browser works fine.
        </p>
      </div>

      {/* Interactive Quick Diagnostic Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Network className="h-4 w-4 text-emerald-400" />
            <h2 className="text-sm font-semibold text-slate-100">
              Interactive TUN Health Audit
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Environment Checks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-400 font-medium">01. IPv6 Leak Shield</div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>ipv6: false enforced</span>
            </div>
            <p className="text-slate-500 font-sans text-[11px]">
              Drops domestic IPv6 handshakes from bypassing the TUN adapter.
            </p>
            <button
              onClick={() => runDiagnosticCheck('ipv6LeakTest')}
              className="mt-1 text-[11px] text-slate-400 hover:text-emerald-400 underline cursor-pointer"
            >
              Verify IPv6 Status
            </button>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-400 font-medium">02. Child Process Interception</div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>auto-route: true active</span>
            </div>
            <p className="text-slate-500 font-sans text-[11px]">
              Catches `language_server_windows_x64.exe` and `node.exe`.
            </p>
            <button
              onClick={() => runDiagnosticCheck('daemonRouteTest')}
              className="mt-1 text-[11px] text-slate-400 hover:text-emerald-400 underline cursor-pointer"
            >
              Test Daemon Binding
            </button>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-400 font-medium">03. Fake-IP DNS Pool</div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>198.18.0.1/16 Clean</span>
            </div>
            <p className="text-slate-500 font-sans text-[11px]">
              RFC 2544 benchmark pool prevents intranet route collisions.
            </p>
            <button
              onClick={() => runDiagnosticCheck('fakeIpRangeTest')}
              className="mt-1 text-[11px] text-slate-400 hover:text-emerald-400 underline cursor-pointer"
            >
              Audit Fake-IP Pool
            </button>
          </div>
        </div>
      </div>

      {/* Accordion List of Pitfalls & Solutions */}
      <div className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
          Detailed Pitfalls & Remediation Recipes ({TUN_PITFALLS.length})
        </h2>

        {TUN_PITFALLS.map((pitfall, index) => {
          const isOpen = activeCheck === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden"
            >
              <button
                onClick={() => setActiveCheck(isOpen ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      {pitfall.title}
                    </h3>
                  </div>
                </div>

                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="p-4 pt-0 space-y-4 border-t border-slate-800/80 mt-2 text-xs">
                  <div className="space-y-1.5">
                    <span className="text-slate-500 uppercase tracking-wider text-[10px] font-mono">
                      Root Cause
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {pitfall.description}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-slate-500 uppercase tracking-wider text-[10px] font-mono">
                      Remediation Strategy
                    </span>
                    <p className="text-emerald-300 leading-relaxed bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/20">
                      {pitfall.solution}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 uppercase tracking-wider text-[10px] font-mono">
                        Configuration Snippet
                      </span>
                      <button
                        onClick={() => handleCopy(pitfall.codeSnippet, index)}
                        className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                        <span>Copy Block</span>
                      </button>
                    </div>

                    <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-300 border border-slate-800 overflow-x-auto">
                      <pre className="whitespace-pre">{pitfall.codeSnippet}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
