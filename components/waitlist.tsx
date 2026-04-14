'use client'

import { useState } from 'react'
import { Ubuntu, Open_Sans } from 'next/font/google'
import { ArrowRight, Check } from 'lucide-react'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const benefits = [
  'Early access before public launch',
  'Direct input on features & roadmap',
]


export function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-t border-border"
    >
      {/* Gradient wash — cool blue-lavender, like the reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.10) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
        }}
      />
      {/* Subtle bottom fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 px-6 md:px-10 py-20 md:py-28 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <span
          className={`${openSans.className} inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500 mb-6`}
        >
          <span className="text-blue-400">✦</span>
          Infra.ai Private Beta
          <span className="text-blue-400">✦</span>
        </span>

        {/* Large headline — sits above the card like wayt.com */}
        <h2
          className={`${ubuntu.className} text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-balance mb-4 max-w-2xl`}
        >
          Ship infrastructure that{' '}
          <span className="text-blue-500">actually fits.</span>
        </h2>

        <p
          className={`${openSans.className} text-[15px] leading-relaxed text-muted-foreground max-w-md mb-10`}
        >
          Don't guess. Simulate, verify, and approve — before a single resource is touched.
        </p>

        {/* Floating white card — email form + social proof */}
        <div
          className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-lg shadow-blue-500/5 overflow-hidden"
        >
          <div className="px-7 pt-7 pb-2">
            <p className={`${ubuntu.className} text-[17px] font-bold mb-1`}>
              Join the waitlist
            </p>
            <p className={`${openSans.className} text-[13px] text-muted-foreground mb-5`}>
              Get early access, shape the roadmap, and lock in founding-team pricing.
            </p>

            {submitted ? (
              /* Success state */
              <div className="flex items-center gap-3 py-3 px-4 rounded-xl mb-5"
                style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(16,185,129,0.12)' }}>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className={`${ubuntu.className} text-[13px] font-bold text-emerald-700`}>You&apos;re on the list!</p>
                  <p className={`${openSans.className} text-[12px] text-muted-foreground`}>
                    We&apos;ll reach out to <strong className="text-foreground">{email}</strong> soon.
                  </p>
                </div>
              </div>
            ) : (
              /* Inline form — email left, button right (like wayt.com) */
              <form
                onSubmit={handleSubmit}
                className="flex gap-2 mb-5 p-1.5 rounded-xl border border-border bg-background"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={`${openSans.className} flex-1 bg-transparent px-3 text-[14px] outline-none text-foreground placeholder:text-muted-foreground/60`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`${openSans.className} h-9 px-4 rounded-lg text-[13px] font-semibold text-white flex items-center gap-1.5 shrink-0 transition-opacity disabled:opacity-70`}
                  style={{
                    background: 'oklch(0.45 0.22 260)',
                    boxShadow: '0 2px 8px rgba(59,130,246,0.3)',
                  }}
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Join waitlist
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}


          </div>

          {/* Card footer — benefits */}
          <div className="px-7 py-4 border-t border-border bg-muted/20 flex flex-col gap-1.5">
            {benefits.map((b) => (
              <div key={b} className={`${openSans.className} flex items-center gap-2 text-[12px] text-muted-foreground`}>
                <Check className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* No-spam note */}
        <p className={`${openSans.className} text-[11px] text-muted-foreground/40 mt-5`}>
          No spam. No marketing blasts. Just your spot when it&apos;s ready.
        </p>

      </div>
    </section>
  )
}
