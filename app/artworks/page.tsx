import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart } from "lucide-react"

export default function ArtworksPage() {
  // Sample data with proper links
  const artworks = [
    {
      id: 1,
      title: "Digital Landscape",
      artist: "Budi Santoso",
      price: 500000,
      views: 120,
      likes: 15,
      category: "Digital Art",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Abstract Portrait",
      artist: "Sari Dewi",
      price: 750000,
      views: 89,
      likes: 12,
      category: "Portrait",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Cyberpunk City",
      artist: "Andi Wijaya",
      price: 1200000,
      views: 200,
      likes: 25,
      category: "Concept Art",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Nature Spirit",
      artist: "Maya Putri",
      price: 650000,
      views: 150,
      likes: 18,
      category: "Fantasy",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-2xl font-bold text-white">KaryaLoka</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/artworks" className="text-white hover:text-white transition-colors">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Jelajahi Karya Seni</h1>
          <p className="text-white/80 text-lg">Temukan karya seni digital terbaik dari seniman Indonesia</p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all overflow-hidden group"
            >
              <CardContent className="p-0">
                <Link href={`/artworks/${artwork.id}`} className="block relative">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1">
                    <Link href={`/artworks/${artwork.id}`} className="hover:text-purple-300 transition-colors">
                      {artwork.title}
                    </Link>
                  </h3>
                  <p className="text-white/60 text-sm mb-3">oleh {artwork.artist}</p>
                  <div className="flex items-center justify-between text-sm text-white/60 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {artwork.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {artwork.likes}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{artwork.category}</Badge>
                    <span className="text-purple-300 font-bold">Rp {artwork.price.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
