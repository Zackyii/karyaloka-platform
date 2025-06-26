import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Tentang KaryaLoka</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Platform yang menghubungkan seniman digital dengan kolektor, menciptakan ekosistem seni digital yang
              berkelanjutan dan inspiratif.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-primary-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Misi Kami</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Memberdayakan seniman digital Indonesia untuk berkarya, berbagi, dan menghasilkan dari kreativitas
                    mereka melalui platform yang aman, mudah digunakan, dan terpercaya.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-primary-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Visi Kami</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Menjadi platform seni digital terdepan di Asia Tenggara yang menghubungkan seniman dengan kolektor,
                    menciptakan ekosistem seni digital yang berkelanjutan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nilai-Nilai Kami</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Prinsip yang memandu setiap langkah perjalanan KaryaLoka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-700 text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Komunitas</h3>
                  <p className="text-gray-300">Membangun komunitas yang saling mendukung antara seniman dan kolektor</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700 text-center">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Kualitas</h3>
                  <p className="text-gray-300">Mengutamakan kualitas karya seni dan pengalaman pengguna terbaik</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700 text-center">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Passion</h3>
                  <p className="text-gray-300">Didorong oleh kecintaan terhadap seni dan teknologi digital</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tim Kami</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Orang-orang passionate yang bekerja keras untuk mewujudkan visi KaryaLoka
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmad Rizki",
                  role: "Founder & CEO",
                  description: "Visioner di balik KaryaLoka dengan pengalaman 10+ tahun di industri teknologi",
                },
                {
                  name: "Sarah Putri",
                  role: "Head of Design",
                  description: "Seniman digital berpengalaman yang memahami kebutuhan komunitas kreatif",
                },
                {
                  name: "David Chen",
                  role: "CTO",
                  description: "Expert teknologi yang memastikan platform berjalan dengan optimal",
                },
              ].map((member, index) => (
                <Card key={index} className="border border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
