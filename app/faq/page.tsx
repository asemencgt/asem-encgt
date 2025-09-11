import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from 'lucide-react'
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ASEM and what do we do?",
      answer: "ASEM (Assistance Et Soutien aux Enfants Malades) is a youth-driven humanitarian club founded in 2010 in ENCG Tangier. We focus on empowering children and create positive change in their communities through education, social development, and humanitarian aid projects."
    },
    {
      question: "How can I become a member of ASEM?",
      answer: "Becoming a member is simple! Fill out our membership application form on the 'Join Us' page in recruitment week (usually within october). We welcome passionate young people who share our commitment to humanitarian work. Membership fee is set at 170dh for new membres."
    },
    {
      question: "Do I need previous experience to join?",
      answer: "No previous experience is required! We welcome members from all backgrounds and provide comprehensive training and mentorship. What matters most is your passion for making a difference and willingness to learn. Many of our most successful members started with no prior humanitarian experience."
    },
    {
      question: "How are ASEM projects funded?",
      answer: "Our projects are funded through various sources including membership fundraising activities, donations from supporters, grants from partner organizations, proceeds from our merchandise shop, and corporate partnerships. We maintain full transparency in our financial operations and provide regular reports to our members and donors."
    },
    {
      question: "How can I stay updated on ASEM activities?",
      answer: "Stay connected through our social media channels (Instagram, Facebook, LinkedIn) and website news section. We also organize annual conference where members can connect and share experiences."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find answers to common questions about ASEM, our work, and how you can get involved.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold text-amber-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Still Have Questions?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you with any questions about ASEM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <MessageCircle className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our team members in real-time</p>
                <Button variant="outline" className="w-full hover:bg-amber-50 text-black border-amber-900">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <Mail className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us your questions via email</p>
                <Button variant="outline" className="w-full hover:bg-amber-50 border-amber-900 text-black" asChild>
                  <Link href="asemencgt10@gmail.com">
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-50">
                  <Phone className="h-8 w-8 text-amber-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us during business hours</p>
                <Button variant="outline" className="w-full hover:bg-amber-50 text-black border-amber-900" asChild>
                  <Link href="tel:+212 770-353602">
                    Call Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
