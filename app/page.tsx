import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Award, ArrowRight, MapPin, Mail, Phone, Target, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Sunset Photo */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/asem-sunset-coast.jpg" alt="ASEM Team at Sunset" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-25">
            <Image src="/images/asem-logo.png" alt="ASEM Logo" width={130} height={130} className="mx-auto mb-6" />
          </div>
          <Badge className="mb-6 bg-amber-600/80 text-white border-amber-500/50 hover:bg-amber-600">
            15 Years of Impact
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans text-white drop-shadow-lg">ASEM</h1>
          <p className="text-xl md:text-2xl mb-4 text-white drop-shadow-md font-sans">ASEM, La joie qu'on sème ✨</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700">
              Join Our Mission
              <ArrowRight className="h-5 w-5 ml-0" />
            </Button>
            <Button size="lg" variant="outline" className="text-white hover:bg-white/10 bg-amber-600 border-amber-600">
              {"Shop"}
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section with Celebration Photo */}
      <section className="py-20 bg-white shadow-none">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6 text-amber-900 font-sans">Our Vibrant Community</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans">
          ASEM brings together passionate young people who believe in the power of collective action. Our
          community is built on shared values of compassion, dedication, and the unwavering belief that we can
          make a difference in kids of this world.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans">
          From organizing local activities for kids in need to regional humanitarian projects, our members are the
          heart of everything we do. Together, we celebrate our achievements and support each other in creating
          positive change.
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700">Meet Our Community</Button>
      </div>

      {/* Two-Photo Stacked Layout */}
      <div className="flex flex-col items-center relative ml-4 md:ml-8 lg:ml-12">
        {/* Top photo (moved to the opposite side, smaller size) */}
        <div className="relative w-full max-w-sm ml-20 md:ml-28 lg:ml-36 mb-6">
          <Image
            src="/images/asem our community drari.JPG"
            alt="ASEM kids community photo"
            width={500}
            height={320}
            className="rounded-lg shadow-xl"
          />
        </div>
        {/* Bottom photo (slightly right, smaller size) */}
        <div className="relative w-full max-w-sm -ml-12 md:-ml-16 lg:-ml-20">
          <Image
            src="/images/asem-celebration.jpg"
            alt="ASEM Community Celebration photo"
            width={500}
            height={320}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Full Video Section */}
<section className="w-full h-screen bg-black">
  <video
    className="w-full h-full object-cover"
    controls
  >
    <source src="/videos/doc VH web.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

      {/* Mission, Vision, Goals with Team Photo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-20 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <Image
                src="/images/leadership-poster.jpg"
                alt="ASEM Leadership Team 2024-2025"
                width={510}
                height={340}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-900 font-sans">Our Leadership</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans">
                Led by dedicated students of ENCG Tangier, ASEM's leadership team brings together diverse perspectives
                and expertise to guide our humanitarian mission. Our leaders are committed to transparency, innovation,
                and creating meaningful impact.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans">
                Each member embodies our values and has contributed significantly to our growth and success over the
                years.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-900 font-sans">Our Activities</h2>
            <p className="text-xl text-gray-700 font-sans">Discover our impactful projects and initiatives</p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-900">
                    <Image src="/images/laylat-lkhayr-logo.png" alt="Laylat Lkhayr" width={48} height={48} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-amber-900 font-sans">Laylat Lkhayr</h3>
                  <p className="text-sm text-gray-700 font-sans">Traditional charity night bringing joy to children on the 27th night of Ramadan.</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                    <Image src="/images/voyage-humanitaire-logo.jpg" alt="Bayt Assilah" width={40} height={40} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-amber-900 font-sans">Voyage Humanitaire</h3>
                  <p className="text-sm text-gray-700 font-sans">Humanitarian trips to remote communities</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-900">
                    <Image src="/images/bayt-assilah-logo.png" alt="Bayt Assilah" width={55} height={55} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-amber-900 font-sans">Bayt Assilah</h3>
                  <p className="text-sm text-gray-700 font-sans">Supporting children with special needs in Assilah</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                    <Image src="/images/tfe-logo.png" alt="Bayt Assilah" width={37} height={37} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-amber-900 font-sans">Tournoi de Foot</h3>
                  <p className="text-sm text-gray-700 font-sans">
                    Football tournament building teamwork among children
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-900">Get In Touch</h2>
            <p className="text-xl text-gray-700">Ready to make a difference? Contact us today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-50">
                    <Mail className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">asemencgt10@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-50">
                    <Phone className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-700">+212 770-353602 - Marouane Elaouli</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-50">
                    <MapPin className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">
                      ENCG Tangier, Airport Road, P.O. Box 1255,
                      <br />
                      Tangier 90000, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-amber-900">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Visual Experience */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/asem-sunset-coast.jpg" alt="ASEM Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-600/80"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the ASEM Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Be part of something bigger. Together, we can create lasting change and build a better world for future
            generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                Become a Member
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10 text-amber-600 bg-transparent"
              >
                Visit Our Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
