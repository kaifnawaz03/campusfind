import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  Lightbulb,
  MessageSquareText,
  PlayCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"

const skillGaps = [
  {
    skill: "Frontend Testing",
    progress: 42,
    priority: "High",
    description: "Jest and React Testing Library",
  },
  {
    skill: "Next.js",
    progress: 58,
    priority: "Medium",
    description: "Routing, rendering and data fetching",
  },
  {
    skill: "Performance",
    progress: 64,
    priority: "Medium",
    description: "Core Web Vitals and optimization",
  },
]

const interviewQuestions = [
  {
    category: "React",
    question: "How would you optimize a React application that is rendering slowly?",
    difficulty: "Medium",
  },
  {
    category: "JavaScript",
    question: "Explain the difference between promises, async/await and callbacks.",
    difficulty: "Medium",
  },
  {
    category: "Frontend",
    question: "How would you design a reusable component system for a large application?",
    difficulty: "Hard",
  },
]

const preparationTopics = [
  {
    icon: Code2,
    title: "React fundamentals",
    description: "Components, hooks, state and rendering",
    progress: 78,
  },
  {
    icon: BrainCircuit,
    title: "Frontend system design",
    description: "Architecture, scalability and trade-offs",
    progress: 55,
  },
  {
    icon: BookOpen,
    title: "Testing",
    description: "Jest, testing patterns and component tests",
    progress: 42,
  },
  {
    icon: MessageSquareText,
    title: "Interview communication",
    description: "Explain your decisions clearly and confidently",
    progress: 71,
  },
]

function AIPreparation() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#eef2f7",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        {/* Header */}
        <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  background: "#e8f1ff",
                  color: "#1769e0",
                }}
              >
                <Sparkles size={16} />
              </div>

              <span
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  color: "#1769e0",
                }}
              >
                AI career preparation
              </span>
            </div>

            <h1
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{
                color: "#0f172a",
              }}
            >
              Prepare for what comes next
            </h1>

            <p
              className="mt-2 max-w-2xl text-sm leading-6 sm:text-base"
              style={{
                color: "#64748b",
              }}
            >
              Personalized preparation based on your target roles,
              skill gaps and upcoming interviews.
            </p>
          </div>

          <div
            className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm"
            style={{
              borderColor: "#dbe3ed",
            }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: "#ecfdf5",
                color: "#15803d",
              }}
            >
              <TrendingUp size={17} />
            </div>

            <div>
              <p
                className="text-[10px] font-medium uppercase tracking-wide"
                style={{
                  color: "#8aa0bd",
                }}
              >
                Preparation score
              </p>

              <p
                className="text-sm font-semibold"
                style={{
                  color: "#172033",
                }}
              >
                68% ready
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming interview banner */}
        <section
          className="mt-7 overflow-hidden rounded-2xl border shadow-sm"
          style={{
            background: "#101827",
            borderColor: "#101827",
          }}
        >
          <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
            <div className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#60a5fa",
                }}
              >
                <CalendarIcon />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.15em]"
                    style={{
                      color: "#60a5fa",
                    }}
                  >
                    Upcoming interview
                  </p>

                  <span
                    className="rounded-full px-2 py-1 text-[9px] font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#cbd5e1",
                    }}
                  >
                    Tomorrow
                  </span>
                </div>

                <h2
                  className="mt-2 text-lg font-semibold"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Frontend Engineer Intern · TechNova
                </h2>

                <p
                  className="mt-1 text-xs"
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  Technical interview · Focus on React and frontend
                  fundamentals
                </p>
              </div>
            </div>

            <Link
              to="/opportunities/frontend-engineer-1"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
              style={{
                background: "#2f80ed",
                color: "#ffffff",
              }}
            >
              Review role
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_390px]">
          {/* Left */}
          <main className="space-y-5">
            {/* Skill gaps */}
            <section
              className="rounded-2xl border bg-white shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="border-b px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background: "#fff7ed",
                      color: "#d97706",
                    }}
                  >
                    <Target size={17} />
                  </div>

                  <div>
                    <h2
                      className="text-base font-semibold"
                      style={{
                        color: "#0f172a",
                      }}
                    >
                      Your skill gaps
                    </h2>

                    <p
                      className="mt-1 text-xs"
                      style={{
                        color: "#71839b",
                      }}
                    >
                      Areas that could improve your interview readiness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y">
                {skillGaps.map((item) => (
                  <div
                    key={item.skill}
                    className="px-6 py-5"
                    style={{
                      borderColor: "#edf1f6",
                    }}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p
                            className="text-sm font-semibold"
                            style={{
                              color: "#172033",
                            }}
                          >
                            {item.skill}
                          </p>

                          <span
                            className="rounded-full px-2 py-1 text-[9px] font-semibold"
                            style={{
                              background:
                                item.priority === "High"
                                  ? "#fef2f2"
                                  : "#fff7ed",
                              color:
                                item.priority === "High"
                                  ? "#dc2626"
                                  : "#c2410c",
                            }}
                          >
                            {item.priority} priority
                          </span>
                        </div>

                        <p
                          className="mt-1 text-xs"
                          style={{
                            color: "#71839b",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <span
                        className="text-xs font-semibold"
                        style={{
                          color: "#1769e0",
                        }}
                      >
                        {item.progress}% ready
                      </span>
                    </div>

                    <div
                      className="mt-4 h-2 overflow-hidden rounded-full"
                      style={{
                        background: "#edf1f6",
                      }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.progress}%`,
                          background:
                            item.priority === "High"
                              ? "#f59e0b"
                              : "#3b82f6",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interview questions */}
            <section
              className="rounded-2xl border bg-white shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="flex flex-col gap-4 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background: "#eef5ff",
                        color: "#1769e0",
                      }}
                    >
                      <MessageSquareText size={17} />
                    </div>

                    <div>
                      <h2
                        className="text-base font-semibold"
                        style={{
                          color: "#0f172a",
                        }}
                      >
                        Interview questions
                      </h2>

                      <p
                        className="mt-1 text-xs"
                        style={{
                          color: "#71839b",
                        }}
                      >
                        Practice questions generated for your target role.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold"
                  style={{
                    background: "#f1f5f9",
                    color: "#40516a",
                  }}
                >
                  Generate more
                  <Sparkles size={13} />
                </button>
              </div>

              <div className="divide-y">
                {interviewQuestions.map((item, index) => (
                  <div
                    key={item.question}
                    className="px-6 py-5"
                    style={{
                      borderColor: "#edf1f6",
                    }}
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold"
                        style={{
                          background: "#f5f7fa",
                          color: "#64748b",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="rounded-md px-2 py-1 text-[9px] font-semibold"
                            style={{
                              background: "#eef5ff",
                              color: "#1769e0",
                            }}
                          >
                            {item.category}
                          </span>

                          <span
                            className="rounded-md px-2 py-1 text-[9px] font-medium"
                            style={{
                              background: "#f5f7fa",
                              color: "#71839b",
                            }}
                          >
                            {item.difficulty}
                          </span>
                        </div>

                        <p
                          className="mt-3 text-sm font-medium leading-6"
                          style={{
                            color: "#172033",
                          }}
                        >
                          {item.question}
                        </p>

                        <button
                          type="button"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
                          style={{
                            color: "#1769e0",
                          }}
                        >
                          Practice this question
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparation topics */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background: "#ecfdf5",
                      color: "#15803d",
                    }}
                  >
                    <BookOpen size={17} />
                  </div>

                  <div>
                    <h2
                      className="text-base font-semibold"
                      style={{
                        color: "#0f172a",
                      }}
                    >
                      Recommended preparation
                    </h2>

                    <p
                      className="mt-1 text-xs"
                      style={{
                        color: "#71839b",
                      }}
                    >
                      Continue learning where it matters most.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {preparationTopics.map((topic) => {
                  const Icon = topic.icon

                  return (
                    <div
                      key={topic.title}
                      className="rounded-xl border p-4"
                      style={{
                        borderColor: "#e3e8ef",
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg"
                          style={{
                            background: "#f5f7fa",
                            color: "#52657e",
                          }}
                        >
                          <Icon size={17} />
                        </div>

                        <span
                          className="text-[10px] font-semibold"
                          style={{
                            color: "#64748b",
                          }}
                        >
                          {topic.progress}%
                        </span>
                      </div>

                      <h3
                        className="mt-4 text-sm font-semibold"
                        style={{
                          color: "#172033",
                        }}
                      >
                        {topic.title}
                      </h3>

                      <p
                        className="mt-1 text-xs leading-5"
                        style={{
                          color: "#71839b",
                        }}
                      >
                        {topic.description}
                      </p>

                      <div
                        className="mt-4 h-1.5 overflow-hidden rounded-full"
                        style={{
                          background: "#edf1f6",
                        }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${topic.progress}%`,
                            background: "#3b82f6",
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </main>

          {/* Right sidebar */}
          <aside className="space-y-5">
            {/* AI coach */}
            <section
              className="overflow-hidden rounded-2xl border shadow-sm"
              style={{
                background: "#ffffff",
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
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: "#dcecff",
                      color: "#1769e0",
                    }}
                  >
                    <BrainCircuit size={19} />
                  </div>

                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: "#172033",
                      }}
                    >
                      CareerPilot AI
                    </p>

                    <p
                      className="text-[10px]"
                      style={{
                        color: "#7890ae",
                      }}
                    >
                      Your preparation assistant
                    </p>
                  </div>
                </div>

                <p
                  className="mt-5 text-sm font-medium leading-6"
                  style={{
                    color: "#334155",
                  }}
                >
                  You have a strong base for the TechNova interview.
                  Focus your remaining preparation on testing and
                  frontend architecture.
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold"
                  style={{
                    background: "#1769e0",
                    color: "#ffffff",
                  }}
                >
                  Build my prep plan
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>

            {/* Readiness */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2
                    className="text-sm font-semibold"
                    style={{
                      color: "#172033",
                    }}
                  >
                    Interview readiness
                  </h2>

                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "#71839b",
                    }}
                  >
                    For TechNova
                  </p>
                </div>

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(#2f80ed 68%, #e8eef6 0)",
                  }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-bold"
                    style={{
                      color: "#172033",
                    }}
                  >
                    68%
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <ReadinessRow
                  label="Technical knowledge"
                  value={76}
                />

                <ReadinessRow
                  label="Role-specific skills"
                  value={71}
                />

                <ReadinessRow
                  label="Communication"
                  value={82}
                />

                <ReadinessRow
                  label="Company research"
                  value={48}
                />
              </div>
            </section>

            {/* Quick actions */}
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
                Quick preparation
              </h2>

              <div className="mt-4 space-y-2">
                <QuickAction
                  icon={PlayCircle}
                  title="Mock interview"
                  description="Practice a technical interview"
                />

                <QuickAction
                  icon={FileText}
                  title="Resume review"
                  description="Improve role-specific alignment"
                />

                <QuickAction
                  icon={Lightbulb}
                  title="Company research"
                  description="Learn what to discuss in your interview"
                />
              </div>
            </section>

            {/* Time */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "#101827",
              }}
            >
              <div className="flex items-center gap-2">
                <Clock3
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
                  Recommended today
                </p>
              </div>

              <p
                className="mt-4 text-2xl font-semibold"
                style={{
                  color: "#ffffff",
                }}
              >
                45 minutes
              </p>

              <p
                className="mt-2 text-xs leading-5"
                style={{
                  color: "#94a3b8",
                }}
              >
                20 min React revision · 15 min testing ·
                10 min interview practice
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon() {
  return (
    <div className="relative">
      <CalendarDays size={20} />
    </div>
  )
}

function ReadinessRow({
  label,
  value,
}: {
  label: string
  value: number
}) {
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
          {value}%
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
            width: `${value}%`,
            background: "#3b82f6",
          }}
        />
      </div>
    </div>
  )
}

function QuickAction({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof PlayCircle
  title: string
  description: string
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-50"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: "#f5f7fa",
          color: "#52657e",
        }}
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="text-xs font-semibold"
          style={{
            color: "#172033",
          }}
        >
          {title}
        </p>

        <p
          className="mt-0.5 text-[10px]"
          style={{
            color: "#8aa0bd",
          }}
        >
          {description}
        </p>
      </div>

      <ChevronRight
        size={14}
        style={{
          color: "#9aa9bb",
        }}
      />
    </button>
  )
}

export default AIPreparation