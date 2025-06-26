import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-2xl font-bold text-white">KaryaLoka</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/artworks" className="text-white/80 hover:text-white transition-colors">
                Jelajahi Karya
              </Link>
              <Link href="/articles" className="text-white/80 hover:text-white transition-colors">
                Artikel
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                Tentang Kami
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Daftar
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Temukan & Koleksi
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Karya Seni Digital
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Platform terdepan untuk seniman digital Indonesia. Jual, beli, dan koleksi karya seni digital terbaik dari
            kreator lokal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artworks">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
              >
                Jelajahi Karya
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Mulai Menjual
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-white/60">Karya Seni</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Seniman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2000+</div>
            <div className="text-white/60">Kolektor</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50M+</div>
            <div className="text-white/60">Total Penjualan</div>
          </div>
        </div>
      </main>
    </div>
  )
}
