import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Wrench } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: Users,
      title: "Starter Track – Marketing Foundation",
      duration: "6 Weeks Core + 90 Days Internship",
      target: "Students, freshers, and aspiring marketers",
      description:
        "Designed for students, freshers, and aspiring marketers, this track focuses on building a solid marketing mindset:",
      features: [
        "Understand business needs and market demand",
        "Learn how to analyze products and audiences",
        "Build simple, effective marketing strategies",
        "Hands-on exposure through real client projects for 3 months after training",
      ],
      outcome: "Graduates can confidently handle entry-level strategy and campaign execution, with a focus on ROI.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Pro Track – Growth Marketer Program",
      duration: "3 Months Deep Learning + 90 Days Execution",
      target: "Freelancers, agency aspirants, and career marketers",
      description:
        "Ideal for freelancers, agency aspirants, and career marketers. This track goes beyond basics and focuses on scaling businesses:",
      features: [
        "Sales funnel creation and automation",
        "Paid ads (Meta, Google) and lead generation",
        "B2B outreach strategies (LinkedIn, email, WhatsApp)",
        "Campaign reporting and revenue-focused planning",
        "90 days of real client work to build your portfolio and income",
      ],
      outcome:
        "Graduates can independently plan, execute, and manage growth campaigns for businesses, and even start as consultants.",
      color: "green",
    },
    {
      icon: Wrench,
      title: "Execution Kit (Mandatory for All)",
      duration: "Integrated with both tracks",
      target: "All Bot Academy students",
      description: "The Execution Kit ensures every graduate can actually implement the strategies they create:",
      features: [
        "Tools Training: Canva, Meta Ads, Google Ads, SEO, LinkedIn Automation, WhatsApp Outreach",
        "Templates & SOPs: Campaign checklists, reporting formats, funnel blueprints",
        "Hands-On Practice: Execute at least 3 live campaigns during your learning phase",
      ],
      outcome: "Complete practical toolkit to implement any marketing strategy effectively.",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }
      case "green":
        return { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" }
      case "purple":
        return { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" }
      default:
        return { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }
    }
  }

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bot Academy Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right track for your career goals and experience level
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => {
            const colors = getColorClasses(program.color)
            return (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${colors.border}`}>
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <program.icon
                          className={`h-6 w-6 ${program.color === "blue" ? "text-blue-600" : program.color === "green" ? "text-green-600" : "text-purple-600"}`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{program.target}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`${colors.bg} ${colors.text}`}>
                      {program.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                    <p className="text-gray-600">{program.outcome}</p>
                  </div>

                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    Learn More About This Track
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
