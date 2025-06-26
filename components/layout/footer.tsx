import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary-500 mb-4 block">
              KaryaLoka
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Platform terdepan untuk seniman digital berbagi kreativitas dan kolektor menemukan karya seni unik.
              Bergabunglah dengan komunitas seni digital terbesar di Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artworks" className="text-gray-400 hover:text-white transition-colors">
                  Jelajahi Karya
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-gray-400 hover:text-white transition-colors">
                  Bergabung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                info@karyaloka.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +62 21 1234 5678
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 KaryaLoka. Semua hak dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
