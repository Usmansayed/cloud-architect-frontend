import { Ubuntu, Open_Sans } from 'next/font/google'
import { AlertTriangle, Clock, DollarSign } from 'lucide-react'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const wasteItems = [
  { label: 'API Server × 4 (over-provisioned)', cost: '$840/mo', pct: '+62%' },
  { label: 'RDS db.m5.large (30% avg utilisation)', cost: '$320/mo', pct: '+44%' },
  { label: 'Orphaned Lambda execution budget', cost: '$180/mo', pct: '+21%' },
  { label: 'Unused cross-region S3 transfer', cost: '$64/mo', pct: '+8%' },
]

const painPoints = [
  { icon: Clock, label: '3–4 week planning delays', sub: 'before a single server starts' },
  { icon: DollarSign, label: '$38K+ avg overprovisioning cost', sub: 'per initial deployment cycle' },
  { icon: AlertTriangle, label: 'Security gaps found post-deploy', sub: 'when fixes are slowest and costliest' },
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden border-t border-border">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_60%,rgba(59,130,246,0.05),transparent_55%)]" />

      <div className="relative z-10 px-6 md:px-10 py-16 md:py-24">
        {/* Section header */}
        <div className="max-w-xl mb-12 md:mb-16">
          <span className={`${openSans.className} inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-500 mb-4`}>
            <span className="w-4 h-px bg-blue-500/60" />
            The Problem
          </span>
          <h2 className={`${ubuntu.className} text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-balance mb-4`}>
            Most infrastructure plans take 3 weeks — and still go wrong.
          </h2>
          <p className={`${openSans.className} text-[15px] leading-relaxed text-muted-foreground`}>
            Teams shipping fast are forced to choose between moving quickly and planning safely. Without real workload analysis, both options are expensive.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — pain points */}
          <div className="space-y-4">
            {painPoints.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg border border-blue-500/20 bg-blue-500/8 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/12 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-blue-500" />
                  </div>
                  <div>
                    <p className={`${ubuntu.className} font-semibold text-[15px] mb-1`}>{p.label}</p>
                    <p className={`${openSans.className} text-sm text-muted-foreground`}>{p.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right — waste audit terminal */}
          <div className="rounded-xl overflow-hidden border border-border shadow-md" style={{ background: '#ffffff' }}>
            {/* Title bar */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: 'rgba(0,0,0,0.07)', background: '#f3f4f6' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="ml-1.5 text-[11px] font-mono" style={{ color: 'rgba(0,0,0,0.35)' }}>
                  infra-waste-audit.report
                </span>
              </div>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }}
              >
                Before Infra.ai
              </span>
            </div>

            {/* Body */}
            <div className="p-5 font-mono text-[12px]">
              <p className="mb-5" style={{ color: 'rgba(0,0,0,0.35)', letterSpacing: '0.08em', fontSize: '10px' }}>
                RESOURCE WASTE DETECTED — github.com/acme/payments-api
              </p>
              <div className="space-y-3.5">
                {wasteItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <span style={{ color: 'rgba(0,0,0,0.6)' }} className="truncate">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span style={{ color: '#f87171' }} className="font-bold">{item.cost}</span>
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171' }}
                      >
                        {item.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-4 flex items-center justify-between border-t"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span style={{ color: 'rgba(0,0,0,0.45)' }}>Total identified waste</span>
                <span className="font-bold text-[15px]" style={{ color: '#f87171' }}>
                  $1,404/mo
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 rounded-full flex-1" style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <div className="h-full w-[78%] rounded-full" style={{ background: 'linear-gradient(90deg, #ef4444, #f87171)' }} />
                </div>
                <span className="text-[10px] shrink-0" style={{ color: 'rgba(0,0,0,0.35)' }}>78% of budget</span>
              </div>

              <p className="mt-5 text-[11px]" style={{ color: 'rgba(0,0,0,0.35)' }}>
                → Infra.ai identified these before deployment. Total fix: 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
