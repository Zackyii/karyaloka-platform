"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Users, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Platform Karya Seni Digital Terdepan
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Temukan & Bagikan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
              Karya Seni Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Platform terbaik untuk seniman digital berbagi kreativitas dan kolektor menemukan karya seni unik
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/artworks" className="flex items-center">
                Jelajahi Karya
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link href="/auth/register">Bergabung Sekarang</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-3">
                <Palette className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-400">Karya Seni</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400">Seniman</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mx-auto mb-3">
                <Star className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-400">Pengguna</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
