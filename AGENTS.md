# AGENTS.md

## CONTEXT & STACK
- Environment: Node >= 22 (Active: Node 24.13), Python >= 3.10 (Active: 3.12.8)
- Framework: Next.js 15.4 (App Router) + React 19 + Tailwind CSS v4 + Motion
- Package Manager: pnpm 11.7.0 (standalone project with `pnpm-workspace.yaml`)
- Kernel & Prober: Mihomo Kernel (Clash Meta) + Python 3.10+ (`scripts/probe_engine.py`)
- CI/CD Automation: GitHub Actions (`.github/workflows/probe-nodes.yml`)
- Peer Backend: `../sub-store-cloudflare` (Cloudflare Workers + D1)

## PIPELINE ROLES
1. WORKBENCH (控制台): NodeMatrix visual matrix, capability filters, multi-format subscription generator (Mihomo, Sing-Box, Shadowsocks, TUN).
2. REAL-TIME PROBE (本地探测): Live HTTP zero-token handshake against Google ESF, Anthropic WAF, OpenAI API, and Google Clean IP.
3. CLOUD AUTOMATION (云端探测): Scheduled (every 4h) and on-demand GitHub Actions Ubuntu Runner with Mihomo kernel.
4. SYNC & FEEDBACK (状态回传): Submits verified capabilities and latency back to Worker API (`POST /api/prober/report`).

## CRITICAL COMMANDS
- Dev Server: `pnpm run dev` (starts on http://localhost:3000)
- Production Build: `pnpm run build`
- Lint: `pnpm run lint`
- Install Dependencies: `pnpm install`
- Run Local Prober Engine: `python scripts/probe_engine.py`
- Trigger Remote Prober: `gh workflow run probe-nodes.yml`

## WORKFLOW CONSTRAINTS (SPARTAN RULES)
- NO polite preamble. Output diffs or direct answers immediately.
- FORBIDDEN: Fake mock data in workbench -> USE: Real harvested nodes from API or `scripts/parsed_nodes.json`.
- FORBIDDEN: Math.random jitter for node latency -> USE: Real `/api/probe` status and duration measurements.
- FORBIDDEN: Hardcoding Sub-Store admin tokens in client code -> USE: GitHub Secrets or local input state.
- FORBIDDEN: Committing Mihomo runtime test artifacts -> USE: `.gitignore` ignoring `output/` and `test_run.yaml`.
- Run `pnpm run build` before pushing frontend changes.

## PROGRESSIVE DISCLOSURE POINTERS
- Backend API & D1 Architecture: -> ../sub-store-cloudflare/docs/rules/worker-backend.md
- Pipeline Architecture & Probing Specs: -> ../sub-store-cloudflare/docs/rules/pipeline-architecture.md
- Prober Standards & Status Code Matrix: -> ../sub-store-cloudflare/docs/rules/prober-spec.md

