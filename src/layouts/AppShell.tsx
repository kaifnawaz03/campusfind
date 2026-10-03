import {
  BriefcaseBusiness,
  FileText,
  LayoutDashboard,
  Menu,
  Sparkles,
  UserRound,
  X,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import type { ReactNode } from "react"
import { useState } from "react"

type AppShellProps = {
  children: ReactNode
}

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Opportunities",
    path: "/opportunities",
    icon: BriefcaseBusiness,
  },
  {
    label: "Applications",
    path: "/applications",
    icon: FileText,
  },
  {
    label: "AI Preparation",
    path: "/ai-preparation",
    icon: Sparkles,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
]

function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 bg-[#101827] lg:flex lg:flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#101827] transition-transform duration-200 lg:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Brand />

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <MobileNavigation
          onNavigate={() => setMobileOpen(false)}
        />
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-[#f7f9fc]/90 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="rounded-lg p-2 text-slate-600 transition hover:bg-white lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">
                CareerPilot
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                Your career command center
              </p>
            </div>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172033] text-sm font-semibold text-white shadow-sm">
            S
          </button>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
        <Sparkles size={17} strokeWidth={2} />
      </div>

      <div>
        <p className="text-base font-semibold tracking-tight text-white">
          CareerPilot
        </p>

        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
          Career intelligence
        </p>
      </div>
    </div>
  )
}

function SidebarContent() {
  return (
    <>
      <div className="flex h-16 items-center border-b border-white/10 px-5">
        <Brand />
      </div>

      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Workspace
        </p>

        <NavigationLinks />
      </nav>

      <ProfileFooter />
    </>
  )
}

function MobileNavigation({
  onNavigate,
}: {
  onNavigate: () => void
}) {
  return (
    <div className="flex h-[calc(100%-4rem)] flex-col">
      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Workspace
        </p>

        <NavigationLinks onNavigate={onNavigate} />
      </nav>

      <ProfileFooter />
    </div>
  )
}

function NavigationLinks({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  return (
    <div className="space-y-1">
      {navigation.map((item) => {
        const Icon = item.icon

        return (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-950/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon
              size={17}
              strokeWidth={1.8}
              className="shrink-0"
            />

            {item.label}
          </NavLink>
        )
      })}
    </div>
  )
}

function ProfileFooter() {
  return (
    <div className="border-t border-white/10 p-4">
      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
          S
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            Student
          </p>

          <p className="truncate text-xs text-slate-500">
            Career profile
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppShell