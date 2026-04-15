import { Ubuntu, Open_Sans } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

/* ─────────────────────────────────────────────────────────────────────────────
   NEW SECTION — "Continuous Intelligence Layer"
   Replaces the old Outputs section.
   Goal: shift perception from "tool that gives suggestions"
         → "intelligent system embedded in workflow"
───────────────────────────────────────────────────────────────────────────── */

const pillars = [
  {
    id: 'understand',
    index: '01',
    title: 'Understands continuously',
    body: 'Reads every codebase change, dependency update, and workflow shift the moment it happens.',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.18)',
    lines: [
      { c: '#3b82f6',            t: '→  Watching github.com/acme/payments-api' },
      { c: 'rgba(0,0,0,0.38)',   t: '   commit 9f3a2c · 14 files changed' },
      { c: '#10b981',            t: '✓  Dependency graph updated (847 nodes)' },
      { c: 'rgba(0,0,0,0.38)',   t: '   New route detected: POST /api/v2/refund' },
      { c: '#6366f1',            t: '⚡ Model re-indexing… complete in 1.8s' },
    ],
  },
  {
    id: 'simulate',
    index: '02',
    title: 'Simulates continuously',
    body: 'Runs infra decisions through a live sandbox. Re-evaluates every time the system changes.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.2)',
    lines: [
      { c: '#6366f1',            t: '→  Sandbox sync triggered by commit 9f3a2c' },
      { c: 'rgba(0,0,0,0.38)',   t: '   Load test: 12,000 req/min burst · 3 runs' },
      { c: '#d97706',            t: '⚠  New bottleneck at /api/v2/refund (p99 820ms)' },
      { c: 'rgba(0,0,0,0.38)',   t: '   Re-evaluating ECS task sizing…' },
      { c: '#10b981',            t: '✓  Simulation complete · confidence: 96%' },
    ],
  },
  {
    id: 'adapt',
    index: '03',
    title: 'Adapts continuously',
    body: 'Responds to traffic shifts, cost signals, and performance changes before incidents occur.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.10)',
    border: 'rgba(16,185,129,0.18)',
    lines: [
      { c: 'rgba(0,0,0,0.38)',   t: '   Traffic spike detected · Mon 09:02 UTC' },
      { c: '#10b981',            t: '⚡ Auto-scale rule fired → +3 nodes pre-emptive' },
      { c: 'rgba(0,0,0,0.38)',   t: '   Cost delta: +$14/day vs. $3,400 incident risk' },
      { c: '#6366f1',            t: '→  Hardening rule proposed: rate-limit /refund' },
      { c: '#10b981',            t: '✓  Adapted. Awaiting team sign-off.' },
    ],
  },
]

export function Outputs() {
  return (
    <section id="outputs" className="relative overflow-hidden border-t border-border">
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.06),transparent_60%)]" />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24">

        {/* ── Section header ── */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="font-sans font-medium inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-blue-500 mb-4">
            <span className="w-4 h-px bg-blue-500/60" />
            Always on
          </span>
          <h2 className={`${ubuntu.className} text-[26px] sm:text-3xl md:text-[2.6rem] font-bold leading-[1.1] tracking-tight mb-4`}>
            Not a one-time analysis.{' '}
            <span className="text-blue-500">A system that runs with yours.</span>
          </h2>
          <p className="font-sans font-medium text-[15px] leading-relaxed text-muted-foreground max-w-xl">
            Strikeloop integrates into your development and infrastructure workflow — continuously
            analyzing system behavior, simulating decisions, and adapting infrastructure over time.
          </p>
        </div>

        {/* ── Continuous loop visual ── */}
        {/* Flow connector line — visible on lg+ */}
        <div className="hidden lg:block relative mb-0">
          {/* Horizontal spine */}
          <div
            className="absolute top-[52px] left-[calc(33.33%/2)] right-[calc(33.33%/2)] h-px z-0"
            style={{ background: 'linear-gradient(to right, rgba(59,130,246,0.3), rgba(99,102,241,0.35), rgba(16,185,129,0.3))' }}
          />
          {/* Arrow dots along spine */}
          {[25, 50, 75].map((pct) => (
            <div
              key={pct}
              className="absolute top-[46px] w-3 h-3 rounded-full z-10"
              style={{
                left: `${pct}%`,
                transform: 'translate(-50%, 0)',
                background: 'var(--background)',
                border: '1.5px solid rgba(99,102,241,0.35)',
                boxShadow: '0 0 6px rgba(99,102,241,0.25)',
              }}
            />
          ))}
        </div>

        {/* ── 3-pillar grid ── */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {pillars.map((p) => (
            <div
              key={p.id}
              id={`pillar-${p.id}`}
              className="flex flex-col rounded-xl border overflow-hidden"
              style={{ borderColor: p.border, background: p.glow }}
            >
              {/* Pillar header */}
              <div className="px-5 pt-6 pb-4 flex items-start justify-between border-b" style={{ borderColor: p.border }}>
                <div>
                  <span
                    className={`${ubuntu.className} block text-[42px] font-black leading-none select-none mb-3`}
                    style={{ color: p.color, opacity: 0.18 }}
                  >
                    {p.index}
                  </span>
                  <h3 className={`${ubuntu.className} text-[17px] font-bold leading-snug`}>{p.title}</h3>
                  <p className="font-sans font-medium text-[13px] text-muted-foreground leading-relaxed mt-1.5">{p.body}</p>
                </div>
              </div>

              {/* Terminal stream */}
              <div style={{ background: '#ffffff', flexGrow: 1 }}>
                {/* Mac-style bar */}
                <div
                  className="flex items-center gap-1.5 px-4 py-2.5 border-b"
                  style={{ background: '#f3f4f6', borderColor: 'rgba(0,0,0,0.07)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-2 text-[10px] font-mono" style={{ color: 'rgba(0,0,0,0.35)' }}>
                    strikeloop · live stream
                  </span>
                  {/* Pulsing active dot */}
                  <span className="ml-auto flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: p.color }}
                    />
                    <span className="font-mono text-[9px]" style={{ color: p.color }}>live</span>
                  </span>
                </div>

                {/* Log lines */}
                <div className="p-4 md:p-5 space-y-1.5 font-mono text-[11.5px] leading-relaxed">
                  {p.lines.map((line, j) => (
                    <div key={j} style={{ color: line.c }}>{line.t}</div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex items-center gap-1 mt-1" style={{ color: p.color }}>
                    <span>_</span>
                    <span
                      className="w-1.5 h-3.5 animate-pulse"
                      style={{ background: p.color, opacity: 0.7 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom contextual note ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 px-1">
          {[
            { dot: '#3b82f6', label: 'Triggered by every commit' },
            { dot: '#6366f1', label: 'Re-simulated on every change' },
            { dot: '#10b981', label: 'Adapts before incidents happen' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.dot }} />
              <span className="font-sans font-medium text-[12px] text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   OLD OUTPUTS SECTION — COMMENTED OUT (keep for reference / reuse)
   Do NOT delete. Parts may be reused later.
───────────────────────────────────────────────────────────────────────────── */

/*
import { Check, FileText } from 'lucide-react'

const outputs = [
  { label: 'Terraform Code', desc: 'Production-ready .tf files scoped to your stack.', badge: 'IaC-native', color: '#3b82f6' },
  { label: 'Architecture Diagram', desc: 'Full service map with dependencies and data flows.', badge: 'SVG export', color: '#6366f1' },
  { label: 'Cost Breakdown', desc: 'Line-by-line spend with 2×, 5×, 10× traffic projections.', badge: '$2,840/mo', color: '#10b981' },
  { label: 'Security Findings', desc: 'Prioritised CVEs with remediation steps, surfaced before you deploy.', badge: '3 critical', color: '#f59e0b' },
  { label: 'Scaling Strategy', desc: 'Per-tier resource adjustments with reliability tradeoffs explained.', badge: 'Per-tier', color: '#f97316' },
  { label: 'Reasoning Report', desc: 'In-depth research-backed analysis on why each decision was made — citations included.', badge: 'AI research', color: '#8b5cf6', highlight: true },
]

const reportRows = [
  { k: 'Repository', v: 'github.com/acme/payments-api', accent: false },
  { k: 'Monthly cost', v: '$2,840 / mo', accent: false },
  { k: 'Savings vs current', v: '↓ 18%  ($620/mo)', accent: true },
  { k: 'Security', v: '3 critical · 4 medium', accent: false },
  { k: 'Simulation', v: '✓ Passed · 97% confidence', accent: true },
  { k: 'Status', v: '⏳ Pending approval', accent: false },
]

const tfLines = [
  { t: 'resource "aws_ecs_cluster" "api" {', c: '#3b82f6' },
  { t: '  name = "payments-api-prod"', c: 'rgba(0,0,0,0.55)' },
  { t: '}', c: '#3b82f6' },
  { t: '# ✓ Approved by @priya · Apr 14', c: '#10b981' },
  { t: 'resource "aws_rds_instance" "db" {', c: '#3b82f6' },
  { t: '  instance_class = "db.t3.medium"', c: 'rgba(0,0,0,0.55)' },
  { t: '}', c: '#3b82f6' },
]

export function OutputsOLD() {
  return (
    <section id="outputs-old" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_15%_80%,rgba(59,130,246,0.05),transparent_55%)]" />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24">

        <div className="max-w-2xl mb-10">
          <span className="font-sans font-medium inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-blue-500 mb-4">
            <span className="w-4 h-px bg-blue-500/60" />
            Outputs
          </span>
          <h2 className={`${ubuntu.className} text-[26px] sm:text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight mb-3`}>
            Everything your team needs to approve with confidence.
          </h2>
          <p className="font-sans font-medium text-[15px] leading-relaxed text-muted-foreground">
            Every artifact is concrete, reviewable, and explained. Nothing black-box — inspect, edit, and sign off every line before execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {outputs.map((o, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200"
              style={{
                borderColor: o.highlight ? 'rgba(139,92,246,0.25)' : 'var(--border)',
                background: o.highlight ? 'rgba(139,92,246,0.04)' : 'rgba(255,255,255,0.4)',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${o.color}10`, border: `1.5px solid ${o.color}25` }}
              >
                {o.highlight
                  ? <FileText className="w-3.5 h-3.5" style={{ color: o.color }} />
                  : <Check className="w-3.5 h-3.5" style={{ color: o.color }} />
                }
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className="font-sans font-medium text-[14px]">{o.label}</span>
                  <span
                    className="font-sans font-medium text-[10px] px-1.5 py-0.5 rounded-full"
                    style={{ background: `${o.color}10`, color: o.color, border: `1px solid ${o.color}20` }}
                  >
                    {o.badge}
                  </span>
                  {o.highlight && (
                    <span
                      className="font-sans font-medium text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{ background: 'rgba(139,92,246,0.12)', color: '#7c3aed', border: '1px solid rgba(139,92,246,0.2)' }}
                    >
                      Unique
                    </span>
                  )}
                </div>
                <p className="font-sans font-medium text-[12px] text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-muted/20">
            <span className="font-sans font-medium text-xs text-muted-foreground">
              Infrastructure Decision Report — github.com/acme/payments-api
            </span>
            <span
              className="font-sans font-medium text-[10px] px-2.5 py-1 rounded-full shrink-0"
              style={{ background: 'rgba(245,158,11,0.1)', color: '#b45309', border: '1px solid rgba(245,158,11,0.2)' }}
            >
              ⏳ Pending Approval
            </span>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">

            <div className="divide-y divide-border bg-card/20">
              {reportRows.map((row, i) => (
                <div key={i} className="flex justify-between items-start sm:items-center px-4 sm:px-5 py-2.5 text-sm gap-3">
                  <span className="font-sans font-medium text-[13px] text-muted-foreground">{row.k}</span>
                  <span
                    className="font-sans font-medium text-[13px]"
                    style={{ color: row.accent ? 'oklch(0.45 0.20 260)' : 'var(--foreground)' }}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ background: '#ffffff' }}>
              <div
                className="flex items-center gap-1.5 px-4 py-2.5 border-b"
                style={{ background: '#f3f4f6', borderColor: 'rgba(0,0,0,0.07)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-2 text-[10px] font-mono" style={{ color: 'rgba(0,0,0,0.35)' }}>
                  terraform/main.tf
                </span>
              </div>
              <div className="p-4 font-mono text-[11px] space-y-1 leading-relaxed">
                {tfLines.map((line, i) => (
                  <div key={i} style={{ color: line.c }}>{line.t}</div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-border flex gap-2" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
                <a
                  href="#waitlist"
                  className="font-sans font-medium flex-1 py-2 rounded-lg text-[13px] block text-center"
                  style={{ background: 'rgba(16,185,129,0.09)', color: '#059669', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  ✓ Approve &amp; Apply
                </a>
                <a
                  href="#waitlist"
                  className="font-sans font-medium px-4 py-2 rounded-lg text-[13px] block text-center"
                  style={{ background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}
                >
                  Modify
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
*/
