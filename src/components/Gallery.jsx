import { gallery } from '../data'

export default function Gallery() {
  return (
    <section id="gallery" className="container-fluid py-12">
      <h2 className="text-2xl font-bold">Campus Gallery</h2>
      <p className="text-gray-600">Highlights from events and everyday campus life.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map(img => (
          <figure key={img.id} className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <img src={img.src} alt={img.alt} className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <figcaption className="px-2 py-2 text-xs text-gray-600">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
