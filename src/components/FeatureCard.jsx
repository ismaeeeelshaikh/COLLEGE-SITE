export default function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 rounded-2xl bg-white shadow-sm border">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}
