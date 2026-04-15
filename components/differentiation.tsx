import { Check, X } from 'lucide-react'

interface CompRow {
  feature: string
  infraai: boolean
  manual: boolean
  templates: boolean
  blackbox: boolean
}

type CompField = 'infraai' | 'manual' | 'templates' | 'blackbox'

const comparison: CompRow[] = [
  { feature: 'Analyzes your actual codebase', infraai: true, manual: false, templates: false, blackbox: false },
  { feature: 'Generates production-ready Terraform', infraai: true, manual: true, templates: true, blackbox: false },
  { feature: 'Understands your dependencies', infraai: true, manual: false, templates: false, blackbox: false },
  { feature: 'Security audit integrated into planning', infraai: true, manual: true, templates: false, blackbox: false },
  { feature: 'Explains every decision with rationale', infraai: true, manual: true, templates: false, blackbox: false },
  { feature: 'Works across all cloud providers', infraai: true, manual: true, templates: true, blackbox: true },
  { feature: 'Requires hours of manual setup', infraai: false, manual: true, templates: true, blackbox: true },
  { feature: 'Produces black-box outputs', infraai: false, manual: false, templates: false, blackbox: true },
  { feature: 'Vendor lock-in risk', infraai: false, manual: false, templates: false, blackbox: true },
]

const cols: { key: CompField; label: string; featured: boolean }[] = [
  { key: 'infraai', label: 'strikeloop', featured: true },
  { key: 'manual', label: 'Manual Setup', featured: false },
  { key: 'templates', label: 'Templates', featured: false },
  { key: 'blackbox', label: 'Black-box AI', featured: false },
]

const alternatives = [
  {
    title: 'vs Manual Setup',
    without: 'Weeks of coordination, guesswork, and rework before you can safely deploy.',
    with: 'Infrastructure plan with full rationale ready in minutes, not weeks.',
  },
  {
    title: 'vs Generic Templates',
    without: 'Fast start but low workload fit  templates don\'t know your codebase.',
    with: 'Recommendations tied directly to your routes, queries, and traffic patterns.',
  },
  {
    title: 'vs Black-box AI Tools',
    without: 'Outputs with no explanation, no approval gates, and no audit trail.',
    with: 'Decision-level explanations, full approval workflow, and portable Terraform.',
  },
]

export function Differentiation() {
  return (
    <section className="py-20 px-4 border-t border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-chip mb-5 inline-block">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
            How strikeloop compares{' '}
            <span className="gradient-text">to common alternatives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the approach that gives your team speed, confidence, and full operational control.
          </p>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden grid gap-4 mb-10">
          {alternatives.map((item) => (
            <div key={item.title} className="premium-card p-5">
              <h3 className="font-bold mb-3 text-accent">{item.title}</h3>
              <div className="space-y-3">
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.12)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rose-400/60 mb-1">Without strikeloop</p>
                  <p className="text-muted-foreground">{item.without}</p>
                </div>
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600/60 mb-1">With strikeloop</p>
                  <p className="text-emerald-700 font-medium">{item.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div
          className="hidden md:block rounded-2xl overflow-hidden mb-10 shadow-sm"
          style={{ border: '1px solid var(--border)' }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-4 font-semibold text-base">Feature</th>
                {cols.map((col) => (
                  <th
                    key={col.key}
                    className="text-center px-5 py-4 font-semibold text-sm"
                    style={{
                      color: col.featured ? 'oklch(0.45 0.20 260)' : 'var(--muted-foreground)',
                      background: col.featured ? 'oklch(0.56 0.21 260 / 0.05)' : 'transparent',
                    }}
                  >
                    {col.featured && (
                      <div className="mb-1.5">
                        <span
                          className="inline-block text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest"
                          style={{
                            background: 'oklch(0.56 0.21 260 / 0.12)',
                            color: 'oklch(0.45 0.20 260)',
                            border: '1px solid oklch(0.56 0.21 260 / 0.25)',
                          }}
                        >
                          ✦ Best pick
                        </span>
                      </div>
                    )}
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/70 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-6 py-3.5 text-sm font-medium">{row.feature}</td>
                  {cols.map((col) => {
                    const val = row[col.key]
                    return (
                      <td
                        key={col.key}
                        className="text-center px-5 py-3.5"
                        style={{
                          background: col.featured ? 'oklch(0.56 0.21 260 / 0.03)' : 'transparent',
                        }}
                      >
                        {val ? (
                          <div className="flex justify-center">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center"
                              style={{
                                background: col.featured
                                  ? 'oklch(0.56 0.21 260 / 0.12)'
                                  : 'rgba(16,185,129,0.1)',
                              }}
                            >
                              <Check
                                className="w-3 h-3"
                                style={{
                                  color: col.featured ? 'oklch(0.45 0.20 260)' : '#10b981',
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/25 mx-auto" />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alternative cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {alternatives.map((alt, i) => (
            <div key={i} className="premium-card p-6">
              <h3 className="font-bold mb-4 text-accent">{alt.title}</h3>
              <div className="space-y-3">
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.1)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rose-400/60 mb-1">Without</p>
                  <p className="text-muted-foreground">{alt.without}</p>
                </div>
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.14)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600/60 mb-1">With strikeloop</p>
                  <p className="text-emerald-700 font-semibold">{alt.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
