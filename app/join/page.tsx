import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function JoinPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Join the Fam Photo */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="images/join-the-fam.jpg" alt="Join the ASEM Family" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join ASEM</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Make the right decision and join the fam! Become part of our global community of young changemakers.
          </p>
        </div>
      </section>

      {/* Join the Fam Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
                MAKE THE RIGHT DECISION
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-700">
                AND JOIN THE FAM!
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                This is your moment. Step into a community that believes in making a difference. ASEM isn't just a
                club - we're a family united by purpose, passion, and the drive to create positive change in the
                world.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="images/join-the-fam.jpg"
                alt="Make the Right Decision and Join the Fam"
                width={480}
                height={320}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}

      {/* Application Form */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-amber-900">New Member Application</CardTitle>
                <p className="text-center text-gray-600">
                  Fill out the form below to start your beautiful journey with ASEM
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studyYear">Study year *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select study year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st-year">1st year</SelectItem>
                          <SelectItem value="2nd-year">2nd year</SelectItem>
                          <SelectItem value="3rd-year">3rd year</SelectItem>
                          <SelectItem value="3rd-year">4th year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Volunteer Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any previous volunteer or humanitarian experience..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to join ASEM? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share your motivation for joining our mission..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        I want to receive ASEM newsletters and updates
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
