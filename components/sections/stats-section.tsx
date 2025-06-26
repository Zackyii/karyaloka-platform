export function StatsSection() {
  return (
    <section className="py-16 bg-gray-800 border-y border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">1K+</div>
            <div className="text-gray-400">Karya Terjual</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">50K+</div>
            <div className="text-gray-400">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">99%</div>
            <div className="text-gray-400">Kepuasan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
