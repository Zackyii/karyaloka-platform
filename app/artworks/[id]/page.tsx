"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Heart, Share2, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/providers/cart-provider"

export default function ArtworkDetailPage() {
  const params = useParams()
  const [isLiked, setIsLiked] = useState(false)
  const [comment, setComment] = useState("")
  const { addToCart } = useCart()

  // Mock data - in real app, fetch based on params.id
  const artwork = {
    id: params.id as string,
    title: "Digital Landscape Masterpiece",
    description:
      "Sebuah karya seni digital yang menggambarkan keindahan alam dengan sentuhan futuristik. Dibuat menggunakan teknik digital painting dengan detail yang sangat halus dan permainan cahaya yang memukau.",
    image: "/placeholder.svg?height=600&width=800",
    price: 750000,
    category: "Digital Art",
    tags: ["Landscape", "Digital Painting", "Nature", "Futuristic"],
    views: 1250,
    likes: 89,
    created_at: "2024-06-15",
    artist: {
      id: "1",
      name: "Budi Santoso",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Digital artist dengan pengalaman 5+ tahun. Spesialisasi dalam landscape dan character design.",
      followers: 1200,
      artworks: 45,
    },
  }

  const handleAddToCart = () => {
    addToCart({
      id: `cart-${artwork.id}`,
      artwork_id: artwork.id,
      title: artwork.title,
      price: artwork.price,
      image_url: artwork.image,
      artist_name: artwork.artist.name,
    })

    alert("Karya berhasil ditambahkan ke keranjang!")
  }

  const comments = [
    {
      id: 1,
      user: "Maya Putri",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Karya yang luar biasa! Detail dan komposisinya sangat memukau.",
      date: "2024-06-20",
    },
    {
      id: 2,
      user: "Andi Wijaya",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Teknik digital painting-nya sangat halus. Inspiratif!",
      date: "2024-06-19",
    },
  ]

  const relatedArtworks = [
    {
      id: "2",
      title: "Abstract Portrait",
      artist: "Sari Dewi",
      price: 500000,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      title: "Cyberpunk City",
      artist: "Andi Wijaya",
      price: 1200000,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      title: "Nature Spirit",
      artist: "Maya Putri",
      price: 650000,
      image: "/placeholder.svg?height=200&width=200",
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
              <Link href="/cart">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Keranjang
                </Button>
              </Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Artwork Display */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <nav className="text-white/60 text-sm mb-4">
                <Link href="/artworks" className="hover:text-white">
                  Jelajahi Karya
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">{artwork.title}</span>
              </nav>
              <h1 className="text-3xl font-bold text-white mb-2">{artwork.title}</h1>
              <div className="flex items-center space-x-4 text-white/60">
                <span>
                  oleh{" "}
                  <Link href={`/artists/${artwork.artist.id}`} className="text-purple-300 hover:text-purple-200">
                    {artwork.artist.name}
                  </Link>
                </span>
                <Badge variant="secondary">{artwork.category}</Badge>
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

            {/* Artwork Image */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardContent className="p-0">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-white/20 ${isLiked ? "text-red-400 border-red-400" : "text-white"} hover:bg-white/10`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Disukai" : "Suka"} ({artwork.likes})
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </Button>
              <Button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Tambah ke Keranjang - Rp {artwork.price.toLocaleString()}
              </Button>
            </div>

            {/* Description */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Deskripsi</h3>
                <p className="text-white/80 leading-relaxed mb-4">{artwork.description}</p>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400 text-purple-300">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Komentar ({comments.length})</h3>

                {/* Comment Form */}
                <div className="mb-6">
                  <Textarea
                    placeholder="Tulis komentar Anda..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mb-3 bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    rows={3}
                  />
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Kirim Komentar
                  </Button>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <img
                        src={comment.avatar || "/placeholder.svg"}
                        alt={comment.user}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-white">{comment.user}</span>
                          <span className="text-white/50 text-sm">{comment.date}</span>
                        </div>
                        <p className="text-white/80">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Artist Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={artwork.artist.avatar || "/placeholder.svg"}
                    alt={artwork.artist.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h4 className="font-bold text-white mb-1">{artwork.artist.name}</h4>
                  <p className="text-white/60 text-sm mb-3">{artwork.artist.bio}</p>
                  <div className="flex justify-center space-x-4 text-sm text-white/60 mb-4">
                    <span>{artwork.artist.followers} Followers</span>
                    <span>{artwork.artist.artworks} Karya</span>
                  </div>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Ikuti Seniman
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Artworks */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-white mb-4">Karya Terkait</h4>
                <div className="space-y-4">
                  {relatedArtworks.map((related) => (
                    <Link key={related.id} href={`/artworks/${related.id}`} className="block">
                      <div className="flex space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h5 className="font-semibold text-white text-sm mb-1">{related.title}</h5>
                          <p className="text-white/60 text-xs mb-1">oleh {related.artist}</p>
                          <p className="text-purple-300 text-sm font-bold">Rp {related.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
