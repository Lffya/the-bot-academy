import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/pages/home/hero-section"
import { AboutSection } from "@/pages/home/about-section"
import { WhyBotAcademySection } from "@/pages/home/why-bot-academy-section"
import { ProgramsSection } from "@/pages/home/programs-section"
import { WhoShouldJoinSection } from "@/pages/home/who-should-join-section"
import { JoinMovementSection } from "@/pages/home/join-movement-section"
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
