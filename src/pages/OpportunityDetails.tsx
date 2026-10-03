import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
  Users,
  XCircle,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const opportunity = {
  company: "TechNova",
  role: "Frontend Engineer Intern",
  location: "Bengaluru, India",
  workMode: "Hybrid",
  salary: "₹25,000 / month",
  deadline: "October 18, 2026",
  match: 94,
  skills: ["React", "TypeScript", "Tailwind CSS"],
  companyDescription:
    "TechNova builds modern software products for fast-growing businesses. The engineering team focuses on scalable, user-friendly web applications.",
}

const matchedSkills = [
  {
    name: "React",
    strength: "Strong",
  },
  {
    name: "TypeScript",
    strength: "Strong",
  },
  {
    name: "Tailwind CSS",
    strength: "Strong",
  },
  {
    name: "JavaScript",
    strength: "Strong",
  },
]

const improvementSkills = [
  "Testing with Jest",
  "Next.js",
  "Frontend performance",
]

function OpportunityDetails() {
  const navigate = useNavigate()

  const handleApply = () => {
    navigate("/applications")
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#eef2f7",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Back */}
        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 text-sm font-medium transition"
          style={{
            color: "#64748b",
          }}
        >
          <ArrowLeft size={16} />
          Back to opportunities
        </Link>

        {/* Header */}
        <section className="mt-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4 sm:gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-semibold text-white sm:h-20 sm:w-20"
                style={{
                  background: "#101827",
                }}
              >
                T
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                    style={{
                      background: "#edf5ff",
                      color: "#1769e0",
                    }}
                  >
                    Strong match
                  </span>

                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-medium"
                    style={{
                      background: "#ecfdf5",
                      color: "#15803d",
                    }}
                  >
                    Actively hiring
                  </span>
                </div>

                <h1
                  className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{
                    color: "#0f172a",
                  }}
                >
                  {opportunity.role}
                </h1>

                <p
                  className="mt-1 text-base font-medium"
                  style={{
                    color: "#334155",
                  }}
                >
                  {opportunity.company}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  <InfoItem
                    icon={MapPin}
                    text={opportunity.location}
                  />

                  <InfoItem
                    icon={BriefcaseBusiness}
                    text={opportunity.workMode}
                  />

                  <InfoItem
                    icon={Clock3}
                    text={opportunity.salary}
                  />

                  <InfoItem
                    icon={Clock3}
                    text={`Apply by ${opportunity.deadline}`}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white"
                style={{
                  color: "#58708f",
                  border: "1px solid #dbe3ed",
                }}
                aria-label="Save opportunity"
              >
                <Bookmark size={18} />
              </button>

              <button
                type="button"
                onClick={handleApply}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition"
                style={{
                  background: "#1769e0",
                  boxShadow: "0 7px 16px rgba(23,105,224,0.2)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "#1256bd"
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "#1769e0"
                }}
              >
                Apply now
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Main grid */}
        <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_390px]">
          {/* Left content */}
          <main className="space-y-5">
            {/* Overview */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionTitle title="About the role" />

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color: "#52657e",
                }}
              >
                TechNova is looking for a Frontend Engineer Intern to
                help build clean, responsive and reliable web
                experiences. You will work closely with product,
                design and engineering teams to turn ideas into
                production-ready interfaces.
              </p>
            </section>

            {/* Responsibilities */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionTitle title="Responsibilities" />

              <BulletList
                items={[
                  "Build responsive interfaces using React and TypeScript.",
                  "Work with designers and engineers to implement product features.",
                  "Write clean, reusable and maintainable frontend components.",
                  "Debug UI issues and improve application performance.",
                  "Participate in code reviews and engineering discussions.",
                ]}
              />
            </section>

            {/* Requirements */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionTitle title="Requirements" />

              <BulletList
                items={[
                  "Strong understanding of HTML, CSS and JavaScript.",
                  "Hands-on experience with React.",
                  "Working knowledge of TypeScript.",
                  "Understanding of responsive web design.",
                  "Familiarity with Git and modern development workflows.",
                ]}
              />
            </section>

            {/* Preferred */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionTitle title="Preferred skills" />

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Jest",
                  "React Testing Library",
                  "REST APIs",
                  "GitHub",
                  "Performance optimization",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-3 py-2 text-xs font-medium"
                    style={{
                      background: "#f5f7fa",
                      border: "1px solid #e1e7ef",
                      color: "#40516a",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Company */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionTitle title="About TechNova" />

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color: "#52657e",
                }}
              >
                {opportunity.companyDescription}
              </p>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold"
                style={{
                  color: "#1769e0",
                }}
              >
                Visit company website
                <ExternalLink size={13} />
              </button>
            </section>
          </main>

          {/* Right AI panel */}
          <aside className="space-y-5">
            {/* AI Match */}
            <section
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              style={{
                borderColor: "#cfe0ff",
              }}
            >
              <div
                className="p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #f7fbff 0%, #eef5ff 100%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background: "#dcecff",
                      color: "#1769e0",
                    }}
                  >
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: "#1769e0",
                      }}
                    >
                      AI MATCH ANALYSIS
                    </p>

                    <p
                      className="text-[10px]"
                      style={{
                        color: "#7890ae",
                      }}
                    >
                      Based on your current profile
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-5">
                  <MatchScore value={opportunity.match} />

                  <div>
                    <p
                      className="text-lg font-semibold"
                      style={{
                        color: "#0f172a",
                      }}
                    >
                      Excellent fit
                    </p>

                    <p
                      className="mt-1 text-xs leading-5"
                      style={{
                        color: "#64748b",
                      }}
                    >
                      Your current skills align strongly
                      with this role.
                    </p>
                  </div>
                </div>
              </div>

              {/* Matched skills */}
              <div className="border-t p-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    style={{
                      color: "#16a34a",
                    }}
                  />

                  <h3
                    className="text-sm font-semibold"
                    style={{
                      color: "#172033",
                    }}
                  >
                    Strong matches
                  </h3>
                </div>

                <div className="mt-4 space-y-3">
                  {matchedSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: "#40516a",
                        }}
                      >
                        {skill.name}
                      </span>

                      <span
                        className="text-[10px] font-semibold"
                        style={{
                          color: "#16a34a",
                        }}
                      >
                        {skill.strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Improvement */}
              <div
                className="border-t p-6"
                style={{
                  borderColor: "#edf1f6",
                }}
              >
                <div className="flex items-center gap-2">
                  <Target
                    size={16}
                    style={{
                      color: "#d97706",
                    }}
                  />

                  <h3
                    className="text-sm font-semibold"
                    style={{
                      color: "#172033",
                    }}
                  >
                    Skills to improve
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {improvementSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs"
                      style={{
                        color: "#64748b",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: "#f59e0b",
                        }}
                      />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why this score */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  style={{
                    color: "#1769e0",
                  }}
                />

                <h2
                  className="text-sm font-semibold"
                  style={{
                    color: "#172033",
                  }}
                >
                  Why this match?
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                <Reason
                  label="Skills alignment"
                  value="96%"
                />

                <Reason
                  label="Experience relevance"
                  value="91%"
                />

                <Reason
                  label="Career preference"
                  value="94%"
                />

                <Reason
                  label="Location preference"
                  value="88%"
                />
              </div>

              <div
                className="mt-5 rounded-xl p-4"
                style={{
                  background: "#f7f9fc",
                }}
              >
                <p
                  className="text-xs leading-5"
                  style={{
                    color: "#52657e",
                  }}
                >
                  Your React and TypeScript experience
                  strongly aligns with the core requirements.
                  Adding testing experience would make your
                  profile even stronger for this role.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <h2
                className="text-sm font-semibold"
                style={{
                  color: "#172033",
                }}
              >
                Eligibility
              </h2>

              <div className="mt-4 space-y-3">
                <EligibilityItem
                  icon={GraduationCap}
                  label="Education"
                  value="B.Tech / B.E."
                  valid
                />

                <EligibilityItem
                  icon={Users}
                  label="Experience"
                  value="0–1 years"
                  valid
                />

                <EligibilityItem
                  icon={Target}
                  label="Skills"
                  value="Strong match"
                  valid
                />
              </div>
            </section>

            {/* Apply CTA */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "#101827",
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{
                  color: "#ffffff",
                }}
              >
                Ready to apply?
              </p>

              <p
                className="mt-2 text-xs leading-5"
                style={{
                  color: "#94a3b8",
                }}
              >
                Review your profile once more, then
                continue to the application.
              </p>

              <button
                type="button"
                onClick={handleApply}
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition"
                style={{
                  background: "#2f80ed",
                  color: "#ffffff",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "#3b8cff"
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "#2f80ed"
                }}
              >
                Apply to TechNova
                <ChevronRight size={16} />
              </button>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}

function InfoItem({
  icon: Icon,
  text,
}: {
  icon: typeof MapPin
  text: string
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5"
      style={{
        color: "#71839b",
      }}
    >
      <Icon size={14} />
      {text}
    </span>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className="text-base font-semibold"
      style={{
        color: "#0f172a",
      }}
    >
      {title}
    </h2>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-6"
          style={{
            color: "#52657e",
          }}
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              background: "#3b82f6",
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function MatchScore({ value }: { value: number }) {
  return (
    <div
      className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#2f80ed ${
          value * 3.6
        }deg, #dcecff 0deg)`,
      }}
    >
      <div
        className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-white"
      >
        <span
          className="text-xl font-bold"
          style={{
            color: "#0f172a",
          }}
        >
          {value}%
        </span>

        <span
          className="text-[9px] font-medium uppercase tracking-wide"
          style={{
            color: "#8aa0bd",
          }}
        >
          match
        </span>
      </div>
    </div>
  )
}

function Reason({
  label,
  value,
}: {
  label: string
  value: string
}) {
  const numericValue = Number.parseInt(value)

  return (
    <div>
      <div className="flex items-center justify-between">
        <span
          className="text-xs"
          style={{
            color: "#52657e",
          }}
        >
          {label}
        </span>

        <span
          className="text-xs font-semibold"
          style={{
            color: "#334155",
          }}
        >
          {value}
        </span>
      </div>

      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full"
        style={{
          background: "#edf1f6",
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${numericValue}%`,
            background: "#3b82f6",
          }}
        />
      </div>
    </div>
  )
}

function EligibilityItem({
  icon: Icon,
  label,
  value,
  valid,
}: {
  icon: typeof GraduationCap
  label: string
  value: string
  valid: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          background: "#f5f7fa",
          color: "#64748b",
        }}
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="text-[10px]"
          style={{
            color: "#8aa0bd",
          }}
        >
          {label}
        </p>

        <p
          className="mt-0.5 text-xs font-medium"
          style={{
            color: "#40516a",
          }}
        >
          {value}
        </p>
      </div>

      {valid ? (
        <CheckCircle2
          size={16}
          style={{
            color: "#16a34a",
          }}
        />
      ) : (
        <XCircle
          size={16}
          style={{
            color: "#dc2626",
          }}
        />
      )}
    </div>
  )
}

export default OpportunityDetails