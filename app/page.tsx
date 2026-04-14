import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Problem } from '@/components/problem'
import { HowItWorks } from '@/components/how-it-works'
import { Outputs } from '@/components/outputs'
import { Waitlist } from '@/components/waitlist'

export const metadata = {
  title: 'Infra.ai — Infrastructure Planning From Your Codebase',
  description:
    'Analyze your repository, get explainable Terraform and architecture recommendations, and approve every action before execution.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1200px] mx-auto border-x border-border">
        <SiteHeader />
        <Hero />
        <Problem />
        <HowItWorks />
        <Outputs />
        <Waitlist />
      </div>
    </main>
  )
}
