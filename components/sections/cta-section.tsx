import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          Bergabung dengan Ribuan Seniman
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Siap Memulai Perjalanan
          <span className="block">Seni Digital Anda?</span>
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan komunitas seniman dan kolektor terbesar di Indonesia. Mulai jual beli karya seni digital
          hari ini!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Link href="/auth/register" className="flex items-center">
              Daftar Gratis Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
          >
            <Link href="/artworks">Jelajahi Karya</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
