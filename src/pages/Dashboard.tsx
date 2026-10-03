import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"

const recommendedJobs = [
  {
    company: "TechNova",
    role: "Frontend Engineer Intern",
    location: "Bengaluru · Hybrid",
    match: 94,
    skills: ["React", "TypeScript"],
  },
  {
    company: "CloudStack",
    role: "Software Engineer Intern",
    location: "Remote",
    match: 89,
    skills: ["Java", "Python"],
  },
  {
    company: "Buildly",
    role: "Full Stack Developer Intern",
    location: "Pune · On-site",
    match: 86,
    skills: ["React", "Node.js"],
  },
]

const nextActions = [
  {
    title: "Complete your profile",
    description: "Add your projects and experience.",
    path: "/profile",
    icon: Target,
  },
  {
    title: "Review new matches",
    description: "12 opportunities match your profile.",
    path: "/opportunities",
    icon: BriefcaseBusiness,
  },
  {
    title: "Prepare for interviews",
    description: "Practice questions for your target roles.",
    path: "/ai-preparation",
    icon: Sparkles,
  },
]

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#eef2f7]">
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* Hero */}
        <section className="rounded-3xl bg-[#101827] p-6 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-200">
                <TrendingUp size={14} />
                Career progress
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Good morning, Student.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Your career journey is moving forward. Here is what
                deserves your attention today.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/opportunities"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-400"
                >
                  Explore opportunities
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/profile"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Complete profile
                </Link>

              </div>
            </div>

            {/* Profile */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Profile strength
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-white">
                    82%
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-400/30 border-t-blue-400 text-xs font-semibold text-white">
                  82
                </div>

              </div>

              <div className="mt-5 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-blue-500" />
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Add your projects and experience to improve your
                recommendations.
              </p>
            </div>

          </div>
        </section>

        {/* Metrics */}
        <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">

          <MetricCard
            icon={Target}
            label="Profile completion"
            value="82%"
            detail="18% remaining"
          />

          <MetricCard
            icon={BriefcaseBusiness}
            label="Recommended"
            value="12"
            detail="3 new today"
          />

          <MetricCard
            icon={FileText}
            label="Applications"
            value="5"
            detail="2 need attention"
          />

          <MetricCard
            icon={CalendarDays}
            label="Interviews"
            value="2"
            detail="1 upcoming"
          />

        </section>

        {/* Main */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_380px]">

          {/* Recommendations */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">

              <div>
                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Sparkles size={16} />
                  </div>

                  <h2 className="text-base font-semibold text-slate-950">
                    Recommended for you
                  </h2>

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Roles with the strongest match to your profile.
                </p>
              </div>

              <Link
                to="/opportunities"
                className="hidden items-center gap-1 text-sm font-semibold text-blue-600 sm:flex"
              >
                View all
                <ChevronRight size={15} />
              </Link>

            </div>

            <div className="divide-y divide-slate-100">

              {recommendedJobs.map((job) => (
                <RecommendationRow
                  key={job.company}
                  {...job}
                />
              ))}

            </div>

          </section>

          {/* Right */}
          <div className="space-y-5">

            {/* Next actions */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-100 px-5 py-5">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <CheckCircle2 size={16} />
                  </div>

                  <h2 className="text-base font-semibold text-slate-950">
                    Your next moves
                  </h2>

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Small actions that keep your search moving.
                </p>

              </div>

              <div className="divide-y divide-slate-100">

                {nextActions.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="group flex gap-3 px-5 py-4 hover:bg-slate-50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-3">

                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>

                          <ChevronRight
                            size={15}
                            className="shrink-0 text-slate-400"
                          />

                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>

                      </div>
                    </Link>
                  )
                })}

              </div>

            </section>

            {/* AI */}
            <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white shadow-lg">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                  <Sparkles size={16} />
                </div>

                <p className="text-sm font-semibold text-white">
                  AI career insight
                </p>

              </div>

              <p className="mt-4 text-sm font-semibold leading-6 text-white">
                Your profile is strongest for frontend and
                full-stack internship roles.
              </p>

              <p className="mt-2 text-xs leading-5 text-blue-100">
                Adding one more frontend project and your recent
                experience could improve your match quality.
              </p>

              <Link
                to="/ai-preparation"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white"
              >
                Explore AI preparation
                <ArrowRight size={14} />
              </Link>

            </section>

            {/* Upcoming */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Clock3 size={16} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-950">
                    Upcoming
                  </h2>

                  <p className="text-xs text-slate-500">
                    Keep these on your radar.
                  </p>
                </div>

              </div>

              <div className="mt-4 rounded-xl bg-slate-50 p-3.5">

                <div className="flex items-center justify-between gap-3">

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Technical interview
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Frontend Engineer · TechNova
                    </p>
                  </div>

                  <span className="rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">
                    Tomorrow
                  </span>

                </div>

              </div>

            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Target
  label: string
  value: string
  detail: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      <div className="flex items-start justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={17} />
        </div>

        <span className="text-[10px] font-medium text-slate-400">
          {detail}
        </span>

      </div>

      <p className="mt-5 text-2xl font-semibold text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-500">
        {label}
      </p>

    </div>
  )
}

function RecommendationRow({
  company,
  role,
  location,
  match,
  skills,
}: {
  company: string
  role: string
  location: string
  match: number
  skills: string[]
}) {
  return (
    <Link
      to="/opportunities/frontend-engineer-1"
      className="group flex flex-col gap-4 px-5 py-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:px-6"
    >

      <div className="flex min-w-0 flex-1 items-center gap-3">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#101827] text-sm font-semibold text-white">
          {company.charAt(0)}
        </div>

        <div className="min-w-0">

          <p className="truncate text-sm font-semibold text-slate-950">
            {role}
          </p>

          <p className="mt-0.5 text-xs font-medium text-slate-600">
            {company}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {location}
          </p>

        </div>

      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">

        <div className="flex gap-1.5">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}

        </div>

        <div className="flex items-center gap-2">

          <div className="text-right">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Match
            </p>

            <p className="text-sm font-bold text-blue-600">
              {match}%
            </p>
          </div>

          <ChevronRight
            size={17}
            className="text-slate-400"
          />

        </div>

      </div>

    </Link>
  )
}

export default Dashboard