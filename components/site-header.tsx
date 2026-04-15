import { Button } from '@/components/ui/button'
import { Github, ArrowRight } from 'lucide-react'

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'] })

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/long.svg" alt="strikeloop mark" className="w-8 h-8 object-contain" />
          <span className={`${spaceGrotesk.className} text-[20px] font-bold tracking-tight mb-0.5`}>
            strikeloop
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

          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex border-border text-foreground hover:bg-muted/40 hover:text-foreground cursor-pointer"
          >
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
    </header>
  )
}
