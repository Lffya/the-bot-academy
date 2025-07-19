import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/pages/home/components/hero-section"
import { AboutSection } from "@/pages/home/components/about-section"
import { WhyBotAcademySection } from "@/pages/home/components/why-bot-academy-section"
import { ProgramsSection } from "@/pages/home/components/programs-section"
import { WhoShouldJoinSection } from "@/pages/home/components/who-should-join-section"
import { JoinMovementSection } from "@/pages/home/components/join-movement-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyBotAcademySection />
      <ProgramsSection />
      <WhoShouldJoinSection />
      <JoinMovementSection />
      <Footer />
    </div>
  )
}
