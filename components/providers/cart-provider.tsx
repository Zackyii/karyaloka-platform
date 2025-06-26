"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CartItem {
  id: string
  artwork_id: string
  title: string
  price: number
  image_url: string
  artist_name: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (artwork: Omit<CartItem, "quantity">) => void
  removeFromCart: (artworkId: string) => void
  updateQuantity: (artworkId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("karyaloka-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("karyaloka-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (artwork: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.artwork_id === artwork.artwork_id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.artwork_id === artwork.artwork_id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        return [...prevItems, { ...artwork, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (artworkId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.artwork_id !== artworkId))
  }

  const updateQuantity = (artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artworkId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.artwork_id === artworkId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
