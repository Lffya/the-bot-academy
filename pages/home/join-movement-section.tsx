import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Users, ArrowRight, Download } from "lucide-react"

export function JoinMovementSection() {
  const goals = [
    {
      icon: Users,
      number: "100",
      label: "Jobs in Rural India",
      description: "Creating employment opportunities in rural areas",
    },
    {
      icon: TrendingUp,
      number: "100",
      label: "Businesses Cross ₹1 Crore",
      description: "Helping businesses achieve significant revenue milestones",
    },
    {
      icon: Target,
      number: "New Breed",
      label: "of Strategic Marketers",
      description: "Building marketers who grow brands with clarity and strategy",
    },
  ]

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Movement</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Bot Academy isnt just a school — its a mission. Our goal is to create meaningful impact in rural India
            while building the next generation of strategic marketers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {goals.map((goal, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{goal.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{goal.label}</div>
                <p className="text-blue-100 text-sm">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-white mb-8">If you want to be part of this revolution, start here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Curriculum
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
