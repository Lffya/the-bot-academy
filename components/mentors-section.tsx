import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

export function MentorsSection() {
  const mentors = [
    {
      name: "Dr. John Smith",
      role: "Senior Full Stack Architect",
      company: "Ex-Google, Microsoft",
      image: "/placeholder.svg?height=120&width=120",
      experience: "15+ years",
      specialization: "Full Stack Development",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Williams",
      role: "Data Science Director",
      company: "Ex-Amazon, Meta",
      image: "/placeholder.svg?height=120&width=120",
      experience: "12+ years",
      specialization: "Data Science & AI",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Brown",
      role: "Mobile Development Lead",
      company: "Ex-Apple, Uber",
      image: "/placeholder.svg?height=120&width=120",
      experience: "10+ years",
      specialization: "Mobile Development",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Davis",
      role: "Digital Marketing VP",
      company: "Ex-Netflix, Spotify",
      image: "/placeholder.svg?height=120&width=120",
      experience: "8+ years",
      specialization: "Digital Marketing",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Wilson",
      role: "AI Research Scientist",
      company: "Ex-OpenAI, Tesla",
      image: "/placeholder.svg?height=120&width=120",
      experience: "14+ years",
      specialization: "AI & Machine Learning",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Lisa Chen",
      role: "Cybersecurity Expert",
      company: "Ex-IBM, Cisco",
      image: "/placeholder.svg?height=120&width=120",
      experience: "11+ years",
      specialization: "Cybersecurity",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <section id="mentors" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Mentors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry veterans who have worked at top tech companies and are passionate about sharing their
            knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{mentor.role}</p>
                <p className="text-gray-600 text-sm mb-3">{mentor.company}</p>

                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {mentor.specialization}
                  </Badge>
                  <div className="text-sm text-gray-500">{mentor.experience} Experience</div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={mentor.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={mentor.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
