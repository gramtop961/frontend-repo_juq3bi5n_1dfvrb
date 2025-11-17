export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 sm:grid-cols-3 items-center">
        <div>
          <p className="text-white font-semibold">Kujivinjari</p>
          <p className="text-sm mt-1 text-white/60">Location‑first entertainment & lifestyle.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/15 text-sm">English</button>
          <button className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/15 text-sm">USD</button>
        </div>
        <div className="text-right text-sm text-white/60">© {new Date().getFullYear()} Kujivinjari</div>
      </div>
    </footer>
  )
}
