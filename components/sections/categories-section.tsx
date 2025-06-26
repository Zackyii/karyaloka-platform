import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Camera, Brush, Sparkles, User, Mountain, Wand2, ImageIcon } from "lucide-react"

const categories = [
  {
    name: "Digital Art",
    icon: Palette,
    description: "Karya seni digital modern",
    count: "150+ karya",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Fotografi artistik",
    count: "200+ karya",
  },
  {
    name: "Illustration",
    icon: Brush,
    description: "Ilustrasi kreatif",
    count: "180+ karya",
  },
  {
    name: "Abstract",
    icon: Sparkles,
    description: "Seni abstrak unik",
    count: "120+ karya",
  },
  {
    name: "Portrait",
    icon: User,
    description: "Potret dan karakter",
    count: "90+ karya",
  },
  {
    name: "Landscape",
    icon: Mountain,
    description: "Pemandangan indah",
    count: "110+ karya",
  },
  {
    name: "Fantasy",
    icon: Wand2,
    description: "Dunia fantasi",
    count: "160+ karya",
  },
  {
    name: "3D Art",
    icon: ImageIcon,
    description: "Karya seni 3D",
    count: "80+ karya",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jelajahi Kategori</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Temukan karya seni sesuai dengan minat dan preferensi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.name}
                className="border border-gray-700 hover:border-primary-500 transition-all duration-300 group cursor-pointer"
              >
                <Link href={`/artworks?category=${encodeURIComponent(category.name)}`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-lg mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                    <p className="text-primary-400 text-sm font-medium">{category.count}</p>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/artworks">Lihat Semua Kategori</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
