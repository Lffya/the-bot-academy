import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, TrendingUp, Lightbulb, Globe } from "lucide-react"

export function WhyBotAcademySection() {
  const reasons = [
    {
      icon: Brain,
      title: "Marketing First, Tools Next",
      description: "We teach business sense before software. Understanding strategy comes before learning tools.",
    },
    {
      icon: Users,
      title: "Real Clients. Real Campaigns",
      description: "You'll work on live projects, not just theory. Get hands-on experience with actual businesses.",
    },
    {
      icon: TrendingUp,
      title: "Revenue-Focused Learning",
      description: "Learn to generate leads and sales, not just likes and followers. Focus on what truly matters.",
    },
    {
      icon: Lightbulb,
      title: "Mentorship-Driven",
      description: "Learn directly from entrepreneurs who have scaled businesses to 7–8 figures.",
    },
    {
      icon: Globe,
      title: "Rural Roots, Global Impact",
      description: "Join the movement to build world-class marketing talent from Tirunelveli and beyond.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Bot Academy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're different from traditional marketing courses. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-100">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <Card key={index + 3} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-100">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
