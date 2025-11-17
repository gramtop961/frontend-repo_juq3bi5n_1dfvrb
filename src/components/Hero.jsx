import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#0F172A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 flex items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 mr-2 rounded-full bg-purple-500 inline-block" />
            AFCON ready • Discover tonight near you
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Kujivinjari
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400"> Location‑first nightlife & lifestyle </span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Find clubs, food, concerts, and live shows around you. Real-time map, curated lists, and fast search.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
            <input placeholder="Search events, clubs, eats" className="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 font-semibold hover:from-purple-500 hover:to-purple-400">Search</button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/80">
            <button className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/15">Use my location</button>
            <span className="opacity-60">•</span>
            <button className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/15">Map view</button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]" />
    </section>
  )
}
