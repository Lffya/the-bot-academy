import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SuccessStoriesSection() {
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=100&width=100",
      program: "Full Stack Development",
      salary: "$75,000",
      story: "Landed my dream job within 2 weeks of completing the program",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "DataFlow Solutions",
      image: "/placeholder.svg?height=100&width=100",
      program: "Data Science & Analytics",
      salary: "$80,000",
      story: "The hands-on projects prepared me perfectly for real-world challenges",
    },
    {
      name: "Emily Rodriguez",
      role: "Mobile App Developer",
      company: "AppVenture",
      image: "/placeholder.svg?height=100&width=100",
      program: "Mobile App Development",
      salary: "$70,000",
      story: "Built 3 apps during internship, got hired by one of the client companies",
    },
    {
      name: "David Kim",
      role: "Digital Marketing Manager",
      company: "GrowthHack Agency",
      image: "/placeholder.svg?height=100&width=100",
      program: "Digital Marketing",
      salary: "$65,000",
      story: "Increased client ROI by 300% during my internship project",
    },
    {
      name: "Lisa Thompson",
      role: "AI Engineer",
      company: "FutureTech Labs",
      image: "/placeholder.svg?height=100&width=100",
      program: "AI & Machine Learning",
      salary: "$90,000",
      story: "Working on cutting-edge AI solutions that impact millions of users",
    },
    {
      name: "James Wilson",
      role: "Cybersecurity Analyst",
      company: "SecureNet Systems",
      image: "/placeholder.svg?height=100&width=100",
      program: "Cybersecurity",
      salary: "$78,000",
      story: "Prevented major security breaches during my internship",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be one of these people who have built their career with us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful professionals who transformed their careers through our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{story.company}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {story.program}
                  </Badge>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Starting Salary:</span>
                    <span className="font-semibold text-green-600">{story.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm italic">&quot;{story.story}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
