import { Star, Quote } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Repos analyzed', sub: 'in private beta' },
  { value: '$2.4M', label: 'Projected savings', sub: 'identified for teams' },
  { value: '91%', label: 'Approval rate', sub: 'without rework' },
]

const testimonials = [
  {
    quote:
      'strikeloop surfaced two critical scaling bottlenecks in our API and job queue before launch. We fixed them in review  not in production at 2am.',
    author: 'Priya Nair',
    role: 'CTO',
    company: 'B2B SaaS · Series A',
    initials: 'PN',
    color: '#3b82f6',
  },
  {
    quote:
      'The cost forecast was specific enough to shape our cloud budget. We avoided $40K in overprovisioning while still meeting our latency SLAs.',
    author: 'Daniel Kim',
    role: 'Lead Engineer',
    company: 'Developer Tools · Growth Stage',
    initials: 'DK',
    color: '#10b981',
  },
  {
    quote:
      'Every recommendation came with clear reasoning and business impact. That approval workflow changed how quickly we got internal sign-off.',
    author: 'Marta Silva',
    role: 'DevOps Manager',
    company: 'Fintech · Enterprise',
    initials: 'MS',
    color: '#6366f1',
  },
]

export function SocialProof() {
  return (
    <section
      className="py-20 border-t border-b border-border"
      style={{ background: 'oklch(0.56 0.21 260 / 0.025)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-chip mb-5 inline-block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
            Teams shipping faster{' '}
            <span className="gradient-text">with fewer surprises</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built directly from feedback from engineering teams who can't afford production fire drills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="premium-card p-6 text-center"
            >
              <div className="text-4xl font-black mb-1 gradient-text">{stat.value}</div>
              <div className="font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="premium-card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                className="w-5 h-5 mb-3"
                style={{ color: `${t.color}40` }}
              />

              {/* Text */}
              <p className="text-sm leading-relaxed text-foreground/75 flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                  style={{
                    background: `${t.color}12`,
                    border: `1px solid ${t.color}28`,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
