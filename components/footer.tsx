import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="images/asem-logo.png"
                alt="ASEM Logo"
                width={50}
                height={50}
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-xl font-bold">ASEM</span>
            </div>
            <p className="text-amber-200 mb-4">
              ASEM, la joie qu'on sème ✨
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/your-username-here" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@your-username-here" target="_blank" rel="noopener noreferrer">
                  <TikTok className="h-5 w-5 text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a href="https://https://www.instagram.com/asem.encgt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/your-username-here" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-amber-200 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-amber-200 hover:text-white">About Us</Link></li>
              <li><Link href="/projects" className="text-amber-200 hover:text-white">Our Projects</Link></li>
              <li><Link href="/impact" className="text-amber-200 hover:text-white">Our Impact</Link></li>
              <li><Link href="/news" className="text-amber-200 hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/volunteer" className="text-amber-200 hover:text-white">Volunteer</Link></li>
              <li><Link href="/donate" className="text-amber-200 hover:text-white">Donate</Link></li>
              <li><Link href="/join" className="text-amber-200 hover:text-white">Join Us</Link></li>
              <li><Link href="/partnerships" className="text-amber-200 hover:text-white">Partnerships</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-amber-200">
              <li>ASEM ENCGT</li>
              <li>Tangier, Morocco</li>
              <li>Airport Road, P.O. 1255</li>
              <li>+212 770-353602</li>
              <li>asemencgt10@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} ASEM - Assistance et Soutien au Enfants Malades. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
