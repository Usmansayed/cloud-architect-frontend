import { Space_Grotesk } from 'next/font/google'
import { Mail, MapPin } from 'lucide-react'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600', '700'] })

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border" style={{ background: 'rgba(59,130,246,0.012)' }}>
      <div className="max-w-[1200px] mx-auto sm:border-x border-border px-4 sm:px-6 md:px-10">

        {/* Main content */}
        <div className="py-10 flex flex-col md:flex-row md:items-start justify-between gap-8">

          {/* Brand + tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <img src="/long.svg" alt="strikeloop mark" className="w-8 h-8 object-contain" />
              <span className={`${spaceGrotesk.className} text-[20px] font-bold tracking-tight mb-0.5`}>
                strikeloop
              </span>
            </div>
            <p className="text-[13px] font-sans font-medium text-muted-foreground leading-relaxed">
              Because the right infrastructure decision shouldn't be a guess.
            </p>
          </div>

          {/* Contact block */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-muted-foreground/60 mb-1">
              Contact
            </p>
            <a
              href="mailto:team@strikeloop.com"
              className="flex items-center gap-2.5 text-[13px] font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 group"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.15)' }}
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
              </div>
              team@strikeloop.com
            </a>
            <div className="flex items-center gap-2.5 text-[13px] font-sans font-medium text-muted-foreground">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.15)' }}
              >
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
              </div>
              Bengaluru, India
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-4 flex items-center justify-between gap-4">
          <p className="text-[12px] font-sans font-medium text-muted-foreground/50">
            © {year} strikeloop. All rights reserved.
          </p>
          <div
            className="text-[10px] font-sans font-medium px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(59,130,246,0.07)', color: 'oklch(0.50 0.20 260)', border: '1px solid rgba(59,130,246,0.15)' }}
          >
            Private Beta
          </div>
        </div>

      </div>
    </footer>
  )
}
