import { Eye, AlertCircle, TrendingUp, Zap } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Continuous anomaly detection',
    description:
      'Track cost drift, scaling pressure, and unusual usage patterns across all cloud resources after deployment.',
    color: '#3b82f6',
  },
  {
    icon: AlertCircle,
    title: 'High-signal, actionable alerts',
    description:
      'Get alerts tied to root causes and next steps  not noisy dashboards with false positives and zero context.',
    color: '#f59e0b',
  },
  {
    icon: TrendingUp,
    title: 'Optimization recommendations',
    description:
      'Receive scaling and cost efficiency suggestions with estimated impact and tradeoffs before implementing.',
    color: '#10b981',
  },
  {
    icon: Zap,
    title: 'Approval-based actions',
    description:
      'Recommendations sit in a pending queue until explicitly reviewed and approved by your engineering team.',
    color: '#6366f1',
  },
]

const terminalLines = [
  { time: '09:14', text: '⚠  Worker spend ↑38% vs last week', color: '#f59e0b', delay: 0 },
  { time: '09:14', text: '   → Likely cause: Job queue backlog growth', color: 'rgba(255,255,255,0.45)', delay: 0.18 },
  { time: '09:15', text: '   Suggestion: Adjust autoscale thresholds', color: 'oklch(0.72 0.14 260)', delay: 0.36 },
  { time: '09:15', text: '   + Change spot instance mix to 60/40', color: 'oklch(0.72 0.14 260)', delay: 0.54 },
  { time: '09:15', text: '   Projected impact: −$1,240/month', color: '#10b981', delay: 0.72 },
  { time: '09:15', text: '   p95 latency: unchanged (within SLA)', color: '#10b981', delay: 0.90 },
  { time: '09:15', text: '⏳ Status: Pending team approval', color: 'oklch(0.72 0.14 280)', delay: 1.08 },
  { time: '09:18', text: '✓  Approved by @daniel · Applied', color: '#10b981', delay: 1.26 },
]

export function Monitoring() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-chip mb-5 inline-block">Continuous Monitoring</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
            After deployment,{' '}
            <span className="gradient-text">strikeloop keeps watching</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Infrastructure evolves over time. strikeloop detects drift early and responds with measurable options before problems become incidents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Features */}
          <div className="space-y-4">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="premium-card p-5 flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{
                      background: `${feature.color}10`,
                      border: `1px solid ${feature.color}22`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* No silent changes callout */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(16,185,129,0.06)',
                border: '1px solid rgba(16,185,129,0.18)',
              }}
            >
              <h4 className="font-semibold text-sm text-emerald-700 mb-1.5">
                No silent changes  ever
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                strikeloop can queue optimization actions, but execution always requires explicit team approval. Your team controls production risk.
              </p>
            </div>
          </div>

          {/* Right: Terminal */}
          <div>
            {/* Alert indicator */}
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                  style={{ animation: 'ping-soft 1.5s cubic-bezier(0,0,0.2,1) infinite' }}
                />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-sm font-semibold text-amber-700">Live anomaly detected</span>
              <span className="text-xs text-muted-foreground">Apr 14, 09:14 UTC</span>
            </div>

            {/* Terminal */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f56' }} />
                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="terminal-dot" style={{ background: '#27c93f' }} />
                <span className="ml-2 text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  strikeloop  cost & scaling monitor
                </span>
              </div>
              <div className="terminal-body space-y-0.5">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex gap-3 text-[11px]"
                    style={{
                      animationName: 'slide-right',
                      animationDuration: '0.35s',
                      animationTimingFunction: 'ease',
                      animationDelay: `${line.delay}s`,
                      animationFillMode: 'both',
                      color: line.color,
                    }}
                  >
                    <span
                      style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, minWidth: '36px' }}
                    >
                      {line.time}
                    </span>
                    <span>{line.text}</span>
                  </div>
                ))}
                <div className="flex gap-3 text-[11px] mt-1" style={{ color: 'oklch(0.72 0.14 260)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', minWidth: '36px' }}>09:19</span>
                  <span className="cursor-blink">Ready for next analysis</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: '−$1,240', label: 'Monthly savings', color: '#10b981' },
                { value: '38%', label: 'Cost spike caught', color: '#f59e0b' },
                { value: '< 1min', label: 'Time to alert', color: '#3b82f6' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 text-center bg-card border border-border shadow-sm"
                >
                  <div className="font-black text-lg" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
