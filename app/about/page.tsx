import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Heart, Target, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Marouane Elaouli",
      role: "Président",
      image: "images/marouane-elaouli.jpg",
      bio: "Leading ASEM with passion and dedication",
    },
    {
      name: "Hiba Belazar",
      role: "Vice Président",
      image: "images/hiba-belazar.jpg",
      bio: "Supporting our mission with innovative ideas",
    },
    {
      name: "Hajar El Amri",
      role: "Trésorière",
      image: "images/hajar-elamri.jpg",
      bio: "Managing our resources with transparency",
    },
    {
      name: "Chorouk Saiyd",
      role: "Secrétaire Générale",
      image: "images/chorouk-saiyd.jpg",
      bio: "Organizing our activities with precision",
    },
    {
      name: "Chaimae Barki",
      role: "Respo. Communication",
      image: "images/chaimae-barki.jpg",
      bio: "Spreading our message across all platforms",
    },
    {
      name: "Yasmine Ez-Zhar",
      role: "Conseillère",
      image: "images/yasmine-ezzhar.jpg",
      bio: "Providing guidance and strategic direction",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every situation with empathy and understanding, putting human dignity at the center of our work.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "We think globally while acting locally, understanding that challenges are interconnected across borders.",
    },
    {
      icon: Target,
      title: "Impact Focus",
      description: "We measure success by the positive change we create in people's lives and communities.",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="images/asem-sunset-coast.jpg" alt="ASEM Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ASEM</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn about our journey, our team, and our commitment to creating positive change worldwide.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated young leaders guiding ASEM's mission worldwide
            </p>
          </div>

          {/* Leadership Poster */}
          <div className="mb-12 text-center">
            <Image
              src="/images/leadership-poster.jpg"
              alt="ASEM Leadership Team 2024-2025"
              width={800}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3 bg-amber-100 text-amber-800">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="images/asem-celebration.jpg"
                alt="ASEM Community Celebration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-900">Our Community</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At the heart of ASEM is our vibrant community of young changemakers. Our members come from diverse
                cities, bringing unique perspectives and skills to our shared mission of creating positive impact
                in children.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Organizing local initiatives humanitarian projects, our community celebrates every 
                achievement together. We believe that collective action amplifies individual efforts
                and creates lasting change.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link href="/join">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-500 border-amber-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <Target className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower young people to create positive change through humanitarian initiatives, fostering social
                  development while promoting human dignity and support for all children.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900 border-amber-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <Eye className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where young people are empowered to lead positive change, creating resilient communities that
                  thrive through collaboration, innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900 border-amber-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <Heart className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compassion, integrity, innovation, collaboration, and excellence guide every decision we make and
                  every action we take in our mission to create positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Story</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to regional impact - the ASEM ENCGT journey
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Assistance et Soutien aux Enfants Malades is a humanitarian club founded in 2010 at ENCGT. It provides moral and material support to sick children from disadvantaged backgrounds and their families, promoting their social integration and strengthening the fight against serious illnesses through sensitization and medical assistance. In 2023, after 13 years of commitment and dedication within ENCGT, ASEM club evolved to give rise to a foundation - Assistance and Support for Moroccan Children, a non-profit association created by the school's students. Although now an independent organization, the Foundation maintains a close link with ENCGT and continues to uphold the ASEM club within its structure. The ASEM Foundation is committed to supporting Moroccan children, transforming their needs into concrete humanitarian actions filled with hope. By expanding its scope of action, the Foundation has also encouraged the creation of ASEM club affiliations in other schools, allowing its humanitarian spirit to spread across the country.
              </p>

              <p className="leading-relaxed mb-6">
                Our founders recognized that traditional humanitarian approaches often overlooked the energy,
                creativity, and fresh perspectives that young people bring to solving complex social problems. They
                envisioned a club that would harness this potential and create meaningful opportunities for
                youth to make a difference.
              </p>

              <p className="leading-relaxed mb-6">
                Over the past 15 years, we've evolved from a small student group to a recognized 
                humanitarian organization. We've learned that lasting change comes from empowering local communities,
                building sustainable partnerships, and approaching challenges with both passion and professionalism.
              </p>

              <p className="leading-relaxed">
                Today, ASEM continues to grow and adapt, always staying true to our core mission of empowering young
                people to create positive change. Every project we undertake, every partnership we form, and every life
                we touch, is a step toward our vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ASEM is proudly based in Tangier, Morocco</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
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
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-2">ENCG Tangier</h3>
                <p className="text-gray-600">
                  École Nationale de Commerce et de Gestion
                  <br />
                  Tangier, Morocco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ASEM and be part of a global community of young people creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50" asChild>
              <Link href="/join">Become a Member</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
