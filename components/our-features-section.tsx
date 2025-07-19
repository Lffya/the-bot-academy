import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Trophy, HeadphonesIcon, Laptop, Star } from "lucide-react"

export function OurFeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Choose from morning, evening, or weekend batches that fit your schedule",
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Limited students per batch ensuring personalized attention and better learning",
    },
    {
      icon: Trophy,
      title: "Industry Projects",
      description: "Work on real-world projects from our industry partners during your internship",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and mentorship whenever you need help",
    },
    {
      icon: Laptop,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs with latest technology and high-speed internet",
    },
    {
      icon: Star,
      title: "Career Guidance",
      description: "Resume building, interview preparation, and career counseling services",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes The Bot Academy the preferred choice for aspiring professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-100"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
