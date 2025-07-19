import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Briefcase } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Get industry-recognized certifications that boost your career prospects",
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Hands-on projects and real-world scenarios to build your skills",
    },
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "100% placement assistance with our network of partner companies",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
