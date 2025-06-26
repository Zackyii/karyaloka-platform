import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Upload, ShoppingCart, Star } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Daftar Akun",
    description: "Buat akun gratis sebagai seniman atau kolektor untuk memulai perjalanan seni digital Anda",
  },
  {
    icon: Upload,
    title: "Upload Karya",
    description: "Seniman dapat mengunggah dan menjual karya seni digital mereka dengan mudah",
  },
  {
    icon: ShoppingCart,
    title: "Jual Beli Karya",
    description: "Kolektor dapat menemukan dan membeli karya seni digital unik dari berbagai seniman",
  },
  {
    icon: Star,
    title: "Bangun Komunitas",
    description: "Berinteraksi dengan komunitas seniman dan kolektor, berbagi inspirasi dan feedback",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cara Kerja KaryaLoka</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empat langkah mudah untuk memulai perjalanan seni digital Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="border border-gray-700 relative">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-lg mx-auto mb-4 mt-4">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
