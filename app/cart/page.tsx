"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/providers/cart-provider"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart()

  const shipping = 25000
  const total = totalPrice + shipping

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
                  Keranjang ({totalItems})
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Keranjang Belanja</h1>
          <p className="text-gray-300 mt-2">Kelola item yang ingin Anda beli</p>
        </div>

        {items.length === 0 ? (
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-12 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg text-gray-300 mb-6">Keranjang belanja Anda masih kosong</p>
              <Button asChild>
                <Link href="/artworks">Mulai Belanja</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <Card key={item.id} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image_url || "/placeholder.svg?height=96&width=120"}
                          alt={item.title}
                          width={120}
                          height={96}
                          className="w-full md:w-30 h-24 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          <Link
                            href={`/artworks/${item.artwork_id}`}
                            className="hover:text-primary-400 transition-colors"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-gray-400 mb-2">
                          oleh <span className="text-primary-400">{item.artist_name}</span>
                        </p>
                        <p className="text-xl font-bold text-primary-400">Rp {item.price.toLocaleString("id-ID")}</p>
                      </div>

                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-400 text-sm">Jumlah:</span>
                          <div className="flex items-center border border-gray-600 rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.artwork_id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-4 py-2 text-white">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.artwork_id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm text-gray-400">Subtotal:</p>
                            <p className="font-semibold text-white">
                              Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.artwork_id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-800/50 border-gray-700 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Ringkasan Belanja</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Item:</span>
                      <span className="text-white font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Subtotal Produk:</span>
                      <span className="text-white font-semibold">Rp {totalPrice.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Biaya Pengiriman:</span>
                      <span className="text-white font-semibold">Rp {shipping.toLocaleString("id-ID")}</span>
                    </div>
                  </div>

                  <hr className="border-gray-600 mb-6" />

                  <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-bold text-white">Total:</span>
                    <span className="text-xl font-bold text-primary-400">Rp {total.toLocaleString("id-ID")}</span>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full">
                      <Link href="/checkout">Lanjutkan ke Pembayaran</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/artworks">Lanjutkan Belanja</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
