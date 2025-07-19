import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Smartphone, Globe, Brain, Shield } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master both frontend and backend technologies including React, Node.js, and databases.",
      duration: "6 months",
      level: "Beginner to Advanced",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization to become a data expert.",
      duration: "5 months",
      level: "Intermediate",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native and Flutter.",
      duration: "4 months",
      level: "Beginner to Intermediate",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Master SEO, social media marketing, and digital advertising strategies.",
      duration: "3 months",
      level: "Beginner",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence and machine learning algorithms.",
      duration: "6 months",
      level: "Advanced",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and cybersecurity best practices.",
      duration: "5 months",
      level: "Intermediate to Advanced",
    },
  ]

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internship Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of internship programs designed to give you real-world experience and
            industry-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{program.level}</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
