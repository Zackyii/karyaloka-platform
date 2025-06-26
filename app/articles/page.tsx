import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye } from "lucide-react"

export default function ArticlesPage() {
  // Mock data articles
  const articles = [
    {
      id: 1,
      title: "Tips Memulai Karir sebagai Digital Artist",
      excerpt:
        "Panduan lengkap untuk memulai karir sebagai seniman digital, dari tools yang dibutuhkan hingga cara membangun portofolio.",
      author: "Sarah Wijaya",
      date: "2024-06-20",
      views: 1250,
      category: "Tutorial",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Tren Seni Digital 2024: NFT dan Beyond",
      excerpt: "Eksplorasi tren terbaru dalam dunia seni digital, termasuk perkembangan NFT dan teknologi blockchain.",
      author: "Budi Santoso",
      date: "2024-06-18",
      views: 980,
      category: "Trend",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Cara Menjual Karya Seni Digital Online",
      excerpt: "Strategi efektif untuk menjual karya seni digital melalui platform online dan membangun audience.",
      author: "Maya Putri",
      date: "2024-06-15",
      views: 1500,
      category: "Business",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Review Software Digital Art Terbaik 2024",
      excerpt: "Perbandingan lengkap software digital art populer seperti Photoshop, Procreate, dan Clip Studio Paint.",
      author: "Andi Wijaya",
      date: "2024-06-12",
      views: 2100,
      category: "Review",
      image: "/placeholder.svg?height=200&width=400",
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
          <h1 className="text-4xl font-bold text-white mb-4">Artikel & Tutorial</h1>
          <p className="text-white/80 text-lg">Tips, tutorial, dan insight terbaru seputar dunia seni digital</p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Featured Article"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <Badge className="mb-3 bg-purple-500">Featured</Badge>
                <h2 className="text-2xl font-bold text-white mb-3">Panduan Lengkap Memulai Karir Digital Artist</h2>
                <p className="text-white/80 mb-4">
                  Dari hobi menjadi profesi - pelajari langkah-langkah praktis untuk membangun karir sebagai digital
                  artist profesional.
                </p>
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">Sarah Wijaya</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">20 Jun 2024</span>
                  <Eye className="w-4 h-4 mr-1" />
                  <span>1.2K views</span>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Baca Selengkapnya
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="font-bold text-white mb-2 line-clamp-2">
                    <Link href={`/articles/${article.id}`} className="hover:text-purple-300 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-white/60 text-xs">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString("id-ID")}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Muat Artikel Lainnya
          </Button>
        </div>
      </main>
    </div>
  )
}
