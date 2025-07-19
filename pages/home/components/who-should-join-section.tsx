import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, CreativeCommonsIcon as Freelance, Building, Users } from "lucide-react"

export function WhoShouldJoinSection() {
  const targetAudience = [
    {
      icon: GraduationCap,
      title: "Students and Graduates",
      description: "Wanting a career in marketing with real-world skills and strategic thinking",
    },
    {
      icon: Freelance,
      title: "Freelancers",
      description: "Wanting to offer high-value services and command premium rates in the market",
    },
    {
      icon: Building,
      title: "Business Owners",
      description: "Who want clarity and in-house marketing skills to grow their own businesses",
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Wanting to train their teams to think like strategists and deliver better results",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Should Join?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bot Academy is designed for ambitious individuals who want to build a career in strategic marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-100">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
