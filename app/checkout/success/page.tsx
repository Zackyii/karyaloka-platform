"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

interface OrderData {
  id: string
  items: Array<{
    id: string
    title: string
    price: number
    quantity: number
    image_url: string
    artist_name: string
  }>
  total: number
  subtotal: number
  shipping: number
  adminFee: number
  customerInfo: {
    fullName: string
    email: string
    address: string
    city: string
    postalCode: string
    phone: string
  }
  paymentMethod: string
  status: string
  date: string
}

export default function CheckoutSuccessPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order")

  useEffect(() => {
    const savedOrder = localStorage.getItem("last-order")
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder)
        if (order.id === orderId) {
          setOrderData(order)
        }
      } catch (error) {
        console.error("Error loading order data:", error)
      }
    }
  }, [orderId])

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "credit_card":
        return "Kartu Kredit/Debit"
      case "bank_transfer":
        return "Transfer Bank"
      case "e_wallet":
        return "E-Wallet"
      default:
        return method
    }
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Pembayaran Berhasil!</h1>
          <p className="text-gray-400">Terima kasih atas pembelian Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Info */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Package className="w-6 h-6 mr-3 text-primary-500" />
                  Detail Pesanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Order ID</p>
                    <p className="text-white font-mono">{orderData.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tanggal</p>
                    <p className="text-white">{new Date(orderData.date).toLocaleDateString("id-ID")}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Berhasil
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Metode Pembayaran</p>
                    <p className="text-white">{getPaymentMethodName(orderData.paymentMethod)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Items */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Item yang Dibeli</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
                      <Image
                        src={item.image_url || "/placeholder.svg?height=60&width=80"}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="w-20 h-15 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-gray-400 text-sm">by {item.artist_name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary-400 font-semibold">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MapPin className="w-6 h-6 mr-3 text-primary-500" />
                  Alamat Pengiriman
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300">
                  <p className="font-medium text-white">{orderData.customerInfo.fullName}</p>
                  <p>{orderData.customerInfo.address}</p>
                  <p>
                    {orderData.customerInfo.city}, {orderData.customerInfo.postalCode}
                  </p>
                  <p>{orderData.customerInfo.phone}</p>
                  <p>{orderData.customerInfo.email}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Ringkasan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span>Rp {orderData.subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Biaya Pengiriman:</span>
                    <span>Rp {orderData.shipping.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Biaya Admin:</span>
                    <span>Rp {orderData.adminFee.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <hr className="border-gray-600" />

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Total:</span>
                  <span className="text-xl font-bold text-primary-400">
                    Rp {orderData.total.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full">
                    <Link href="/artworks">Lanjut Belanja</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">Kembali ke Beranda</Link>
                  </Button>
                </div>

                {/* Next Steps */}
                <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Langkah Selanjutnya:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Konfirmasi email akan dikirim</li>
                    <li>• Pesanan akan diproses dalam 1-2 hari</li>
                    <li>• Estimasi pengiriman 3-7 hari kerja</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
