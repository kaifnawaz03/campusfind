import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Download,
  Edit3,
  FileText,
  GraduationCap,
  MapPin,
  Plus,
  Save,
  Sparkles,
  Target,
  UserRound,
  X,
} from "lucide-react"
import { useState } from "react"

function Profile() {
  const [editing, setEditing] = useState(false)

  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
  ])

  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    const skill = newSkill.trim()

    if (!skill || skills.includes(skill)) return

    setSkills([...skills, skill])
    setNewSkill("")
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(
      skills.filter((skill) => skill !== skillToRemove),
    )
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
                <UserRound size={16} />
              </div>

              <span
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  color: "#1769e0",
                }}
              >
                Career profile
              </span>
            </div>

            <h1
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{
                color: "#0f172a",
              }}
            >
              Your professional profile
            </h1>

            <p
              className="mt-2 max-w-2xl text-sm leading-6 sm:text-base"
              style={{
                color: "#64748b",
              }}
            >
              Keep your profile updated so CareerPilot can improve
              your recommendations and AI match scores.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setEditing(!editing)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
            style={{
              background: editing ? "#101827" : "#1769e0",
              color: "#ffffff",
            }}
          >
            {editing ? <Save size={16} /> : <Edit3 size={16} />}

            {editing ? "Save profile" : "Edit profile"}
          </button>
        </section>

        {/* Profile overview */}
        <section
          className="mt-7 overflow-hidden rounded-2xl border bg-white shadow-sm"
          style={{
            borderColor: "#dbe3ed",
          }}
        >
          <div
            className="h-28 sm:h-32"
            style={{
              background:
                "linear-gradient(135deg, #101827 0%, #172b4d 100%)",
            }}
          />

          <div className="px-5 pb-6 sm:px-7">
            <div className="-mt-10 flex flex-col gap-5 sm:-mt-12 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white text-xl font-semibold text-white shadow-sm sm:h-24 sm:w-24"
                  style={{
                    background: "#2f80ed",
                  }}
                >
                  S
                </div>

                <div className="pb-1">
                  <h2
                    className="text-xl font-semibold"
                    style={{
                      color: "#0f172a",
                    }}
                  >
                    Student
                  </h2>

                  <p
                    className="mt-1 text-sm"
                    style={{
                      color: "#64748b",
                    }}
                  >
                    B.Tech Computer Science Engineering
                  </p>

                  <div
                    className="mt-2 flex items-center gap-1.5 text-xs"
                    style={{
                      color: "#8aa0bd",
                    }}
                  >
                    <MapPin size={13} />
                    India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold"
                  style={{
                    background: "#ecfdf5",
                    color: "#15803d",
                  }}
                >
                  <CheckCircle2 size={12} />
                  Profile active
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Profile completion */}
        <section
          className="mt-5 rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
          style={{
            borderColor: "#dbe3ed",
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
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
                  Profile strength
                </h2>
              </div>

              <p
                className="mt-1 text-xs"
                style={{
                  color: "#71839b",
                }}
              >
                A complete profile produces better opportunity
                matches.
              </p>
            </div>

            <div className="flex items-center gap-4 sm:min-w-[300px]">
              <div
                className="h-2 flex-1 overflow-hidden rounded-full"
                style={{
                  background: "#e8eef6",
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "82%",
                    background: "#2f80ed",
                  }}
                />
              </div>

              <span
                className="text-sm font-bold"
                style={{
                  color: "#1769e0",
                }}
              >
                82%
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <CompletionItem
              label="Basic information"
              complete
            />

            <CompletionItem
              label="Education"
              complete
            />

            <CompletionItem
              label="Skills"
              complete
            />

            <CompletionItem
              label="Projects"
              complete
            />

            <CompletionItem
              label="Experience"
              complete={false}
            />

            <CompletionItem
              label="Resume"
              complete={false}
            />
          </div>
        </section>

        {/* Main grid */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_380px]">
          <main className="space-y-5">
            {/* Basic information */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionHeader
                icon={UserRound}
                title="Basic information"
                description="How employers will see your profile."
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <ProfileField
                  label="Full name"
                  value="Student"
                  editing={editing}
                />

                <ProfileField
                  label="Email"
                  value="student@example.com"
                  editing={editing}
                />

                <ProfileField
                  label="Phone"
                  value="+91 98765 43210"
                  editing={editing}
                />

                <ProfileField
                  label="Location"
                  value="India"
                  editing={editing}
                />

                <div className="sm:col-span-2">
                  <ProfileField
                    label="Professional headline"
                    value="B.Tech CSE Student · Aspiring Software Engineer"
                    editing={editing}
                  />
                </div>
              </div>
            </section>

            {/* Education */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionHeader
                icon={GraduationCap}
                title="Education"
                description="Your academic background."
              />

              <div
                className="mt-6 rounded-xl border p-5"
                style={{
                  borderColor: "#e3e8ef",
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "#f5f7fa",
                      color: "#52657e",
                    }}
                  >
                    <GraduationCap size={19} />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-sm font-semibold"
                      style={{
                        color: "#172033",
                      }}
                    >
                      Bachelor of Technology
                    </h3>

                    <p
                      className="mt-1 text-xs font-medium"
                      style={{
                        color: "#52657e",
                      }}
                    >
                      Computer Science and Engineering
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">
                      <span
                        style={{
                          color: "#71839b",
                        }}
                      >
                        Expected graduation: 2027
                      </span>

                      <span
                        style={{
                          color: "#71839b",
                        }}
                      >
                        CGPA: 8.33
                      </span>
                    </div>
                  </div>

                  {editing && (
                    <button
                      type="button"
                      className="text-xs font-semibold"
                      style={{
                        color: "#1769e0",
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Skills */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionHeader
                icon={Target}
                title="Skills"
                description="Skills used by CareerPilot to calculate opportunity matches."
              />

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium"
                    style={{
                      background: "#eef5ff",
                      border: "1px solid #d7e7ff",
                      color: "#1769e0",
                    }}
                  >
                    {skill}

                    {editing && (
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="rounded-full"
                        aria-label={`Remove ${skill}`}
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {editing && (
                <div className="mt-5 flex gap-2">
                  <input
                    value={newSkill}
                    onChange={(event) =>
                      setNewSkill(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        addSkill()
                      }
                    }}
                    placeholder="Add a skill..."
                    className="h-10 flex-1 rounded-lg px-3 text-sm outline-none"
                    style={{
                      color: "#172033",
                      background: "#f7f9fc",
                      border: "1px solid #dbe3ed",
                    }}
                  />

                  <button
                    type="button"
                    onClick={addSkill}
                    className="flex h-10 items-center gap-2 rounded-lg px-4 text-xs font-semibold text-white"
                    style={{
                      background: "#1769e0",
                    }}
                  >
                    <Plus size={14} />
                    Add
                  </button>
                </div>
              )}
            </section>

            {/* Projects */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionHeader
                icon={BriefcaseBusiness}
                title="Projects"
                description="Projects that demonstrate your practical experience."
              />

              <div className="mt-5 space-y-3">
                <ProjectCard
                  title="CareerPilot AI"
                  description="AI-powered internship discovery and application tracking platform."
                  skills={[
                    "React",
                    "TypeScript",
                    "AI",
                  ]}
                />

                <ProjectCard
                  title="Food Delivery Website"
                  description="Responsive food delivery interface with product browsing, categories and cart experience."
                  skills={[
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                  ]}
                />

                <ProjectCard
                  title="Placement Preparation Tracker"
                  description="Student-focused tool for tracking placement preparation and progress."
                  skills={[
                    "JavaScript",
                    "React",
                  ]}
                />
              </div>

              {editing && (
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold"
                  style={{
                    color: "#1769e0",
                  }}
                >
                  <Plus size={14} />
                  Add project
                </button>
              )}
            </section>

            {/* Resume */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <SectionHeader
                icon={FileText}
                title="Resume"
                description="Keep your latest resume available for applications."
              />

              <div
                className="mt-5 flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                style={{
                  background: "#f8fafc",
                  borderColor: "#e3e8ef",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background: "#eef5ff",
                      color: "#1769e0",
                    }}
                  >
                    <FileText size={17} />
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: "#172033",
                      }}
                    >
                      Student_Resume.pdf
                    </p>

                    <p
                      className="mt-1 text-[10px]"
                      style={{
                        color: "#8aa0bd",
                      }}
                    >
                      Uploaded September 28, 2026 · 1.2 MB
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #dbe3ed",
                      color: "#52657e",
                    }}
                  >
                    <Download size={14} />
                    Download
                  </button>

                  {editing && (
                    <button
                      type="button"
                      className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-white"
                      style={{
                        background: "#1769e0",
                      }}
                    >
                      Replace
                    </button>
                  )}
                </div>
              </div>
            </section>
          </main>

          {/* Right sidebar */}
          <aside className="space-y-5">
            {/* AI profile analysis */}
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
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: "#172033",
                      }}
                    >
                      AI profile analysis
                    </p>

                    <p
                      className="text-[10px]"
                      style={{
                        color: "#7890ae",
                      }}
                    >
                      How CareerPilot currently sees your profile
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p
                    className="text-3xl font-bold"
                    style={{
                      color: "#1769e0",
                    }}
                  >
                    82%
                  </p>

                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: "#52657e",
                    }}
                  >
                    Profile strength
                  </p>
                </div>

                <div
                  className="mt-4 h-2 overflow-hidden rounded-full"
                  style={{
                    background: "#dcecff",
                  }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "82%",
                      background: "#2f80ed",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4 p-6">
                <Insight
                  title="Strongest area"
                  text="Frontend development"
                  color="#16a34a"
                />

                <Insight
                  title="Recommended improvement"
                  text="Add testing experience"
                  color="#d97706"
                />

                <Insight
                  title="Target role"
                  text="Software / Frontend Engineer"
                  color="#1769e0"
                />
              </div>
            </section>

            {/* Career preferences */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="flex items-center gap-2">
                <Target
                  size={17}
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
                  Career preferences
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                <Preference
                  label="Target roles"
                  value="Frontend, Full Stack"
                />

                <Preference
                  label="Work mode"
                  value="Remote, Hybrid"
                />

                <Preference
                  label="Preferred locations"
                  value="Bengaluru, Pune, Remote"
                />

                <Preference
                  label="Opportunity type"
                  value="Internship"
                />
              </div>

              {editing && (
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold"
                  style={{
                    color: "#1769e0",
                  }}
                >
                  Edit preferences
                  <ChevronRight size={13} />
                </button>
              )}
            </section>

            {/* Recommendations */}
            <section
              className="rounded-2xl border bg-white p-6 shadow-sm"
              style={{
                borderColor: "#dbe3ed",
              }}
            >
              <div className="flex items-center gap-2">
                <Award
                  size={17}
                  style={{
                    color: "#d97706",
                  }}
                />

                <h2
                  className="text-sm font-semibold"
                  style={{
                    color: "#172033",
                  }}
                >
                  Improve your profile
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                <Improvement
                  number="01"
                  title="Add internship experience"
                />

                <Improvement
                  number="02"
                  title="Upload your latest resume"
                />

                <Improvement
                  number="03"
                  title="Add one more project"
                />
              </div>
            </section>

            {/* Profile CTA */}
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
                Complete your profile
              </p>

              <p
                className="mt-2 text-xs leading-5"
                style={{
                  color: "#94a3b8",
                }}
              >
                Completing the remaining sections can improve the
                relevance of your AI recommendations.
              </p>

              <button
                type="button"
                onClick={() => setEditing(true)}
                className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold"
                style={{
                  background: "#2f80ed",
                  color: "#ffffff",
                }}
              >
                Continue profile
                <ChevronRight size={14} />
              </button>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof UserRound
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{
          background: "#f5f7fa",
          color: "#52657e",
        }}
      >
        <Icon size={17} />
      </div>

      <div>
        <h2
          className="text-base font-semibold"
          style={{
            color: "#0f172a",
          }}
        >
          {title}
        </h2>

        <p
          className="mt-1 text-xs"
          style={{
            color: "#71839b",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function ProfileField({
  label,
  value,
  editing,
}: {
  label: string
  value: string
  editing: boolean
}) {
  return (
    <div>
      <label
        className="text-[10px] font-semibold uppercase tracking-wide"
        style={{
          color: "#8aa0bd",
        }}
      >
        {label}
      </label>

      {editing ? (
        <input
          defaultValue={value}
          className="mt-2 h-10 w-full rounded-lg px-3 text-sm outline-none"
          style={{
            color: "#172033",
            background: "#f8fafc",
            border: "1px solid #dbe3ed",
          }}
        />
      ) : (
        <p
          className="mt-2 text-sm font-medium"
          style={{
            color: "#40516a",
          }}
        >
          {value}
        </p>
      )}
    </div>
  )
}

function CompletionItem({
  label,
  complete,
}: {
  label: string
  complete: boolean
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg px-3 py-2.5"
      style={{
        background: complete ? "#f0fdf4" : "#fff7ed",
      }}
    >
      {complete ? (
        <CheckCircle2
          size={14}
          style={{
            color: "#16a34a",
          }}
        />
      ) : (
        <div
          className="h-3.5 w-3.5 rounded-full border-2"
          style={{
            borderColor: "#f59e0b",
          }}
        />
      )}

      <span
        className="text-xs font-medium"
        style={{
          color: complete ? "#166534" : "#9a3412",
        }}
      >
        {label}
      </span>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  skills,
}: {
  title: string
  description: string
  skills: string[]
}) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        borderColor: "#e3e8ef",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-sm font-semibold"
            style={{
              color: "#172033",
            }}
          >
            {title}
          </h3>

          <p
            className="mt-1 text-xs leading-5"
            style={{
              color: "#71839b",
            }}
          >
            {description}
          </p>
        </div>

        <BriefcaseBusiness
          size={17}
          className="shrink-0"
          style={{
            color: "#9aa9bb",
          }}
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md px-2 py-1 text-[9px] font-medium"
            style={{
              background: "#f5f7fa",
              color: "#52657e",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function Insight({
  title,
  text,
  color,
}: {
  title: string
  text: string
  color: string
}) {
  return (
    <div className="flex gap-3">
      <div
        className="mt-1 h-2 w-2 shrink-0 rounded-full"
        style={{
          background: color,
        }}
      />

      <div>
        <p
          className="text-[10px] font-medium uppercase tracking-wide"
          style={{
            color: "#94a3b8",
          }}
        >
          {title}
        </p>

        <p
          className="mt-1 text-xs font-semibold"
          style={{
            color: "#40516a",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

function Preference({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p
        className="text-[10px] font-medium uppercase tracking-wide"
        style={{
          color: "#9aa9bb",
        }}
      >
        {label}
      </p>

      <p
        className="mt-1 text-xs font-medium"
        style={{
          color: "#40516a",
        }}
      >
        {value}
      </p>
    </div>
  )
}

function Improvement({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-semibold"
        style={{
          background: "#f5f7fa",
          color: "#64748b",
        }}
      >
        {number}
      </div>

      <p
        className="flex-1 text-xs font-medium"
        style={{
          color: "#52657e",
        }}
      >
        {title}
      </p>

      <ChevronRight
        size={14}
        style={{
          color: "#9aa9bb",
        }}
      />
    </div>
  )
}

export default Profile