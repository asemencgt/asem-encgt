"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center tracking-normal justify-stretch px-0 space-x-0 flex-row">
            <Image src="images/asem-logo.png" alt="ASEM Logo" width={60} height={60} className="w-10 h-10" />
            <span className="text-xl font-bold text-amber-900">ASEM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/activities" className="text-gray-700 hover:text-amber-600 transition-colors">
              Activities
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-amber-600 transition-colors">
              Shop
            </Link>
            <Link href="/join" className="text-gray-700 hover:text-amber-600 transition-colors">
              Join Us
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-amber-600 transition-colors">
              FAQ
            </Link>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="/activities" className="text-gray-700 hover:text-amber-600 transition-colors">
                Activities
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-amber-600 transition-colors">
                Shop
              </Link>
              <Link href="/join" className="text-gray-700 hover:text-amber-600 transition-colors">
                Join Us
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-amber-600 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
