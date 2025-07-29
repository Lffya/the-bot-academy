import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/pages/home/about-section"
import { WhyBotAcademySection } from "@/components/home/why-bot-academy-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { WhoShouldJoinSection } from "@/components/home/who-should-join-section"
import { JoinMovementSection } from "@/components/home/join-movement-section"
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
