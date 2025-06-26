import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Artist",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "KaryaLoka telah mengubah cara saya menjual karya seni digital. Platform yang mudah digunakan dan komunitas yang supportif!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Art Collector",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Tempat terbaik untuk menemukan karya seni digital unik. Kualitas karya dan layanan pelanggan sangat memuaskan.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Freelance Illustrator",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Sebagai ilustrator freelance, KaryaLoka membantu saya menjangkau lebih banyak klien dan meningkatkan pendapatan.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apa Kata Mereka</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Dengarkan pengalaman seniman dan kolektor yang telah bergabung dengan KaryaLoka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-700">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary-400 mb-4" />

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
