import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What’s happening</h2>
          <p className="mt-2 text-slate-600">Sample list powered by the backend. Use the Test page to verify connection.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-2xl border border-slate-100 p-4 shadow-sm">
                <div className="h-40 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400/80" />
                <h3 className="mt-4 font-semibold">Featured event {i}</h3>
                <p className="text-sm text-slate-600">Vibrant nightlife and experiences near you.</p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-lg bg-slate-100 px-3 py-1 text-sm">Details</button>
                  <button className="rounded-lg bg-purple-600 text-white px-3 py-1 text-sm">Save</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/test" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Backend test</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
