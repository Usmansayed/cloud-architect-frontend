import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Lock, Eye, Shield } from 'lucide-react'

const trustPoints = [
  { icon: Lock, label: 'Read-only repo access', sub: 'No deploy permissions needed' },
  { icon: Eye, label: 'Full decision transparency', sub: 'Every rec explained before approval' },
  { icon: Shield, label: 'No auto-deploy, ever', sub: 'Team approves every action' },
]

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 border-t border-border relative overflow-hidden">
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.56 0.21 260 / 0.07), transparent)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 15% 80%, oklch(0.56 0.21 285 / 0.05), transparent)',
        }}
      />
      <div className="absolute inset-0 bg-subtle-grid opacity-50 pointer-events-none" />

      {/* Floating orbs */}
      <div
        className="absolute top-10 right-16 w-52 h-52 rounded-full blur-3xl opacity-25 animate-float pointer-events-none"
        style={{ background: 'oklch(0.56 0.21 260 / 0.3)' }}
      />
      <div
        className="absolute bottom-10 left-16 w-40 h-40 rounded-full blur-3xl opacity-20 animate-float pointer-events-none"
        style={{ background: 'oklch(0.56 0.21 290 / 0.25)', animationDelay: '2.2s' }}
      />

      <div className="max-w-3xl mx-auto text-center relative px-4">
        {/* Chip */}
        <span className="section-chip mb-8 inline-block">Get Started Free</span>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-black mb-5 leading-[1.05] tracking-tight text-balance">
          Ship infrastructure{' '}
          <span className="gradient-text-wide">with confidence.</span>
        </h2>

        {/* Sub */}
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Connect your repository. Get architecture, scaling, cost, and security recommendations
          — all explained before your team makes any decision.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button
            size="lg"
            className="relative overflow-hidden group gap-2 text-base px-8 h-12 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
            style={{ boxShadow: '0 8px 32px oklch(0.56 0.21 260 / 0.28)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Analyze my repo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base font-semibold border-border hover:bg-muted/40 hover:border-accent/30 transition-all duration-300"
          >
            See a sample report
          </Button>
        </div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.label}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: 'oklch(0.56 0.21 260 / 0.04)',
                  border: '1px solid oklch(0.56 0.21 260 / 0.12)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2.5"
                  style={{
                    background: 'oklch(0.56 0.21 260 / 0.1)',
                    border: '1px solid oklch(0.56 0.21 260 / 0.2)',
                  }}
                >
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div className="font-semibold text-sm mb-0.5">{point.label}</div>
                <div className="text-xs text-muted-foreground">{point.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-sm text-muted-foreground">
          {['Free to analyze', 'No credit card required', 'Works with any git repo'].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
