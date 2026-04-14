import { Ubuntu, Open_Sans } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const steps = [
  {
    n: '01',
    title: 'Connect your repository',
    body: 'Read-only GitHub access. Infra.ai scans your routes, queries, background jobs, and dependencies. No cloud credentials or deploy permissions needed.',
    tag: 'GitHub integration',
    lines: [
      { c: '#3b82f6',          t: '> Connecting github.com/acme/payments-api' },
      { c: '#10b981',          t: '✓  Read-only access granted' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Scanning 847 files across 12 services…' },
      { c: '#10b981',          t: '✓  Repository indexed in 4.2s' },
    ],
  },
  {
    n: '02',
    title: 'AI maps your real workload',
    body: 'Every route, query, job, and dependency is modelled. Traffic patterns, peak load windows, and scaling bottlenecks are derived from your actual code — not industry averages, not guesses.',
    tag: 'Workload analysis',
    lines: [
      { c: 'rgba(0,0,0,0.45)', t: '→  Mapped 34 API routes + 12 DB schemas' },
      { c: '#d97706',          t: '→  Detected: BullMQ job queue (3 workers)' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Load estimate: 2,400 req/day baseline' },
      { c: '#10b981',          t: '✓  Workload model complete' },
    ],
  },
  {
    n: '03',
    title: 'Simulate, stress-test & automate',
    body: 'We spin up a sandboxed replica of your stack and actually run it. Load tests, chaos probes, security scans. The AI then watches real-time metrics, learns your traffic patterns, and recommends smart automation — scheduled scale-ups, pre-emptive failovers, and security hardening — so your infra adapts before incidents happen, not after.',
    tag: 'Sandbox simulation',
    highlight: true,
    lines: [
      { c: '#3b82f6',          t: '→  Sandbox provisioned · isolated environment' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Load test · 10k req/min burst · 3 runs' },
      { c: '#d97706',          t: '⚠  p99 latency spike detected at 6,200 req/min' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Chaos probe: DB failover tested · 340ms recovery' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Security scan: 94 attack vectors probed' },
      { c: '#10b981',          t: '✓  0 critical CVEs · 2 medium (patches ready)' },
      { c: 'rgba(0,0,0,0.45)', t: '→  Traffic pattern: peak Mon–Fri 09:00–11:00 UTC' },
      { c: '#6366f1',          t: '⚡ Auto-scale rule → +2 nodes at 08:50 UTC daily' },
      { c: '#6366f1',          t: '⚡ Security rule → rate-limit /api/auth > 50 req/s' },
      { c: '#10b981',          t: '✓  Simulation complete · confidence score: 97%' },
    ],
  },
  {
    n: '04',
    title: 'Review, modify, approve',
    body: 'Terraform code, cost forecast, architecture diagram, security findings, and automation schedules — all explained with reasoning, all pending your team\'s explicit sign-off. Nothing is deployed or changed without human approval.',
    tag: 'Human approval',
    lines: [
      { c: 'rgba(0,0,0,0.45)', t: '→  3 infra scenarios + simulation report ready' },
      { c: '#10b981',          t: '✓  Optimal: ECS Fargate + RDS t3.medium' },
      { c: '#d97706',          t: '→  Projected cost: $2,840/mo (−18%)' },
      { c: '#6366f1',          t: '→  2 automation rules pending approval' },
      { c: '#3b82f6',          t: '⏳ Awaiting team sign-off…' },
    ],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.05),transparent_55%)]" />

      <div className="relative z-10 px-6 md:px-10 py-16 md:py-24">
        {/* Section header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className={`${openSans.className} inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-500 mb-4`}>
            <span className="w-4 h-px bg-blue-500/60" />
            How it works
          </span>
          <h2 className={`${ubuntu.className} text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight mb-4`}>
            Four steps.{' '}
            <span className="text-blue-500">Zero guesswork.</span>
          </h2>
          <p className={`${openSans.className} text-[15px] leading-relaxed text-muted-foreground`}>
            We don't just read best practices and tell you what to do. We simulate your entire stack in an isolated sandbox, run real stress tests, learn your traffic patterns, then recommend — with evidence and reasoning behind every decision.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-5 gap-0 rounded-xl border overflow-hidden"
              style={{
                borderColor: step.highlight ? 'rgba(99,102,241,0.25)' : 'var(--border)',
                background: step.highlight ? 'rgba(99,102,241,0.025)' : 'rgba(59,130,246,0.015)',
              }}
            >
              {/* Step info — 2/5 cols */}
              <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`${ubuntu.className} text-[52px] font-black leading-none select-none`}
                      style={{ color: step.highlight ? 'rgba(99,102,241,0.1)' : 'rgba(59,130,246,0.08)' }}
                    >
                      {step.n}
                    </span>
                    <span
                      className={`${openSans.className} text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider`}
                      style={
                        step.highlight
                          ? { background: 'rgba(99,102,241,0.1)', color: '#4f46e5', border: '1px solid rgba(99,102,241,0.2)' }
                          : { background: 'rgba(59,130,246,0.08)', color: 'oklch(0.45 0.20 260)', border: '1px solid rgba(59,130,246,0.15)' }
                      }
                    >
                      {step.tag}
                    </span>
                  </div>
                  <h3 className={`${ubuntu.className} text-xl font-bold mb-3`}>{step.title}</h3>
                  <p className={`${openSans.className} text-[14px] leading-relaxed text-muted-foreground`}>
                    {step.body}
                  </p>
                </div>
              </div>

              {/* Terminal — 3/5 cols */}
              <div className="lg:col-span-3 rounded-none overflow-hidden" style={{ background: '#ffffff' }}>
                <div
                  className="flex items-center gap-1.5 px-4 py-3 border-b"
                  style={{ background: '#f3f4f6', borderColor: 'rgba(0,0,0,0.07)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-2 text-[10px] font-mono" style={{ color: 'rgba(0,0,0,0.35)' }}>
                    infra.ai — step {step.n}
                  </span>
                </div>
                <div className="p-5 md:p-6 space-y-1.5 font-mono text-[12px]">
                  {step.lines.map((line, j) => (
                    <div key={j} style={{ color: line.c }} className="leading-relaxed">{line.t}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
