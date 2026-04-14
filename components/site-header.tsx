import { Button } from '@/components/ui/button'
import { Github, ArrowRight } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-sm font-bold shadow-sm"
            style={{ background: 'linear-gradient(135deg, oklch(0.56 0.21 260), oklch(0.56 0.22 285))' }}
          >
            ⚡
          </div>
          <span className="text-[17px] font-bold tracking-tight">
            Infra<span className="gradient-text">.ai</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {[
            { href: '#problem', label: 'Problem' },
            { href: '#how-it-works', label: 'How it works' },
            { href: '#outputs', label: 'Outputs' },
            { href: '#waitlist', label: 'Join waitlist' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group py-1 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-px left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border border-border bg-card text-muted-foreground">
            <Github className="w-3.5 h-3.5" />
            <span className="font-semibold">17K</span>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex border-border hover:bg-muted/40">
            <a href="#waitlist">See report</a>
          </Button>
          <Button
            size="sm"
            className="relative overflow-hidden group gap-1.5 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            asChild
          >
            <a href="#waitlist">
              <span className="relative z-10 flex items-center gap-1.5">
                Join waitlist
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </div>
      </div>

      {/* Status bar */}
      <div className="px-6 h-9 flex items-center border-t border-border/60" style={{ background: 'oklch(0.56 0.21 260 / 0.03)' }}>
        <div className="flex items-center gap-2 text-xs">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
              style={{ animation: 'ping-soft 2s cubic-bezier(0,0,0.2,1) infinite' }}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">Research</span>
          <span className="text-foreground/70 font-medium">#1 infra decisions benchmarked on latency, quality, and cost</span>
        </div>
      </div>
    </header>
  )
}
