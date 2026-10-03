import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  XCircle,
} from "lucide-react"
import { Link } from "react-router-dom"
import { useMemo, useState } from "react"

type ApplicationStatus =
  | "Saved"
  | "Applied"
  | "Assessment"
  | "Interview"
  | "Offer"
  | "Rejected"

type Application = {
  id: string
  company: string
  role: string
  location: string
  appliedDate?: string
  nextAction?: string
  nextActionDate?: string
  lastUpdated: string
  status: ApplicationStatus
  match: number
}

const initialApplications: Application[] = [
  {
    id: "technova-frontend",
    company: "TechNova",
    role: "Frontend Engineer Intern",
    location: "Bengaluru · Hybrid",
    appliedDate: "Oct 2, 2026",
    nextAction: "Technical interview",
    nextActionDate: "Tomorrow",
    lastUpdated: "Today",
    status: "Interview",
    match: 94,
  },
  {
    id: "cloudstack-software",
    company: "CloudStack",
    role: "Software Engineer Intern",
    location: "Remote",
    appliedDate: "Sep 29, 2026",
    nextAction: "Complete assessment",
    nextActionDate: "Oct 5",
    lastUpdated: "Yesterday",
    status: "Assessment",
    match: 89,
  },
  {
    id: "buildly-fullstack",
    company: "Buildly",
    role: "Full Stack Developer Intern",
    location: "Pune · On-site",
    appliedDate: "Sep 25, 2026",
    nextAction: "Waiting for response",
    lastUpdated: "Sep 30",
    status: "Applied",
    match: 86,
  },
  {
    id: "launchlabs-product",
    company: "LaunchLabs",
    role: "Product Engineer Intern",
    location: "Remote",
    appliedDate: "Sep 21, 2026",
    nextAction: "Waiting for response",
    lastUpdated: "Sep 28",
    status: "Applied",
    match: 78,
  },
  {
    id: "dataforge-backend",
    company: "DataForge",
    role: "Backend Engineer Intern",
    location: "Hyderabad · Hybrid",
    lastUpdated: "Sep 26",
    status: "Saved",
    match: 82,
  },
  {
    id: "insightworks-data",
    company: "InsightWorks",
    role: "Data Analyst Intern",
    location: "Mumbai · On-site",
    appliedDate: "Sep 17, 2026",
    nextAction: "Application closed",
    lastUpdated: "Sep 24",
    status: "Rejected",
    match: 74,
  },
]

function Applications() {
  const [applications] = useState(initialApplications)
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase()

    return applications.filter((application) => {
      const matchesStatus =
        activeFilter === "All" ||
        application.status === activeFilter

      const matchesSearch =
        !query ||
        application.company.toLowerCase().includes(query) ||
        application.role.toLowerCase().includes(query)

      return matchesStatus && matchesSearch
    })
  }, [applications, activeFilter, search])

  const counts = {
    total: applications.length,
    active: applications.filter(
      (item) =>
        item.status !== "Rejected" &&
        item.status !== "Saved",
    ).length,
    interviews: applications.filter(
      (item) => item.status === "Interview",
    ).length,
    offers: applications.filter(
      (item) => item.status === "Offer",
    ).length,
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#eef2f7",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        {/* Header */}
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  background: "#e8f1ff",
                  color: "#1769e0",
                }}
              >
                <FileText size={16} />
              </div>

              <span
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  color: "#1769e0",
                }}
              >
                Application tracker
              </span>
            </div>

            <h1
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{
                color: "#0f172a",
              }}
            >
              Keep every application moving
            </h1>

            <p
              className="mt-2 max-w-2xl text-sm leading-6 sm:text-base"
              style={{
                color: "#64748b",
              }}
            >
              Track where you are, what comes next, and which
              applications need your attention.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white"
            style={{
              background: "#1769e0",
              boxShadow: "0 7px 16px rgba(23,105,224,0.18)",
            }}
          >
            <Plus size={17} />
            Find opportunities
          </Link>
        </section>

        {/* Summary */}
        <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <SummaryCard
            icon={FileText}
            label="Total applications"
            value={String(counts.total)}
            detail="Across all stages"
          />

          <SummaryCard
            icon={Clock3}
            label="Active applications"
            value={String(counts.active)}
            detail="Currently in progress"
          />

          <SummaryCard
            icon={CalendarDays}
            label="Interviews"
            value={String(counts.interviews)}
            detail="Upcoming stage"
          />

          <SummaryCard
            icon={CheckCircle2}
            label="Offers"
            value={String(counts.offers)}
            detail="Successful outcomes"
          />
        </section>

        {/* Pipeline */}
        <section
          className="mt-5 overflow-hidden rounded-2xl border bg-white shadow-sm"
          style={{
            borderColor: "#dbe3ed",
          }}
        >
          <div className="border-b px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2
                  className="text-base font-semibold"
                  style={{
                    color: "#0f172a",
                  }}
                >
                  Application pipeline
                </h2>

                <p
                  className="mt-1 text-xs"
                  style={{
                    color: "#71839b",
                  }}
                >
                  Move through each stage of your job search.
                </p>
              </div>

              <div
                className="flex items-center gap-2 text-xs"
                style={{
                  color: "#64748b",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "#3b82f6",
                  }}
                />
                {counts.active} active applications
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              <PipelineStage
                label="Saved"
                count={applications.filter(
                  (item) => item.status === "Saved",
                ).length}
                active={activeFilter === "Saved"}
                onClick={() => setActiveFilter("Saved")}
              />

              <PipelineStage
                label="Applied"
                count={applications.filter(
                  (item) => item.status === "Applied",
                ).length}
                active={activeFilter === "Applied"}
                onClick={() => setActiveFilter("Applied")}
              />

              <PipelineStage
                label="Assessment"
                count={applications.filter(
                  (item) => item.status === "Assessment",
                ).length}
                active={activeFilter === "Assessment"}
                onClick={() => setActiveFilter("Assessment")}
              />

              <PipelineStage
                label="Interview"
                count={applications.filter(
                  (item) => item.status === "Interview",
                ).length}
                active={activeFilter === "Interview"}
                onClick={() => setActiveFilter("Interview")}
              />

              <PipelineStage
                label="Offer"
                count={applications.filter(
                  (item) => item.status === "Offer",
                ).length}
                active={activeFilter === "Offer"}
                onClick={() => setActiveFilter("Offer")}
              />

              <PipelineStage
                label="Rejected"
                count={applications.filter(
                  (item) => item.status === "Rejected",
                ).length}
                active={activeFilter === "Rejected"}
                onClick={() => setActiveFilter("Rejected")}
              />
            </div>
          </div>

          {/* Search */}
          <div
            className="border-b px-5 py-4 sm:px-6"
            style={{
              borderColor: "#edf1f6",
            }}
          >
            <div
              className="flex h-11 max-w-xl items-center gap-3 rounded-xl px-3.5"
              style={{
                background: "#f7f9fc",
                border: "1px solid #e5eaf1",
              }}
            >
              <Search
                size={17}
                style={{
                  color: "#91a3ba",
                }}
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search applications..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
                style={{
                  color: "#172033",
                }}
              />
            </div>
          </div>

          {/* Applications */}
          <div>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((application) => (
                <ApplicationRow
                  key={application.id}
                  application={application}
                />
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "#f1f5f9",
                    color: "#64748b",
                  }}
                >
                  <Search size={20} />
                </div>

                <h3
                  className="mt-4 text-sm font-semibold"
                  style={{
                    color: "#0f172a",
                  }}
                >
                  No applications found
                </h3>

                <p
                  className="mt-1 text-xs"
                  style={{
                    color: "#64748b",
                  }}
                >
                  Try another search or status filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom insight */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
          <section
            className="rounded-2xl border bg-white p-6 shadow-sm"
            style={{
              borderColor: "#dbe3ed",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "#eef5ff",
                  color: "#1769e0",
                }}
              >
                <Sparkles size={18} />
              </div>

              <div>
                <h2
                  className="text-sm font-semibold"
                  style={{
                    color: "#0f172a",
                  }}
                >
                  AI application insight
                </h2>

                <p
                  className="mt-0.5 text-xs"
                  style={{
                    color: "#71839b",
                  }}
                >
                  Based on your current application pipeline.
                </p>
              </div>
            </div>

            <p
              className="mt-5 max-w-2xl text-sm leading-6"
              style={{
                color: "#52657e",
              }}
            >
              You have an upcoming technical interview with
              TechNova. Your profile already has a strong match
              score, so focus your preparation on frontend
              system design, React fundamentals and testing.
            </p>

            <Link
              to="/ai-preparation"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold"
              style={{
                color: "#1769e0",
              }}
            >
              Open AI preparation
              <ArrowUpRight size={14} />
            </Link>
          </section>

          <section
            className="rounded-2xl p-6"
            style={{
              background: "#101827",
            }}
          >
            <div className="flex items-center gap-2">
              <BriefcaseBusiness
                size={17}
                style={{
                  color: "#60a5fa",
                }}
              />

              <p
                className="text-sm font-semibold"
                style={{
                  color: "#ffffff",
                }}
              >
                Keep momentum
              </p>
            </div>

            <p
              className="mt-4 text-xl font-semibold leading-7"
              style={{
                color: "#ffffff",
              }}
            >
              2 applications need attention.
            </p>

            <p
              className="mt-2 text-xs leading-5"
              style={{
                color: "#94a3b8",
              }}
            >
              Review your assessment and interview preparation
              before their next steps.
            </p>

            <Link
              to="/ai-preparation"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold"
              style={{
                color: "#60a5fa",
              }}
            >
              Prepare now
              <ChevronRight size={14} />
            </Link>
          </section>
        </section>
      </div>
    </div>
  )
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof FileText
  label: string
  value: string
  detail: string
}) {
  return (
    <div
      className="rounded-2xl border bg-white p-4 shadow-sm sm:p-5"
      style={{
        borderColor: "#dbe3ed",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{
            background: "#eef5ff",
            color: "#1769e0",
          }}
        >
          <Icon size={17} />
        </div>

        <MoreHorizontal
          size={16}
          style={{
            color: "#a0aec0",
          }}
        />
      </div>

      <p
        className="mt-5 text-2xl font-semibold"
        style={{
          color: "#0f172a",
        }}
      >
        {value}
      </p>

      <p
        className="mt-1 text-xs font-medium"
        style={{
          color: "#52657e",
        }}
      >
        {label}
      </p>

      <p
        className="mt-1 text-[10px]"
        style={{
          color: "#94a3b8",
        }}
      >
        {detail}
      </p>
    </div>
  )
}

function PipelineStage({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl px-3 py-3 text-left transition"
      style={{
        background: active ? "#eef5ff" : "#f7f9fc",
        border: active
          ? "1px solid #cfe0ff"
          : "1px solid #edf1f6",
      }}
    >
      <p
        className="text-[10px] font-medium"
        style={{
          color: active ? "#1769e0" : "#71839b",
        }}
      >
        {label}
      </p>

      <p
        className="mt-1 text-lg font-semibold"
        style={{
          color: active ? "#1256bd" : "#172033",
        }}
      >
        {count}
      </p>
    </button>
  )
}

function ApplicationRow({
  application,
}: {
  application: Application
}) {
  return (
    <div
      className="group border-b px-5 py-5 transition hover:bg-slate-50 sm:px-6"
      style={{
        borderColor: "#edf1f6",
      }}
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
        {/* Company */}
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white"
            style={{
              background: "#101827",
            }}
          >
            {application.company.charAt(0)}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="truncate text-sm font-semibold"
                style={{
                  color: "#0f172a",
                }}
              >
                {application.role}
              </h3>

              <StatusBadge status={application.status} />
            </div>

            <p
              className="mt-1 text-xs font-medium"
              style={{
                color: "#52657e",
              }}
            >
              {application.company}
            </p>

            <p
              className="mt-1 text-[11px]"
              style={{
                color: "#94a3b8",
              }}
            >
              {application.location}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="min-w-[130px]">
          <p
            className="text-[10px] font-medium uppercase tracking-wide"
            style={{
              color: "#9aa9bb",
            }}
          >
            {application.status === "Saved"
              ? "Saved"
              : "Applied"}
          </p>

          <p
            className="mt-1 text-xs font-medium"
            style={{
              color: "#52657e",
            }}
          >
            {application.appliedDate || "Not applied yet"}
          </p>
        </div>

        {/* Next action */}
        <div className="min-w-[190px]">
          <p
            className="text-[10px] font-medium uppercase tracking-wide"
            style={{
              color: "#9aa9bb",
            }}
          >
            Next action
          </p>

          <p
            className="mt-1 text-xs font-medium"
            style={{
              color:
                application.status === "Interview"
                  ? "#1769e0"
                  : "#52657e",
            }}
          >
            {application.nextAction || "Continue when ready"}
          </p>

          {application.nextActionDate && (
            <p
              className="mt-1 text-[10px]"
              style={{
                color: "#94a3b8",
              }}
            >
              {application.nextActionDate}
            </p>
          )}
        </div>

        {/* Match */}
        <div className="flex items-center gap-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              background:
                application.match >= 85
                  ? "#edf5ff"
                  : "#f5f7fa",
              color:
                application.match >= 85
                  ? "#1769e0"
                  : "#52657e",
            }}
          >
            <span className="text-[10px] font-bold">
              {application.match}%
            </span>
          </div>

          <span
            className="hidden text-[10px] sm:block"
            style={{
              color: "#94a3b8",
            }}
          >
            match
          </span>
        </div>

        {/* Action */}
        <Link
          to={`/applications/${application.id}`}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl px-4 text-xs font-semibold transition"
          style={{
            background: "#101827",
            color: "#ffffff",
          }}
        >
          View
          <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  )
}

function StatusBadge({
  status,
}: {
  status: ApplicationStatus
}) {
  const styles: Record<
    ApplicationStatus,
    { background: string; color: string }
  > = {
    Saved: {
      background: "#f1f5f9",
      color: "#52657e",
    },
    Applied: {
      background: "#edf5ff",
      color: "#1769e0",
    },
    Assessment: {
      background: "#fff7ed",
      color: "#c2410c",
    },
    Interview: {
      background: "#eef2ff",
      color: "#4f46e5",
    },
    Offer: {
      background: "#ecfdf5",
      color: "#15803d",
    },
    Rejected: {
      background: "#fef2f2",
      color: "#dc2626",
    },
  }

  const current = styles[status]

  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold"
      style={{
        background: current.background,
        color: current.color,
      }}
    >
      {status === "Offer" && <CheckCircle2 size={10} />}
      {status === "Rejected" && <XCircle size={10} />}
      {status}
    </span>
  )
}

export default Applications