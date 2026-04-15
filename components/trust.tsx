import { Lock, Eye, ToggleRight, Shield, FileText, Users, CheckCircle2 } from 'lucide-react'

const trustPoints = [
  {
    icon: Lock,
    title: 'Read-only GitHub access',
    description:
      'strikeloop analyzes code with read-only permissions. No cloud credentials needed to generate recommendations.',
    color: '#3b82f6',
  },
  {
    icon: ToggleRight,
    title: 'Approval-based workflow',
    description:
      'Every recommended action stays in a pending state until your team explicitly reviews and signs off.',
    color: '#10b981',
  },
  {
    icon: Eye,
    title: 'Full decision transparency',
    description:
      'Each output includes detailed reasoning, expected impact, and cost context so reviews are fast and confident.',
    color: '#6366f1',
  },
  {
    icon: Shield,
    title: 'Security-first planning',
    description:
      'Security audits are integrated into the planning phase not discovered as a post-deploy fire drill.',
    color: '#f59e0b',
  },
  {
    icon: FileText,
    title: 'Portable Terraform output',
    description:
      'Plans are Terraform-based, keeping decisions reviewable and portable across all cloud providers.',
    color: '#f97316',
  },
  {
    icon: Users,
    title: 'Built for team review',
    description:
      'Share plans with engineers and stakeholders before execution to eliminate deployment surprises.',
    color: '#ec4899',
  },
]

const faqs = [
  {
    q: 'Can this change production without our knowledge?',
    a: 'No. strikeloop never auto-applies changes. Every action is approval-gated and requires explicit team sign-off.',
  },
  {
    q: 'How can we trust the recommendations?',
    a: 'Recommendations are derived from your actual code patterns and include full rationale plus cost impact before any approval.',
  },
  {
    q: 'What if we disagree with parts of the plan?',
    a: 'Modify, reject, or replace any recommendation. strikeloop assists decisions  your team always stays in charge.',
  },
]

export function Trust() {
  return (
    <section id="trust" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-chip mb-5 inline-block">Trust & Safety</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
            Control and safety{' '}
            <span className="gradient-text">built into every step</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Infrastructure decisions are too critical for black-box automation. strikeloop is designed for explicit approval and clear accountability.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {trustPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div key={i} className="premium-card p-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{
                    background: `${point.color}10`,
                    border: `1px solid ${point.color}22`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: point.color }} />
                </div>
                <h3 className="font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Approval gate mockup */}
        <div
          className="rounded-2xl p-8 mb-6"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.56 0.21 260 / 0.05), oklch(0.56 0.21 285 / 0.03))',
            border: '1px solid oklch(0.56 0.21 260 / 0.14)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-3">The Approval Gate</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Every strikeloop recommendation sits in a pending queue until explicitly approved. Nothing gets applied silently  ever.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Read-only access', 'No auto-deploy', 'Team approval required'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{
                      background: 'rgba(16,185,129,0.08)',
                      color: '#059669',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mock approval UI */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden bg-card border border-border shadow-sm">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/20">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Infrastructure Decision Report
                  </span>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                    style={{
                      background: 'rgba(245,158,11,0.1)',
                      color: '#b45309',
                      border: '1px solid rgba(245,158,11,0.22)',
                    }}
                  >
                    ⏳ Pending Approval
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { label: 'Repository', value: 'github.com/acme/payments-api', color: 'oklch(0.45 0.20 260)' },
                    { label: 'Monthly cost', value: '$2,840/month (↓18%)', color: '#059669' },
                    { label: 'Risk level', value: 'Low  2 minor issues', color: '#b45309' },
                    { label: 'Stack', value: 'ECS Fargate + RDS t3.medium', color: 'var(--foreground)' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span style={{ color: row.color }} className="font-semibold">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4 flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 hover:bg-[rgba(16,185,129,0.16)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#059669',
                      border: '1px solid rgba(16,185,129,0.22)',
                    }}
                  >
                    ✓ Approve & Apply
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-muted/40 hover:text-foreground hover:border-accent/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                    style={{
                      background: 'transparent',
                      color: 'var(--muted-foreground)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    Modify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Common concerns, answered</h3>
          <div className="space-y-5">
            {faqs.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: 'oklch(0.56 0.21 260 / 0.08)',
                    border: '1px solid oklch(0.56 0.21 260 / 0.2)',
                  }}
                >
                  <span className="text-[10px] font-black text-accent">Q</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1.5 text-accent">{item.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
