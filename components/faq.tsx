'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate are Infra.ai recommendations?',
    answer:
      'Recommendations come from deep analysis of your routes, database queries, background jobs, and dependency graph — combined with load assumptions from your code. Every output includes detailed reasoning so your team can validate before approval.',
  },
  {
    question: 'Can Infra.ai deploy changes automatically?',
    answer:
      'Not by default. Infra.ai is approval-gated by design. Every recommended action stays pending until your team explicitly approves it. Nothing happens automatically — ever.',
  },
  {
    question: 'What GitHub access is required?',
    answer:
      'Only read-only repository access for code analysis. Infra.ai does not need deployment permissions, cloud credentials, or write access to generate infrastructure plans.',
  },
  {
    question: 'Does it support multi-cloud environments?',
    answer:
      "Yes. All outputs are Terraform-based and built for portability. Provider-specific recommendations (AWS, GCP, Azure) are clearly labeled so your team always knows what they're approving.",
  },
  {
    question: 'What if we disagree with the recommended plan?',
    answer:
      'Modify, reject, or replace any recommendation. Infra.ai is decision support — it surfaces options with tradeoffs explained. Your team makes the final calls, always.',
  },
  {
    question: 'Can we use just planning without the monitoring?',
    answer:
      'Yes. Teams can start with repository analysis and initial planning, then enable continuous monitoring when ready. The two modules are fully independent.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 border-t border-border">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-chip mb-5 inline-block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
            Questions from{' '}
            <span className="gradient-text">real engineering teams</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From teams evaluating Infra.ai for production use.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              style={{
                background: open === i ? 'oklch(0.56 0.21 260 / 0.04)' : 'white',
                border:
                  open === i
                    ? '1px solid oklch(0.56 0.21 260 / 0.22)'
                    : '1px solid var(--border)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-black tabular-nums w-5 shrink-0"
                    style={{
                      color:
                        open === i ? 'oklch(0.45 0.20 260)' : 'oklch(0.80 0.02 255)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-semibold text-base leading-snug transition-colors duration-200"
                    style={{
                      color: open === i ? 'oklch(0.45 0.20 260)' : 'var(--foreground)',
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300"
                  style={{
                    background:
                      open === i
                        ? 'oklch(0.56 0.21 260 / 0.1)'
                        : 'oklch(0.96 0.008 250)',
                    border:
                      open === i
                        ? '1px solid oklch(0.56 0.21 260 / 0.25)'
                        : '1px solid var(--border)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <Plus
                    className="w-3.5 h-3.5"
                    style={{
                      color: open === i ? 'oklch(0.45 0.20 260)' : 'var(--muted-foreground)',
                    }}
                  />
                </div>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <div className="pl-9">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
