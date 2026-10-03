type PlaceholderPageProps = {
  title: string
  description: string
}

function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8 lg:p-10">
      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm font-medium text-blue-600">
          CareerPilot
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}

export default PlaceholderPage