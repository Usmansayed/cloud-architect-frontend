import { Ubuntu, Open_Sans } from 'next/font/google'
import { Check } from 'lucide-react'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const outputs = [
  { label: 'Terraform Code',       desc: 'Production-ready .tf files scoped to your stack.',         badge: 'IaC-native',  color: '#3b82f6' },
  { label: 'Architecture Diagram', desc: 'Full service map with dependencies and data flows.',        badge: 'SVG export',  color: '#6366f1' },
  { label: 'Cost Breakdown',       desc: 'Line-by-line spend with 2×, 5×, 10× projections.',         badge: '$2,840/mo',   color: '#10b981' },
  { label: 'Security Findings',    desc: 'Prioritised CVEs with remediation steps, pre-deploy.',      badge: '3 critical',  color: '#f59e0b' },
  { label: 'Scaling Strategy',     desc: 'Per-tier resource adjustments with reliability tradeoffs.', badge: 'Per-tier',    color: '#f97316' },
]

const reportRows = [
  { k: 'Repository',        v: 'github.com/acme/payments-api', accent: false },
  { k: 'Monthly cost',      v: '$2,840 / mo',                  accent: false },
  { k: 'Savings vs current',v: '↓ 18%  ($620/mo)',             accent: true  },
  { k: 'Security',          v: '3 critical · 4 medium',        accent: false },
  { k: 'Simulation',        v: '✓ Passed · 97% confidence',    accent: true  },
  { k: 'Status',            v: '⏳ Pending approval',          accent: false },
]

const tfLines = [
  { t: 'resource "aws_ecs_cluster" "api" {',  c: '#3b82f6' },
  { t: '  name = "payments-api-prod"',         c: 'rgba(0,0,0,0.55)' },
  { t: '}',                                    c: '#3b82f6' },
  { t: '# ✓ Approved by @priya · Apr 14',     c: '#10b981' },
  { t: 'resource "aws_rds_instance" "db" {',  c: '#3b82f6' },
  { t: '  instance_class = "db.t3.medium"',   c: 'rgba(0,0,0,0.55)' },
  { t: '}',                                    c: '#3b82f6' },
]

export function Outputs() {
  return (
    <section id="outputs" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_15%_80%,rgba(59,130,246,0.05),transparent_55%)]" />

      <div className="relative z-10 px-6 md:px-10 py-16 md:py-24">

        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <span className={`${openSans.className} inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-500 mb-4`}>
            <span className="w-4 h-px bg-blue-500/60" />
            Outputs
          </span>
          <h2 className={`${ubuntu.className} text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight mb-3`}>
            Everything your team needs to approve with confidence.
          </h2>
          <p className={`${openSans.className} text-[15px] leading-relaxed text-muted-foreground`}>
            Every artifact is concrete, reviewable, and explained. Nothing black-box — inspect, edit, and sign off every line before execution.
          </p>
        </div>

        {/* Output cards grid — 2 col on sm, 3 on lg, last row centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {outputs.map((o, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40 hover:bg-card hover:shadow-sm transition-all duration-200"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${o.color}10`, border: `1.5px solid ${o.color}25` }}
              >
                <Check className="w-3.5 h-3.5" style={{ color: o.color }} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <span className={`${ubuntu.className} font-semibold text-[14px]`}>{o.label}</span>
                  <span
                    className={`${openSans.className} text-[10px] font-semibold px-1.5 py-0.5 rounded-full`}
                    style={{ background: `${o.color}10`, color: o.color, border: `1px solid ${o.color}20` }}
                  >
                    {o.badge}
                  </span>
                </div>
                <p className={`${openSans.className} text-[12px] text-muted-foreground leading-relaxed`}>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Report strip — horizontal, compact */}
        <div className="rounded-xl border border-border overflow-hidden shadow-sm">
          {/* Header bar */}
          <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-muted/20">
            <span className={`${openSans.className} text-xs font-semibold text-muted-foreground`}>
              Infrastructure Decision Report — github.com/acme/payments-api
            </span>
            <span
              className={`${openSans.className} text-[10px] px-2.5 py-1 rounded-full font-semibold shrink-0`}
              style={{ background: 'rgba(245,158,11,0.1)', color: '#b45309', border: '1px solid rgba(245,158,11,0.2)' }}
            >
              ⏳ Pending Approval
            </span>
          </div>

          {/* Two-column body: report rows + terraform */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">

            {/* Report rows */}
            <div className="divide-y divide-border bg-card/20">
              {reportRows.map((row, i) => (
                <div key={i} className="flex justify-between items-center px-5 py-2.5 text-sm">
                  <span className={`${openSans.className} text-muted-foreground text-[13px]`}>{row.k}</span>
                  <span
                    className={`${ubuntu.className} font-semibold text-[13px]`}
                    style={{ color: row.accent ? 'oklch(0.45 0.20 260)' : 'var(--foreground)' }}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </div>

            {/* Terraform preview */}
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
              {/* Action buttons */}
              <div className="px-4 py-3 border-t border-border flex gap-2" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
                <button
                  className={`${openSans.className} flex-1 py-2 rounded-lg text-[13px] font-semibold`}
                  style={{ background: 'rgba(16,185,129,0.09)', color: '#059669', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  ✓ Approve &amp; Apply
                </button>
                <button
                  className={`${openSans.className} px-4 py-2 rounded-lg text-[13px] font-medium`}
                  style={{ background: 'transparent', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}
                >
                  Modify
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
