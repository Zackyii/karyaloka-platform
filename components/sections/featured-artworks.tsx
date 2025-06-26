"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"
import { Eye, Heart, ArrowRight } from "lucide-react"

interface FeaturedArtwork {
  id: string
  title: string
  image_url: string
  price: number
  category: string
  views: number
  likes: number
  artist: {
    full_name: string
  }
}

export function FeaturedArtworks() {
  const [artworks, setArtworks] = useState<FeaturedArtwork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedArtworks()
  }, [])

  const fetchFeaturedArtworks = async () => {
    try {
      const { data, error } = await supabase
        .from("artworks")
        .select(`
          id,
          title,
          image_url,
          price,
          category,
          views,
          likes,
          profiles:artist_id (
            full_name
          )
        `)
        .eq("status", "published")
        .order("views", { ascending: false })
        .limit(6)

      if (error) throw error

      setArtworks(
        data?.map((artwork) => ({
          ...artwork,
          artist: artwork.profiles,
        })) || [],
      )
    } catch (error) {
      console.error("Error fetching featured artworks:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Karya Seni Unggulan</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Temukan karya seni digital terbaik dari seniman berbakat di seluruh dunia
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="animate-pulse">
                  <div className="bg-gray-700 h-64 w-full"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded mb-2 w-2/3"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : artworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {artworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
              >
                <Link href={`/artworks/${artwork.id}`} className="block relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={artwork.image_url || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2 line-clamp-1">
                    <Link href={`/artworks/${artwork.id}`} className="hover:text-primary-400 transition-colors">
                      {artwork.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    oleh <span className="text-primary-400">{artwork.artist?.full_name}</span>
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{artwork.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{artwork.likes}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{artwork.category}</Badge>
                    <span className="text-primary-400 font-semibold">Rp {artwork.price.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Belum ada karya yang dipublikasikan</p>
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/artworks" className="flex items-center">
              Lihat Semua Karya
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
