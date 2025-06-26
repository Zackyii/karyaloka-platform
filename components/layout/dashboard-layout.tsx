"use client"

import type React from "react"

import { useAuth } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Palette,
  ShoppingBag,
  CreditCard,
  Settings,
  FileText,
  Users,
  BarChart3,
  Upload,
  Heart,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { profile } = useAuth()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["artist", "collector", "admin"],
    },
    {
      name: "Karya Saya",
      href: "/dashboard/artworks",
      icon: Palette,
      roles: ["artist"],
    },
    {
      name: "Upload Karya",
      href: "/dashboard/artworks/upload",
      icon: Upload,
      roles: ["artist"],
    },
    {
      name: "Pesanan",
      href: "/dashboard/orders",
      icon: ShoppingBag,
      roles: ["artist", "collector"],
    },
    {
      name: "Favorit",
      href: "/dashboard/favorites",
      icon: Heart,
      roles: ["collector"],
    },
    {
      name: "Riwayat Transaksi",
      href: "/dashboard/transactions",
      icon: CreditCard,
      roles: ["artist", "collector"],
    },
    {
      name: "Artikel Saya",
      href: "/dashboard/articles",
      icon: FileText,
      roles: ["artist", "admin"],
    },
    {
      name: "Kelola User",
      href: "/admin/users",
      icon: Users,
      roles: ["admin"],
    },
    {
      name: "Kelola Karya",
      href: "/admin/artworks",
      icon: Palette,
      roles: ["admin"],
    },
    {
      name: "Kelola Artikel",
      href: "/admin/articles",
      icon: FileText,
      roles: ["admin"],
    },
    {
      name: "Kelola Transaksi",
      href: "/admin/transactions",
      icon: CreditCard,
      roles: ["admin"],
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      roles: ["admin"],
    },
    {
      name: "Pengaturan",
      href: "/dashboard/settings",
      icon: Settings,
      roles: ["artist", "collector", "admin"],
    },
  ]

  const filteredNavigation = navigation.filter((item) => item.roles.includes(profile?.role || "collector"))

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-bold text-primary-500">
            KaryaLoka
          </Link>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center px-6 py-4 border-b border-gray-700">
              <Link href="/" className="text-xl font-bold text-primary-500">
                KaryaLoka
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {filteredNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive ? "bg-primary-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700",
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Back to Site */}
            <div className="p-4 border-t border-gray-700">
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Kembali ke Situs</Link>
              </Button>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
