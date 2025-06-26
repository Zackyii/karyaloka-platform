"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/providers/auth-provider"
import { supabase } from "@/lib/supabase-simple"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Artwork {
  id: string
  title: string
  price: number
  category: string
  status: string
  image_url: string
  views: number
  likes: number
  created_at: string
}

export default function ManageArtworksPage() {
  const { user, profile } = useAuth()
  const router = useRouter()
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
      return
    }
    if (profile?.role !== "artist") {
      router.push("/dashboard")
      return
    }
    fetchArtworks()
  }, [user, profile])

  const fetchArtworks = async () => {
    try {
      const { data, error } = await supabase
        .from("artworks")
        .select("*")
        .eq("artist_id", user?.id)
        .order("created_at", { ascending: false })

      if (error) throw error
      setArtworks(data || [])
    } catch (error) {
      console.error("Error fetching artworks:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteArtwork = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus karya ini?")) return

    try {
      const { error } = await supabase.from("artworks").delete().eq("id", id)

      if (error) throw error
      setArtworks(artworks.filter((artwork) => artwork.id !== id))
    } catch (error) {
      console.error("Error deleting artwork:", error)
    }
  }

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || artwork.status === statusFilter
    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Kelola Karya</h1>
            <p className="text-gray-300 mt-2">Kelola dan pantau karya seni Anda</p>
          </div>
          <Button asChild className="mt-4 sm:mt-0">
            <Link href="/dashboard/artworks/upload">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Karya Baru
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-gray-800/50 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari berdasarkan judul atau kreator..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48 bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Semua Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Dipublikasikan</SelectItem>
                  <SelectItem value="sold">Terjual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Artworks Table */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              Menampilkan {filteredArtworks.length} dari {artworks.length} karya
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-gray-300">Thumbnail</th>
                    <th className="text-left py-3 px-4 text-gray-300">Judul Karya</th>
                    <th className="text-left py-3 px-4 text-gray-300">Kategori</th>
                    <th className="text-left py-3 px-4 text-gray-300">Harga</th>
                    <th className="text-left py-3 px-4 text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 text-gray-300">Views</th>
                    <th className="text-left py-3 px-4 text-gray-300">Likes</th>
                    <th className="text-left py-3 px-4 text-gray-300">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArtworks.map((artwork) => (
                    <tr key={artwork.id} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-3 px-4">
                        <Image
                          src={artwork.image_url || "/placeholder.svg?height=40&width=60"}
                          alt={artwork.title}
                          width={60}
                          height={40}
                          className="w-15 h-10 object-cover rounded"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-white font-medium">{artwork.title}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(artwork.created_at).toLocaleDateString("id-ID")}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-300">{artwork.category}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-primary-400 font-semibold">
                          Rp {artwork.price.toLocaleString("id-ID")}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            artwork.status === "published"
                              ? "default"
                              : artwork.status === "sold"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            artwork.status === "published"
                              ? "bg-green-600 text-white"
                              : artwork.status === "sold"
                                ? "bg-blue-600 text-white"
                                : "border-yellow-500 text-yellow-500"
                          }
                        >
                          {artwork.status === "published"
                            ? "Dipublikasikan"
                            : artwork.status === "sold"
                              ? "Terjual"
                              : "Draft"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center text-gray-300">
                          <Eye className="w-4 h-4 mr-1" />
                          {artwork.views}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-300">{artwork.likes}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button asChild size="sm" variant="outline">
                            <Link href={`/artworks/${artwork.id}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteArtwork(artwork.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredArtworks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">Tidak ada karya yang ditemukan</p>
                <Button asChild>
                  <Link href="/dashboard/artworks/upload">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Karya Pertama
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
