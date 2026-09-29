'use client';

import React, { useState } from 'react';
import { SERVICE_PROBES } from '@/lib/constants';
import { ServiceProbeDefinition } from '@/lib/types';
import {
  ShieldAlert,
  ArrowRight,
  Terminal,
  Zap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';

export function DetectionMatrix() {
  const [selectedProbe, setSelectedProbe] = useState<ServiceProbeDefinition>(
    SERVICE_PROBES[0]
  );
  const [testResult, setTestResult] = useState<{
    running: boolean;
    data: null | {
      statusCode: number;
      verdict: 'PASS' | 'BLOCKED';
      durationMs: number;
      reason: string;
      rawHeaders?: Record<string, string>;
    };
  }>({ running: false, data: null });

  const [copied, setCopied] = useState(false);

  const handleRunLiveTest = async () => {
    setTestResult({ running: true, data: null });
    try {
      const res = await fetch('/api/probe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nodeName: 'Current Direct Gateway',
          server: 'Local Ingress',
          port: 443,
          targetService: selectedProbe.id,
        }),
      });
      const data = await res.json();
      setTestResult({
        running: false,
        data: {
          statusCode: data.statusCode || 200,
          verdict: data.verdict || 'PASS',
          durationMs: data.durationMs || 120,
          reason: data.reason || 'Probe completed',
        },
      });
    } catch {
      setTestResult({
        running: false,
        data: {
          statusCode: 500,
          verdict: 'BLOCKED',
          durationMs: 250,
          reason: 'Network error communicating with probe gateway',
        },
      });
    }
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header & Concept */}
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-100">
          Detection Principles & Zero-Cost Prober Matrix
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-4xl leading-relaxed">
          Comprehensive teardown of edge gateway risk models, GeoIP inspection, and ASN classification algorithms used by Google Antigravity, Anthropic Claude Code, OpenAI ChatGPT, and major cloud services. Discover how to detect node viability without consuming paid API tokens.
        </p>
      </div>

      {/* Gateway Flowchart */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald-400" />
            Inspection Lifecycle & Decision Tree
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            Zero-Token Verification Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-500">01. INGRESS & TUN</div>
            <div className="text-slate-200 font-medium">L3 TUN Virtual Adapter</div>
            <p className="text-slate-400 font-sans text-xs">
              Fake-IP lookup (`198.18.0.1/16`). Enforces strict `ipv6: false` to drop direct domestic IPv6 handshakes.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-500">02. EDGE FIREWALL</div>
            <div className="text-slate-200 font-medium">Cloudflare / Google ESF</div>
            <p className="text-slate-400 font-sans text-xs">
              Inspects client IP ASN against cloud hosting blacklist (Hetzner, OVH, Oracle) and checks MaxMind/ESF GeoIP.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-500">03. ZERO-TOKEN PROBE</div>
            <div className="text-slate-200 font-medium">Dummy Header Injection</div>
            <p className="text-slate-400 font-sans text-xs">
              Dispatches minimal request with invalid API keys or dummy tokens. Bypasses quota billing while testing gateway authorization.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-slate-500">04. VERDICT & TAGGING</div>
            <div className="text-slate-200 font-medium">Status Code Dissection</div>
            <p className="text-slate-400 font-sans text-xs">
              401 Auth Error = Geo Passed. 403 / 400 Location Block = Blacklisted. Classifies node and builds fallback policy groups.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Service Selection & Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Service Selector Cards */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
            Target Services ({SERVICE_PROBES.length})
          </h2>
          <div className="space-y-2">
            {SERVICE_PROBES.map((probe) => {
              const isSelected = selectedProbe.id === probe.id;
              return (
                <button
                  key={probe.id}
                  onClick={() => {
                    setSelectedProbe(probe);
                    setTestResult({ running: false, data: null });
                  }}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500/50 bg-slate-900 text-slate-100 shadow-sm'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-200">
                      {probe.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {probe.category}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 truncate">
                    {probe.gateway}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Risk: {probe.riskFactor}</span>
                    <ArrowRight className="h-3 w-3 text-slate-600" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Diagnostic Spec & Sandbox */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {selectedProbe.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>Gateway: {selectedProbe.gateway}</span>
                  <span aria-hidden="true">·</span>
                  <span>Category: {selectedProbe.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400">{selectedProbe.riskFactor}</span>
                </div>
              </div>

              <button
                onClick={handleRunLiveTest}
                disabled={testResult.running}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {testResult.running ? (
                  <>
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                    <span>Probing Gateway...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-3.5 w-3.5" />
                    <span>Test Current Egress</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Test Outcome (if triggered) */}
            {testResult.data && (
              <div
                className={`rounded-lg border p-4 text-xs font-mono space-y-2 ${
                  testResult.data.verdict === 'PASS'
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-200'
                    : 'border-rose-500/30 bg-rose-950/20 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <div className="flex items-center gap-2">
                    {testResult.data.verdict === 'PASS' ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <XCircle className="h-4 w-4 text-rose-400" />
                    )}
                    <span>
                      VERDICT: {testResult.data.verdict} (HTTP{' '}
                      {testResult.data.statusCode})
                    </span>
                  </div>
                  <span className="text-slate-400 font-normal">
                    {testResult.data.durationMs}ms latency
                  </span>
                </div>
                <div className="text-slate-300 font-sans">
                  {testResult.data.reason}
                </div>
              </div>
            )}

            {/* Deep Principle Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Detection Mechanism & Edge Behavior
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                {selectedProbe.detailedPrinciple}
              </p>
            </div>

            {/* Zero Token Method & Pass / Block Condition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/10 p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Pass Indicator (Supported IP)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProbe.passCondition}
                </p>
              </div>

              <div className="rounded-lg border border-rose-500/20 bg-rose-950/10 p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-rose-400">
                  <XCircle className="h-4 w-4" />
                  <span>Block Indicator (Blocked / Risky IP)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProbe.blockCondition}
                </p>
              </div>
            </div>

            {/* Technical Verification Signature */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Zero-Token HTTP Probe Execution
                </h4>
                <button
                  onClick={() =>
                    copyCode(`curl -i "${selectedProbe.targetEndpoint}"`)
                  }
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  <span>Copy cURL</span>
                </button>
              </div>

              <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-300 border border-slate-800 space-y-1 overflow-x-auto">
                <div className="text-slate-500">
                  # Target: {selectedProbe.targetEndpoint}
                </div>
                <div className="text-emerald-400">
                  Method: {selectedProbe.zeroTokenMethod}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
