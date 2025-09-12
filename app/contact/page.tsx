import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-amber-50">
                    <MapPin className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adress</h3>
                    <p className="text-gray-900">
                      ENCGT, Airport Road, P.O. 1255<br />
                      Tangier, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-amber-50">
                    <Mail className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: asemencgt10@gmail.com<br />
                      Media: Cellule Communication, Media and IT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-amber-50">
                    <Phone className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: +212 601-600980<br />
                      Emergency: +212 770-353602<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-amber-50">
                    <MessageCircle className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-600">
                      Available 24/7 for urgent inquiries<br />
                      Response time: Usually within 1 hour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="urgency">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Response within 3-5 business days</SelectItem>
                        <SelectItem value="normal">Normal - Response within 1-2 business days</SelectItem>
                        <SelectItem value="high">High - Response within 24 hours</SelectItem>
                        <SelectItem value="urgent">Urgent - Response within 4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section - Enhanced */}
      <section className="py-20 bg-amber-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-amber-900">Visit Us in Tangier</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Find us at ENCG Tangier, the heart of our humanitarian mission in Morocco
      </p>
    </div>

    <div className="max-w-6xl mx-auto flex justify-center">
      {/* Map */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full lg:w-3/4">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.1628514745375!2d-5.8452326!3d35.7572628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b876e0a0c00a1%3A0xe5789557100b0272!2sENCG%20%3A%20Ecole%20Nationale%20de%20Commerce%20et%20de%20Gestion_Tanger!5e1!3m2!1sfr!2sma!4v1757462055937!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
