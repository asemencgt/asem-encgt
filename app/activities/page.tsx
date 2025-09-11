import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Activities</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the impactful projects and initiatives that define ASEM's humanitarian mission
          </p>
          <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-2">15 Years of Impact</Badge>
        </div>
      </section>

      {/* Voyage Humanitaire Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/voyage-humanitaire-logo.jpg"
                  alt="Voyage Humanitaire Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <Badge className="bg-amber-100 text-amber-900 mb-2">Humanitarian Mission</Badge>
                  <h2 className="text-4xl font-bold text-amber-900">Voyage Humanitaire</h2>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our flagship humanitarian expedition that takes us to remote villages and underserved communities across
                Morocco. This annual journey represents the pinnacle of our humanitarian efforts, bringing essential
                supplies, medical aid, and educational resources to those who need them most.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From community building projects and school renovation to medical caravans, our
                volunteers work hand-in-hand with local communities to create lasting positive change and sustainable
                development initiatives.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">450+</div>
                  <div className="text-gray-600">Children Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">5</div>
                  <div className="text-gray-600">Villages Visited</div>
                </div>
              </div>

              <Button className="bg-amber-600 hover:bg-amber-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/voyage-humanitaire-group.jpg"
                  alt="Volunteer Group"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/voyage-humanitaire-wall-art.jpg"
                  alt="Community Wall Art"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/voyage-humanitaire-painting.jpg"
                  alt="Community Painting"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/voyage-humanitaire-planting.jpg"
                  alt="Tree Planting"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
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

      {/* Bayt Assilah Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <Image
                  src="/images/laylat-lkhayr-facepainting.jpg"
                  alt="Face Painting Activity"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/bayt-assilah-volunteer.jpg"
                  alt="Volunteer Support"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/bayt assilah belazar.jpg"
                  alt="Bayt Assilah Logo"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/bayt assilah marouane.jpg"
                  alt="Bayt Assilah Logo"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/bayt-assilah-logo.png" alt="TFE Logo" width={120} height={60} className="object-contain" />
                <div>
                  <Badge className="bg-amber-100 text-amber-800 mb-2">Assistance</Badge>
                  <h2 className="text-4xl font-bold text-amber-900">Bayt Assilah</h2>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A heartwarming initiative dedicated to supporting children with special needs and those requiring extra
                care in Bayt Assilah. Our volunteers provide educational support, recreational activities, and emotional
                companionship to create an inclusive and nurturing environment.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through face painting, educational games, and one-on-one interactions, we help these remarkable children
                develop their skills, build confidence, and experience the joy of community support and friendship.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">45+</div>
                  <div className="text-amber-900">Children Supported</div>
                </div>
              </div>

              <Button className="bg-amber-700 hover:bg-amber-900">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Laylat Lkhayr Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/laylat-lkhayr-logo.png" alt="Laylat Lkhayr Logo" width={90} height={90} />
                <div>
                  <Badge className="bg-amber-100 text-amber-800 mb-2">Traditional Charity Night</Badge>
                  <h2 className="text-4xl font-bold text-amber-900">Laylat Lkhayr</h2>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our most cherished traditional event, Laylat Lkhayr brings together our community for an evening of
                giving, celebration, and hope. This special night features traditional Moroccan ceremoniy, Eid gifts
                for children, shared meals, and joyful activities that create lasting memories.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From intimate dinner gatherings to vibrant celebrations with games and dances, Laylat Lkhayr embodies
                the spirit of community support and cultural heritage while bringing smiles to children's faces.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">50+</div>
                  <div className="text-gray-600">Children Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">50+</div>
                  <div className="text-gray-600">Eid Gifts</div>
                </div>
              </div>

              <Button className="bg-amber-600 hover:bg-amber-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/laylat-lkhayr-ceremony.jpg"
                  alt="Traditional Ceremony"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/laylat-lkhayr-interaction.jpg"
                  alt="Community Interaction"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/laylat-lkhayr-dinner.jpg"
                  alt="Community Dinner"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/Laylat lkhayr happy gift.jpg"
                  alt="Joyful Celebration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
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
    <source src="/videos/laylat lkhir doc.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

      {/* Tournoi de Foot des Enfants Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <Image
                  src="/images/tfe-team-photo.jpg"
                  alt="Football Team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/tfe-action.jpg"
                  alt="Football Action"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/tfe-awards.jpg"
                  alt="Award Ceremony"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <Image
                  src="/images/tfe-group-final.jpg"
                  alt="Tournament Group Photo"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/images/tfe-logo.png" alt="TFE Logo" width={70} height={35} className="object-contain" />
                <div>
                  <Badge className="bg-amber-100 text-amber-900 mb-2">Sports & Recreation</Badge>
                  <h2 className="text-4xl font-bold text-amber-900">Tournoi de Foot des Enfants</h2>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                An exciting annual football tournament that brings together children from different communities to
                celebrate sportsmanship, teamwork, and healthy competition. This event goes beyond just football - it's
                about building friendships, developing leadership skills, and promoting physical wellness.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The tournament features multiple age categories, ensuring every child can participate regardless of
                skill level. We provide equipment, refreshments, and certificates while creating an atmosphere of fun,
                inclusion, and mutual respect that embodies the true spirit of sport.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">40+</div>
                  <div className="text-gray-600">Young Athletes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900 mb-2">6</div>
                  <div className="text-gray-600">Teams Participating</div>
                </div>
              </div>

              <Button className="bg-amber-700 hover:bg-amber-900">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Collective Impact</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Together, these activities create a comprehensive support system for children and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-100">
                  <Heart className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-amber-900">550+</h3>
                <p className="text-gray-700">Total Children Impacted in 2025</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-100">
                  <Users className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-amber-900">100+</h3>
                <p className="text-gray-700">Active Volunteers</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-100">
                  <Globe className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-amber-900">5</h3>
                <p className="text-gray-700">Villages Reached</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-amber-900">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-100">
                  <Target className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-amber-900">15</h3>
                <p className="text-gray-700">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Participate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our upcoming activities and be part of the positive change we're creating in communities.
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
