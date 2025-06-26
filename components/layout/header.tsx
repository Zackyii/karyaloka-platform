import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="/articles" className="text-white/80 hover:text-white transition-colors">
                Artikel
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-white/80 hover:text-white transition-colors">
                Keranjang
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

// Tambahkan juga default export untuk fleksibilitas
export default Header
