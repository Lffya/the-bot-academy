import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Bot Academy</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Most marketing training today teaches tools. At Bot Academy, we focus on what truly matters — the ability to
            understand a product or service, spot market demand, and build a growth strategy that works.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">50+ Brands Scaled</h3>
                <p className="text-gray-600">Helped MSMEs scale from lakhs to crores in revenue across India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">19+ Years Experience</h3>
                <p className="text-gray-600">Deep expertise in branding, sales, and digital growth strategies</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Focus</h3>
                <p className="text-gray-600">
                  Training marketers who think like strategists and deliver results from day one
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="pt-0">
              <div className="text-center mb-6">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Evangelin Gladin"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900">Evangelin Gladin</h3>
                <p className="text-blue-600 font-medium">Founder, Bot Academy</p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                With over 19 years of experience in branding, sales, and digital growth, Im building Bot Academy to
                train marketers who can think like strategists and deliver results from day one.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
