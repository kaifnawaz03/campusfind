import { ArrowUpRight, CircleHelp, MapPin, Menu, PackageSearch, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { useState, type ReactNode } from "react"

export default function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#17211f]">
      <header className="sticky top-0 z-30 border-b border-[#e6e2d8] bg-[#f6f4ee]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <Link to="/dashboard" className="flex items-center gap-3" aria-label="Campus Reclaim home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#27634f] text-white"><PackageSearch size={20} /></span>
            <span><span className="block text-[15px] font-bold tracking-tight">Campus Reclaim</span><span className="hidden text-[10px] font-semibold uppercase tracking-[.17em] text-[#7c837c] sm:block">Lost here. Found here.</span></span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
            <NavLink to="/dashboard" className={({isActive}) => `rounded-lg px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-[#e7ebe3] text-[#27634f]" : "text-[#68736f] hover:bg-white"}`}>Recovery desk</NavLink>
            <a href="#how-it-works" className="rounded-lg px-4 py-2 text-sm font-medium text-[#68736f] hover:bg-white">How it works</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:campus.security@example.edu" className="hidden items-center gap-2 text-sm font-medium text-[#68736f] hover:text-[#17211f] md:flex"><CircleHelp size={16}/> Help desk</a>
            <span className="hidden h-8 w-px bg-[#e2ded4] md:block" />
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="grid h-10 w-10 place-items-center rounded-lg border border-[#e2ded4] sm:hidden">{menuOpen ? <X size={18}/> : <Menu size={18}/>}</button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9e4d7] text-xs font-bold text-[#27634f]">AM</div>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#e6e2d8] px-5 py-3 sm:hidden"><NavLink onClick={() => setMenuOpen(false)} to="/dashboard" className="block rounded-lg px-3 py-3 text-sm font-semibold">Recovery desk</NavLink><a onClick={() => setMenuOpen(false)} href="#how-it-works" className="block rounded-lg px-3 py-3 text-sm">How it works</a></nav>}
      </header>
      <main>{children}</main>
      <footer className="mx-auto flex max-w-[1280px] flex-col gap-2 border-t border-[#e6e2d8] px-5 py-6 text-xs text-[#7c837c] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>Campus Reclaim <span className="mx-1">·</span> A safer way back to your things.</span>
        <span className="inline-flex items-center gap-1"><MapPin size={13}/> Campus Security &amp; Lost Property <ArrowUpRight size={12}/></span>
      </footer>
    </div>
  )
}
