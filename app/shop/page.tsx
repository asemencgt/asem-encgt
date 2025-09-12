import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Instagram, Heart } from "lucide-react"
import Image from "next/image"

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="images/shop-hero-group.jpg"
            alt="ASEM EL FENOMENO Collection"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-amber-600 text-white border-amber-500 text-sm px-4 py-2 font-medium mb-8">
              EL FENOMENO × ASEM
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
              OUR DROP
              <span className="block text-white">IDENTITY</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 font-bold text-lg px-8 py-4">
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 bg-transparent"
              >
                OUR STORY
              </Button>
            </div>

            <div className="flex items-center justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">YEARS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">LIVES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">PURPOSE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">DRESSED TO SERVE</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8">INSPIRED TO GIVE</h3>
          <p className="text-xl max-w-3xl mx-auto text-amber-100">
            More than merchandise - it's a movement. Every piece represents our commitment to humanitarian action and
            youth empowerment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Row 1 - Hoodie Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="images/shop-zaki-hoodie.jpg"
                alt="EL FENOMENO Hoodie"
                width={600}
                height={800}
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold mb-2 text-white">EL FENOMENO HOODIE</h3>
                  <p className="text-gray-300 text-lg">Premium Quality • Limited Edition</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  SIGNATURE
                  <span className="block text-amber-600">COLLECTION</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Our iconic hoodis, zippers and shirts represent more than fashion - they're a statement of purpose. Each piece
                  is crafted with care and carries the spirit of ASEM's humanitarian mission.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-amber-600 text-white px-4 py-2">SINCE 2010</Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300 px-4 py-2">
                    LIMITED DROP
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Street Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl">
              <Image
                src="images/shop-street-display.jpg"
                alt="Street Style Collection"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold mb-2 text-white">STREET CULTURE</h3>
                  <p className="text-amber-600 text-lg">Authentic • Urban • Meaningful</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="images/shop-brazil-lifestyle.jpg"
                alt="Lifestyle Collection"
                width={400}
                height={600}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">LIFESTYLE</h3>
                  <p className="text-white">As iconic as a 2003 R9</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 - Artistic Shots */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <video
                width={600}
                height={600}
                controls
                className="w-full h-[600px] object-cover rounded-2xl"
              >
                <source src="videos/Nizar doc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="images/shop-moto-statement.jpg"
                alt="Statement Collection"
                width={600}
                height={600}
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold mb-2 text-white">STATEMENT</h3>
                  <p className="text-amber-600 text-lg">Bold • Fearless • Impactful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            MORE THAN
            <span className="block text-amber-600">MERCHANDISE</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Every piece in the EL FENOMENO collection represents our commitment to humanitarian action. When you wear
            ASEM, you're not just making a fashion statement - you're joining a movement that believes in the power of
            young people to change lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">PURPOSEFUL</h3>
              <p className="text-gray-400">Every purchase supports our humanitarian projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">LEGACY</h3>
              <p className="text-gray-400">15 years of impact and community building</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">AUTHENTIC</h3>
              <p className="text-gray-400">Real stories, real impact, real change</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            JOIN THE
            <span className="block text-amber-100">MOVEMENT</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-amber-100">
            Ready to be part of something bigger? Connect with us and stay updated on new drops and humanitarian
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg"
            >
              CONTACT US
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 font-bold text-lg px-8 py-4 rounded-lg bg-transparent"
            >
              FOLLOW @ASEM
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
