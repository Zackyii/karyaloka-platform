import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/components/providers/cart-provider"

export const metadata: Metadata = {
  title: "KaryaLoka",
  description: "KaryaLoka",
  generator: "KaryaLoka",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
