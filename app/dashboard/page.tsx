"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Heart, DollarSign, Upload, Settings, User, ShoppingBag } from "lucide-react"

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [userRole, setUserRole] = useState<"artist" | "collector">("collector")

  // Mock user data - in real app, get from auth context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: userRole,
    avatar: "/placeholder.svg?height=100&width=100",
  }

  const artistStats = {
    totalArtworks: 12,
    totalViews: 5420,
    totalLikes: 234,
    totalEarnings: 2500000,
  }

  const collectorStats = {
    totalPurchases: 8,
    totalSpent: 1200000,
    favoriteArtworks: 45,
    followingArtists: 23,
  }

  const recentArtworks = [
    {
      id: 1,
      title: "Digital Landscape",
      views: 120,
      likes: 15,
      status: "published",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Abstract Portrait",
      views: 89,
      likes: 12,
      status: "draft",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const recentPurchases = [
    {
      id: 1,
      title: "Cyberpunk City",
      artist: "Andi Wijaya",
      price: 750000,
      date: "2024-06-20",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Nature Spirit",
      artist: "Maya Putri",
      price: 450000,
      date: "2024-06-18",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading dashboard...</p>
        </div>
      </div>
    )
  }

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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Settings className="w-4 h-4 mr-2" />
                Pengaturan
              </Button>
              <div className="flex items-center space-x-2">
                <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
                <span className="text-white">{user.name}</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang, {user.name}!</h1>
          <p className="text-white/80">
            {user.role === "artist"
              ? "Kelola karya seni dan pantau performa Anda"
              : "Jelajahi dan koleksi karya seni terbaik"}
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant={user.role === "artist" ? "default" : "secondary"}>
              {user.role === "artist" ? "Seniman" : "Kolektor"}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setUserRole(userRole === "artist" ? "collector" : "artist")}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Switch to {userRole === "artist" ? "Collector" : "Artist"}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {user.role === "artist" ? (
            <>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Karya</CardTitle>
                  <Palette className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{artistStats.totalArtworks}</div>
                  <p className="text-xs text-white/60">Karya yang telah diupload</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{artistStats.totalViews.toLocaleString()}</div>
                  <p className="text-xs text-white/60">Kali karya dilihat</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Likes</CardTitle>
                  <Heart className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{artistStats.totalLikes}</div>
                  <p className="text-xs text-white/60">Apresiasi dari pengunjung</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Pendapatan</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">Rp {artistStats.totalEarnings.toLocaleString()}</div>
                  <p className="text-xs text-white/60">Total penjualan</p>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Pembelian</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{collectorStats.totalPurchases}</div>
                  <p className="text-xs text-white/60">Karya yang dibeli</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Pengeluaran</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">Rp {collectorStats.totalSpent.toLocaleString()}</div>
                  <p className="text-xs text-white/60">Yang telah dibelanjakan</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Favorit</CardTitle>
                  <Heart className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{collectorStats.favoriteArtworks}</div>
                  <p className="text-xs text-white/60">Karya favorit</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Following</CardTitle>
                  <User className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{collectorStats.followingArtists}</div>
                  <p className="text-xs text-white/60">Seniman yang diikuti</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-white/60">
                {user.role === "artist" ? "Kelola karya Anda" : "Jelajahi platform"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {user.role === "artist" ? (
                <>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Karya Baru
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Palette className="w-4 h-4 mr-2" />
                    Kelola Karya
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    asChild
                  >
                    <Link href="/artworks">
                      <Eye className="w-4 h-4 mr-2" />
                      Jelajahi Karya
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Heart className="w-4 h-4 mr-2" />
                    Lihat Favorit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">
                {user.role === "artist" ? "Karya Terbaru" : "Pembelian Terbaru"}
              </CardTitle>
              <CardDescription className="text-white/60">
                {user.role === "artist" ? "Karya yang baru diupload" : "Karya yang baru dibeli"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.role === "artist"
                  ? recentArtworks.map((artwork) => (
                      <div key={artwork.id} className="flex items-center space-x-3">
                        <img
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{artwork.title}</h4>
                          <div className="flex items-center space-x-4 text-xs text-white/60">
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {artwork.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {artwork.likes}
                            </span>
                            <Badge
                              variant={artwork.status === "published" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {artwork.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))
                  : recentPurchases.map((purchase) => (
                      <div key={purchase.id} className="flex items-center space-x-3">
                        <img
                          src={purchase.image || "/placeholder.svg"}
                          alt={purchase.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{purchase.title}</h4>
                          <p className="text-xs text-white/60">oleh {purchase.artist}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-purple-300">Rp {purchase.price.toLocaleString()}</span>
                            <span className="text-xs text-white/50">{purchase.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
