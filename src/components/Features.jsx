import { MapPin, Filter, Calendar, Bookmark } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: MapPin, title: 'Near Me', desc: 'Instantly find what’s happening around you with precise geolocation.' },
    { icon: Filter, title: 'Powerful Filters', desc: 'Category, date, free/paid, and distance — refine in seconds.' },
    { icon: Calendar, title: 'Event Pages', desc: 'Beautiful details with images, lineup, directions, and tickets.' },
    { icon: Bookmark, title: 'Save Events', desc: 'Bookmark for later. Sign in optional for the MVP.' },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Designed for explorers</h2>
        <p className="mt-2 text-slate-600">Fast, location-first, and ready for AFCON scale.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
