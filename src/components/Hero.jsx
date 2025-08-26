export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-600 via-indigo-500 to-sky-500"></div>
      <div className="container-fluid py-16 md:py-24 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Welcome to Shah Institute of Technology</h2>
            <p className="mt-4 text-base md:text-lg text-white/90">Learn. Build. Grow. A modern campus focused on practical learning and placements.</p>
            <div className="mt-6 flex gap-3">
              <a href="#admissions" className="inline-block bg-white text-primary-700 font-semibold px-4 py-2 rounded-xl">Apply Now</a>
              <a href="#about" className="inline-block bg-white/15 ring-1 ring-white/40 text-white px-4 py-2 rounded-xl">Explore</a>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop" alt="Campus overview"/>
            </div>
            <p className="text-sm text-white/80 mt-3">Recent Convocation Ceremony</p>
          </div>
        </div>
      </div>
    </section>
  )
}
