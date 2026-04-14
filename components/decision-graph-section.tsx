export function DecisionGraphSection() {
  const nodes = [
    {
      label: 'Your Codebase',
      sub: 'Routes, queries, jobs, deps',
      featured: false,
    },
    {
      label: 'AI Intelligence',
      sub: 'Cross-cloud expert reasoning',
      featured: true,
    },
    {
      label: 'Simulation Engine',
      sub: 'Load, cost & security tests',
      featured: true,
    },
    {
      label: 'Optimized Infra',
      sub: 'Best cost/reliability design',
      featured: false,
    },
  ]

  return (
    <section className="py-16 px-4 border-y border-border" style={{ background: 'oklch(0.56 0.21 260 / 0.025)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-chip mb-5 inline-block">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            One simple workflow,{' '}
            <span className="gradient-text">end to end</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We understand your system, simulate it under real conditions, and build the optimal infrastructure around it.
          </p>
        </div>

        {/* Flow diagram card */}
        <div className="relative rounded-3xl border border-border bg-card px-8 py-14 overflow-hidden shadow-sm">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%, oklch(0.56 0.21 260 / 0.06), transparent 60%)' }}
          />

          {/* SVG connector lines + animated dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="conn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.56 0.21 260 / 0.3)" />
                <stop offset="100%" stopColor="oklch(0.56 0.21 280 / 0.4)" />
              </linearGradient>
            </defs>
            <path d="M214 140 C270 140 292 140 348 140" stroke="url(#conn-grad)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
            <path d="M512 140 C568 140 590 140 646 140" stroke="url(#conn-grad)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
            <path d="M810 140 C866 140 888 140 944 140" stroke="url(#conn-grad)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />

            <circle r="4.5" fill="oklch(0.56 0.21 260)">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M214 140 C270 140 292 140 348 140" />
            </circle>
            <circle r="4.5" fill="oklch(0.56 0.21 270)">
              <animateMotion dur="3.5s" begin="1.15s" repeatCount="indefinite" path="M512 140 C568 140 590 140 646 140" />
            </circle>
            <circle r="4.5" fill="oklch(0.56 0.21 280)">
              <animateMotion dur="3.5s" begin="2.3s" repeatCount="indefinite" path="M810 140 C866 140 888 140 944 140" />
            </circle>
          </svg>

          {/* Nodes */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-center">
            {nodes.map((node, i) => (
              <div
                key={i}
                className="rounded-2xl px-5 py-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                style={{
                  background: node.featured
                    ? 'linear-gradient(135deg, oklch(0.56 0.21 260 / 0.08), oklch(0.56 0.21 285 / 0.05))'
                    : 'white',
                  border: node.featured
                    ? '1px solid oklch(0.56 0.21 260 / 0.28)'
                    : '1px solid var(--border)',
                  boxShadow: node.featured
                    ? '0 4px 24px oklch(0.56 0.21 260 / 0.12)'
                    : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {node.featured && (
                  <div className="accent-badge mb-2.5">✦ AI-powered</div>
                )}
                <p
                  className="text-base font-bold mb-1"
                  style={{ color: node.featured ? 'oklch(0.45 0.20 260)' : 'var(--foreground)' }}
                >
                  {node.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{node.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
