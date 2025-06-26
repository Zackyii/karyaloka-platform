"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/providers/auth-provider"
import { supabase } from "@/lib/supabase-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Package, CreditCard, TrendingUp, Eye } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect as useEffectOnce } from "react"

interface Transaction {
  id: string
  total_amount: number
  status: string
  payment_method: string
  created_at: string
  order_items: {
    artwork: {
      title: string
      price: number
    }
    quantity: number
  }[]
}

export default function TransactionsPage() {
  const { user, profile } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [showSuccess, setShowSuccess] = useState(false)

  useEffectOnce(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [searchParams])

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
      return
    }
    fetchTransactions()
  }, [user])

  const fetchTransactions = async () => {
    try {
      let query = supabase
        .from("orders")
        .select(`
          id,
          total_amount,
          status,
          payment_method,
          created_at,
          order_items (
            quantity,
            artwork:artworks (
              title,
              price
            )
          )
        `)
        .order("created_at", { ascending: false })

      if (profile?.role === "collector") {
        query = query.eq("user_id", user?.id)
      }

      const { data, error } = await query

      if (error) throw error
      setTransactions(data || [])
    } catch (error) {
      console.error("Error fetching transactions:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalEarnings = transactions.filter((t) => t.status === "paid").reduce((sum, t) => sum + t.total_amount, 0)

  const pendingOrders = transactions.filter((t) => t.status === "pending").length
  const completedOrders = transactions.filter((t) => t.status === "delivered").length

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
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
            ✅ Pembayaran berhasil diproses! Pesanan Anda sedang diproses.
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            {profile?.role === "artist" ? "Kelola Transaksi" : "Riwayat Transaksi"}
          </h1>
          <p className="text-gray-300 mt-2">
            {profile?.role === "artist" ? "Pantau penjualan dan earnings Anda" : "Lihat riwayat pembelian Anda"}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">
                    {profile?.role === "artist" ? "Total Earnings" : "Total Pembelian"}
                  </p>
                  <p className="text-2xl font-bold text-white">Rp {totalEarnings.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Package className="w-8 h-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Pesanan Pending</p>
                  <p className="text-2xl font-bold text-white">{pendingOrders}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Pesanan Selesai</p>
                  <p className="text-2xl font-bold text-white">{completedOrders}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-gray-800/50 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari berdasarkan ID pesanan..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Dibayar</SelectItem>
                  <SelectItem value="shipped">Dikirim</SelectItem>
                  <SelectItem value="delivered">Selesai</SelectItem>
                  <SelectItem value="cancelled">Dibatalkan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              Menampilkan {filteredTransactions.length} dari {transactions.length} transaksi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-gray-300">ID Pesanan</th>
                    <th className="text-left py-3 px-4 text-gray-300">Item</th>
                    <th className="text-left py-3 px-4 text-gray-300">Total</th>
                    <th className="text-left py-3 px-4 text-gray-300">Metode Pembayaran</th>
                    <th className="text-left py-3 px-4 text-gray-300">Status</th>
                    <th className="text-left py-3 px-4 text-gray-300">Tanggal</th>
                    <th className="text-left py-3 px-4 text-gray-300">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-3 px-4">
                        <span className="text-white font-mono text-sm">#{transaction.id.slice(0, 8)}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          {transaction.order_items.map((item, index) => (
                            <p key={index} className="text-white text-sm">
                              {item.artwork.title} (x{item.quantity})
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-primary-400 font-semibold">
                          Rp {transaction.total_amount.toLocaleString("id-ID")}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-300 capitalize">{transaction.payment_method.replace("_", " ")}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            transaction.status === "delivered"
                              ? "default"
                              : transaction.status === "paid"
                                ? "secondary"
                                : transaction.status === "cancelled"
                                  ? "destructive"
                                  : "outline"
                          }
                          className={
                            transaction.status === "delivered"
                              ? "bg-green-600 text-white"
                              : transaction.status === "paid"
                                ? "bg-blue-600 text-white"
                                : transaction.status === "shipped"
                                  ? "bg-purple-600 text-white"
                                  : transaction.status === "cancelled"
                                    ? "bg-red-600 text-white"
                                    : "border-yellow-500 text-yellow-500"
                          }
                        >
                          {transaction.status === "pending"
                            ? "Pending"
                            : transaction.status === "paid"
                              ? "Dibayar"
                              : transaction.status === "shipped"
                                ? "Dikirim"
                                : transaction.status === "delivered"
                                  ? "Selesai"
                                  : "Dibatalkan"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-300">
                          {new Date(transaction.created_at).toLocaleDateString("id-ID")}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-primary-400 hover:text-primary-300">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">Tidak ada transaksi yang ditemukan</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
