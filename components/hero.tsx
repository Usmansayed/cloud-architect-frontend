import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Open_Sans, Ubuntu } from 'next/font/google'
import { ArrowRight, ShieldCheck, Clock3, GitBranch, DollarSign, Activity } from 'lucide-react'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export function Hero() {
  return (
    <section className="px-4 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_15%,rgba(59,130,246,0.08),transparent_42%)]" />
      <div className="relative z-10 border border-border bg-background p-6 md:p-10 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 lg:order-2 relative flex justify-center lg:justify-end -mt-2 md:-mt-3 lg:pr-4">
          <div className="absolute -top-8 right-2 w-40 h-40 rounded-full bg-accent/15 blur-2xl" />
          <div className="absolute -bottom-8 left-8 w-36 h-36 rounded-full bg-blue-300/30 blur-2xl" />

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero.svg"
                alt="Infra.ai visualization"
                width={560}
                height={560}
                className="w-full max-w-[285px] sm:max-w-[360px] lg:max-w-[408px] h-auto relative z-10 mix-blend-multiply"
                priority
              />
            </div>

            <div className="absolute -left-8 top-8 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card shadow-sm z-20">
              <DollarSign className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">Projected savings: -$620/mo</span>
            </div>
            <div className="absolute -right-12 bottom-36 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card shadow-sm z-20">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium">Load risk: medium</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-1">
          <Badge variant="outline" className="mb-5 px-3 py-1.5 text-xs sm:text-sm bg-card">
            For developers, CTOs, and startup teams shipping fast
          </Badge>

          <h1 className={`${ubuntu.className} text-2xl sm:text-3xl md:text-[36px] font-bold mb-5 leading-[1.08] text-balance tracking-tight`}>
            Choose the right infrastructure decisions before they become expensive mistakes.
          </h1>

          <p className={`${openSans.className} text-gray-800 sm:text-md md:text-[17px] font-normal mb-7 text-balance`}>
            Infra.ai integrates with your codebase and cloud context to evaluate architecture, scaling, cost, and security options—then explains tradeoffs so your team can approve with confidence.
          </p>

          <div className="mb-7 text-sm font-sans font-medium text-[#444]">
            <span>Read-only access • No auto-deploy • Team approval required</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm">
              Analyze my repo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              See decision report
            </Button>
          </div>
        </div>

        <Card className="hidden rounded-2xl border-border shadow-[0_8px_30px_rgba(37,99,235,0.10)] bg-card overflow-hidden">
          <CardHeader className="pb-3 border-b border-border bg-primary/5">
            <CardTitle className="text-sm font-medium">Infrastructure Decision Report</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-5 space-y-4">
            <div className="rounded-xl border border-border bg-background p-2">
              <Image
                src="/hero.svg"
                alt="Infra.ai decision intelligence visualization"
                width={640}
                height={360}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            <div className="p-4 rounded-xl border border-border bg-background">
              <p className="text-xs text-muted-foreground mb-2">Repository</p>
              <p className="font-medium flex items-center gap-2"><GitBranch className="w-4 h-4 text-accent" />github.com/acme/payments-api</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-border bg-background">
                <p className="text-xs text-muted-foreground mb-1">Projected Monthly Cost</p>
                <p className="text-xl font-semibold">$3,420</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background">
                <p className="text-xs text-muted-foreground mb-1">Potential Savings</p>
                <p className="text-xl font-semibold text-accent">-$620/mo</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-background space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 mt-1 text-accent" />
                <p className="text-sm">Move background jobs to isolated workers to reduce API latency under peak load.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="w-4 h-4 mt-1 text-accent" />
                <p className="text-sm">Action status: <span className="font-medium">Pending team approval</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
