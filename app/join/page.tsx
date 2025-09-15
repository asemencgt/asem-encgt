import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function JoinPage() {
  const handleRedirect = () => {
    // You MUST replace this placeholder URL with your actual Google Forms link.
    window.open("https://forms.gle/2sAoBc8y5wnx4foq5", "_blank");
  };
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
      
      {/* Application Form Section with Button */}
      <section className="py-20 bg-amber-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-amber-900">
                  New Member Application
                </CardTitle>
                <p className="text-center text-gray-600">
                  Click the button below to start your journey with ASEM by
                  filling out our official application form.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Button
                    onClick={handleRedirect}
                    className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700"
                    size="lg"
                  >
                    Go to Application Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
