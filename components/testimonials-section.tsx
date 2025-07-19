import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Martinez",
      role: "Software Engineer",
      company: "Google",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The Bot Academy provided me with the perfect foundation for my tech career. The mentors were incredibly supportive and the curriculum was industry-relevant.",
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      company: "Adobe",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I went from having zero coding experience to landing a job at Adobe. The hands-on approach and real projects made all the difference.",
    },
    {
      name: "Robert Johnson",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The practical experience I gained here was invaluable. The instructors are industry experts who really care about student success.",
    },
    {
      name: "Maria Garcia",
      role: "Data Analyst",
      company: "Microsoft",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Best decision I ever made! The program structure, mentorship, and job placement support exceeded my expectations.",
    },
    {
      name: "Kevin Wong",
      role: "Product Manager",
      company: "Meta",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The Bot Academy taught me not just technical skills but also how to think like a problem solver. Highly recommended!",
    },
    {
      name: "Sophie Brown",
      role: "Frontend Developer",
      company: "Netflix",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The supportive community and excellent curriculum helped me transition from marketing to tech successfully.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Students Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our successful graduates have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
