"use client"

import type React from "react"
import { useState } from "react"
import { useCart } from "@/components/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, CreditCard, Smartphone, Building2, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit_card")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  })

  const shipping = 25000
  const adminFee = 5000
  const total = totalPrice + shipping + adminFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Mock payment processing
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate mock order ID
      const orderId = `ORD-${Date.now()}`

      // Store order data in localStorage for success page
      const orderData = {
        id: orderId,
        items: items,
        total: total,
        shipping: shipping,
        adminFee: adminFee,
        subtotal: totalPrice,
        customerInfo: formData,
        paymentMethod: paymentMethod,
        status: "success",
        date: new Date().toISOString(),
      }

      localStorage.setItem("last-order", JSON.stringify(orderData))

      // Clear cart
      clearCart()

      // Redirect to success page
      router.push(`/checkout/success?order=${orderId}`)
    } catch (error) {
      console.error("Error processing payment:", error)
      alert("Terjadi kesalahan saat memproses pembayaran")
    } finally {
      setProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <Card className="bg-gray-800/50 border-gray-700 p-8 text-center">
          <CardContent>
            <h2 className="text-2xl font-bold text-white mb-4">Keranjang Kosong</h2>
            <p className="text-gray-400 mb-6">Silakan tambahkan item ke keranjang terlebih dahulu</p>
            <Button asChild>
              <Link href="/artworks">Browse Artworks</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Proses Pembayaran</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
            <Link href="/cart" className="hover:text-primary-400 transition-colors">
              Keranjang
            </Link>
            <span>→</span>
            <span className="text-primary-400 font-medium">Pembayaran</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <MapPin className="w-6 h-6 mr-3 text-primary-500" />
                    Informasi Pengiriman
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName" className="text-gray-300">
                        Nama Lengkap *
                      </Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="contoh@email.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="text-gray-300">
                        Alamat Lengkap *
                      </Label>
                      <Textarea
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-gray-300">
                        Kota *
                      </Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="Nama kota"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-gray-300">
                        Kode Pos *
                      </Label>
                      <Input
                        id="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="12345"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">
                        Nomor Telepon *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <CreditCard className="w-6 h-6 mr-3 text-primary-500" />
                    Metode Pembayaran
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Credit Card Option */}
                  <div className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      id="credit_card"
                      name="paymentMethod"
                      value="credit_card"
                      checked={paymentMethod === "credit_card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-primary-600 bg-gray-700 border-gray-600 focus:ring-primary-500"
                    />
                    <Label htmlFor="credit_card" className="flex items-center space-x-3 cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5 text-primary-500" />
                      <span className="text-white">Kartu Kredit/Debit</span>
                    </Label>
                  </div>

                  {/* Bank Transfer Option */}
                  <div className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      id="bank_transfer"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={paymentMethod === "bank_transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-primary-600 bg-gray-700 border-gray-600 focus:ring-primary-500"
                    />
                    <Label htmlFor="bank_transfer" className="flex items-center space-x-3 cursor-pointer flex-1">
                      <Building2 className="w-5 h-5 text-primary-500" />
                      <span className="text-white">Transfer Bank</span>
                    </Label>
                  </div>

                  {/* E-Wallet Option */}
                  <div className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-primary-500 transition-colors">
                    <input
                      type="radio"
                      id="e_wallet"
                      name="paymentMethod"
                      value="e_wallet"
                      checked={paymentMethod === "e_wallet"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-primary-600 bg-gray-700 border-gray-600 focus:ring-primary-500"
                    />
                    <Label htmlFor="e_wallet" className="flex items-center space-x-3 cursor-pointer flex-1">
                      <Smartphone className="w-5 h-5 text-primary-500" />
                      <span className="text-white">E-Wallet (GoPay, OVO, DANA)</span>
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-6 h-6 text-primary-500" />
                    <div>
                      <p className="text-white font-medium">Transaksi Aman & Terpercaya</p>
                      <p className="text-gray-400 text-sm">Data Anda dilindungi dengan enkripsi SSL 256-bit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-700/50 rounded-lg">
                      <Image
                        src={item.image_url || "/placeholder.svg?height=40&width=60"}
                        alt={item.title}
                        width={60}
                        height={40}
                        className="w-15 h-10 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-primary-400 font-semibold text-sm">
                        Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Calculation */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Biaya Pengiriman:</span>
                    <span>Rp {shipping.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Biaya Admin:</span>
                    <span>Rp {adminFee.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <hr className="border-gray-600" />

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Total:</span>
                  <span className="text-xl font-bold text-primary-400">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                {/* Confirm Button */}
                <Button type="submit" className="w-full" disabled={processing} onClick={handleSubmit}>
                  {processing ? "Memproses..." : "Konfirmasi Pembayaran"}
                </Button>

                {/* Back to Cart */}
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cart">← Kembali ke Keranjang</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
