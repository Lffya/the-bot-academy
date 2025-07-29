import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Marketing Minds.
            <span className="block text-blue-600">Not Just Tool Users.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            At Bot Academy, we train a new generation of marketers — thinkers who can understand a business, analyze its
            market, and build strategies that drive growth. Tools like Canva, Google Ads, and SEO are just the kit. We
            teach the strategy that makes them work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Curriculum
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent border-green-600 text-green-600 hover:bg-green-50"
            >
              <Users className="mr-2 h-5 w-5" />
              Hire Our Graduates
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
