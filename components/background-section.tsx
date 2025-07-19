import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function BackgroundSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't have an IT Background?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No problem! We welcome students from all backgrounds. Our programs are designed to take you from beginner to
            professional, regardless of your starting point.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-900">Get Started Today</CardTitle>
              <p className="text-center text-gray-600">
                Fill out this form and we'll help you choose the right program for your goals
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="background">Current Background</Label>
                <Textarea id="background" placeholder="Tell us about your current education/work background" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <Textarea id="interest" placeholder="Which program or technology interests you most?" rows={3} />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">Submit Application</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
