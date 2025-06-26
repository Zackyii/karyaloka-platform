"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye, ArrowLeft, Share2, Heart } from "lucide-react"
import { useState } from "react"

export default function ArticleDetailPage() {
  const params = useParams()
  const [isLiked, setIsLiked] = useState(false)

  // Mock data - in real app, fetch based on params.id
  const article = {
    id: params.id,
    title: "Tips Memulai Karir sebagai Digital Artist",
    content: `
      <h2>Pendahuluan</h2>
      <p>Dunia seni digital semakin berkembang pesat, dan banyak orang yang tertarik untuk memulai karir sebagai digital artist. Namun, memulai karir di bidang ini tidaklah mudah dan membutuhkan persiapan yang matang.</p>
      
      <h2>1. Kuasai Tools yang Tepat</h2>
      <p>Langkah pertama yang harus dilakukan adalah menguasai software atau tools yang digunakan untuk membuat karya seni digital. Beberapa software populer yang bisa Anda pelajari:</p>
      <ul>
        <li><strong>Adobe Photoshop</strong> - Untuk digital painting dan photo manipulation</li>
        <li><strong>Adobe Illustrator</strong> - Untuk vector art dan logo design</li>
        <li><strong>Procreate</strong> - Untuk digital painting di iPad</li>
        <li><strong>Clip Studio Paint</strong> - Khusus untuk manga dan anime art</li>
        <li><strong>Blender</strong> - Untuk 3D modeling dan animation</li>
      </ul>
      
      <h2>2. Bangun Portfolio yang Kuat</h2>
      <p>Portfolio adalah hal terpenting bagi seorang digital artist. Portfolio yang baik harus menunjukkan:</p>
      <ul>
        <li>Keragaman style dan teknik</li>
        <li>Konsistensi kualitas karya</li>
        <li>Kemampuan storytelling</li>
        <li>Pemahaman terhadap komposisi dan warna</li>
      </ul>
      
      <h2>3. Tentukan Spesialisasi</h2>
      <p>Meskipun penting untuk memiliki skill yang beragam, menentukan spesialisasi akan membantu Anda lebih fokus dan dikenal di bidang tertentu:</p>
      <ul>
        <li><strong>Character Design</strong> - Membuat karakter untuk game, film, atau komik</li>
        <li><strong>Environment Art</strong> - Membuat background dan environment</li>
        <li><strong>UI/UX Design</strong> - Desain interface untuk aplikasi dan website</li>
        <li><strong>Concept Art</strong> - Membuat konsep visual untuk produksi</li>
        <li><strong>Illustration</strong> - Ilustrasi untuk buku, majalah, atau media lainnya</li>
      </ul>
      
      <h2>4. Pelajari Dasar-dasar Seni</h2>
      <p>Meskipun menggunakan tools digital, pemahaman terhadap dasar-dasar seni tradisional tetap penting:</p>
      <ul>
        <li>Anatomi dan proporsi</li>
        <li>Perspektif dan komposisi</li>
        <li>Teori warna dan pencahayaan</li>
        <li>Gesture drawing dan life drawing</li>
      </ul>
      
      <h2>5. Bangun Network dan Komunitas</h2>
      <p>Bergabung dengan komunitas digital artist sangat penting untuk:</p>
      <ul>
        <li>Mendapatkan feedback konstruktif</li>
        <li>Belajar dari artist lain</li>
        <li>Mendapatkan informasi job opportunities</li>
        <li>Membangun relasi profesional</li>
      </ul>
      
      <h2>6. Mulai Freelancing</h2>
      <p>Untuk mendapatkan pengalaman dan income, Anda bisa mulai dengan:</p>
      <ul>
        <li>Platform freelancing seperti Upwork, Fiverr, atau 99designs</li>
        <li>Social media untuk showcase karya</li>
        <li>Kontes desain online</li>
        <li>Kolaborasi dengan content creator</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Memulai karir sebagai digital artist membutuhkan dedikasi, latihan yang konsisten, dan kesabaran. Yang terpenting adalah terus berkarya dan tidak takut untuk bereksperimen dengan style dan teknik baru. Ingatlah bahwa setiap artist memiliki journey yang berbeda, jadi jangan terlalu membandingkan diri dengan orang lain.</p>
      
      <p>Selamat berkarya dan semoga tips ini bermanfaat untuk perjalanan Anda sebagai digital artist!</p>
    `,
    excerpt:
      "Panduan lengkap untuk memulai karir sebagai seniman digital, dari tools yang dibutuhkan hingga cara membangun portofolio.",
    author: "Sarah Wijaya",
    date: "2024-06-20",
    views: 1250,
    likes: 89,
    category: "Tutorial",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Digital Art", "Career", "Tutorial", "Tips", "Portfolio"],
    readTime: "8 min read",
  }

  const relatedArticles = [
    {
      id: 2,
      title: "Tren Seni Digital 2024: NFT dan Beyond",
      author: "Budi Santoso",
      date: "2024-06-18",
      image: "/placeholder.svg?height=200&width=300",
      category: "Trend",
    },
    {
      id: 3,
      title: "Cara Menjual Karya Seni Digital Online",
      author: "Maya Putri",
      date: "2024-06-15",
      image: "/placeholder.svg?height=200&width=300",
      category: "Business",
    },
    {
      id: 4,
      title: "Review Software Digital Art Terbaik 2024",
      author: "Andi Wijaya",
      date: "2024-06-12",
      image: "/placeholder.svg?height=200&width=300",
      category: "Review",
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
              <Link href="/articles" className="text-white hover:text-white transition-colors">
                Artikel
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                Tentang Kami
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart">
                <Button variant="ghost" className="text-white hover:bg-white/10">
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-white/60 text-sm mb-6">
            <Link href="/articles" className="hover:text-white flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Artikel
            </Link>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-purple-500">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>
                  oleh <span className="text-purple-300">{article.author}</span>
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span>{article.views} views</span>
              </div>
              <span>{article.readTime}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-white/20 ${isLiked ? "text-red-400 border-red-400" : "text-white"} hover:bg-white/10`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Disukai" : "Suka"} ({article.likes})
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-0">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          {/* Article Content */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-8">
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400 text-purple-300">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Artikel Terkait</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/articles/${related.id}`}>
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {related.category}
                          </Badge>
                          <h4 className="font-semibold text-white text-sm mb-2 line-clamp-2">{related.title}</h4>
                          <div className="flex items-center text-white/60 text-xs">
                            <User className="w-3 h-3 mr-1" />
                            <span className="mr-3">{related.author}</span>
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{new Date(related.date).toLocaleDateString("id-ID")}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
