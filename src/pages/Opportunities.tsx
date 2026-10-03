import { useRef, useState, type ChangeEvent } from "react"
import { ArrowLeft, ArrowRight, AudioLines, Check, CheckCircle2, ChevronRight, Clock3, ImagePlus, MapPin, Package, ShieldCheck, Sparkles, Upload, X } from "lucide-react"

type ReportKind = "lost" | "found"
type Stage = "report" | "match" | "verify" | "claimed" | "submitted"

const itemPhoto = "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85"

export default function Opportunities() {
  const [kind, setKind] = useState<ReportKind>("lost")
  const [stage, setStage] = useState<Stage>("report")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [when, setWhen] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [answer, setAnswer] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) { setError("Choose an image file to add a reference photo."); return }
    setError("")
    setImage(URL.createObjectURL(file))
  }

  const findMatch = () => {
    if (!description.trim()) { setError("Add a few details about the item so we can look for the right report."); return }
    setError("")
    setBusy(true)
    window.setTimeout(() => { setBusy(false); setStage(kind === "lost" ? "match" : "submitted") }, 1300)
  }

  const reset = () => { setStage("report"); setDescription(""); setLocation(""); setWhen(""); setImage(null); setError(""); setAnswer("") }

  return (
    <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
      <section className="grid gap-8 border-b border-[#e4e0d6] pb-9 lg:grid-cols-[1fr_370px] lg:items-end">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.17em] text-[#567262]"><span className="h-2 w-2 rounded-full bg-[#56916f]"/> Campus property, accounted for</div>
          <h1 className="max-w-[700px] font-serif text-[42px] leading-[1.03] tracking-[-.04em] text-[#17211f] sm:text-[58px]">Lost something?<br/><span className="text-[#27634f]">Let’s bring it home.</span></h1>
          <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-[#68736f]">Tell us what went missing. We’ll compare it with items turned in across campus and show you why a match looks right.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#68736f]"><span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#27634f]"/> Your claim is verified privately</span><span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[#27634f]"/> Northbridge University</span></div>
        </div>
        <aside className="relative overflow-hidden border border-[#d9ded2] bg-[#e8ede4] p-6 sm:p-7">
          <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border border-[#cbd7c9]"/><div className="absolute -right-1 -top-3 h-28 w-28 rounded-full border border-[#cbd7c9]"/>
          <div className="relative flex items-start justify-between"><span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#5c7464]">This week on campus</span><Package size={18} className="text-[#52725c]"/></div>
          <div className="relative mt-7 flex items-end gap-3"><span className="font-serif text-5xl tracking-tight text-[#234b3c]">18</span><span className="pb-1 text-sm text-[#52685a]">items reunited<br/>with their owners</span></div>
          <div className="relative mt-5 flex items-center justify-between border-t border-[#cbd7c9] pt-4 text-xs text-[#52685a]"><span>Most found near the library</span><span className="inline-flex items-center gap-1 font-semibold text-[#27634f]">View activity <ArrowRight size={13}/></span></div>
        </aside>
      </section>

      <div className="grid gap-9 pt-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-14 lg:pt-10">
        <section className="min-w-0">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#879087]">Recovery desk <span className="mx-1 text-[#c0c3ba]">/</span> {stage === "report" ? "New report" : stage === "match" ? "Possible match" : stage === "verify" ? "Ownership check" : "Report status"}</p><h2 className="mt-2 font-serif text-[27px] tracking-tight">{stage === "report" ? "Start with what you remember" : stage === "match" ? "We found something promising" : stage === "verify" ? "Let’s make sure it’s yours" : stage === "claimed" ? "Your item is on its way back" : "Report received"}</h2></div>
            {stage === "report" && <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ded5] bg-white/70 px-3 py-2 text-[11px] font-semibold text-[#68736f]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#27634f] text-[10px] text-white">1</span> About your item <ChevronRight size={13}/><span className="text-[#929990]">2 Match</span><ChevronRight size={13}/><span className="text-[#929990]">3 Claim</span></span>}
          </div>

          {stage === "report" && <>
            <div className="mb-6 flex max-w-[500px] border-b border-[#e3dfd5]" role="tablist" aria-label="Report type">
              <button role="tab" aria-selected={kind === "lost"} onClick={() => setKind("lost")} className={`relative flex-1 py-3 text-sm font-semibold transition ${kind === "lost" ? "text-[#27634f]" : "text-[#879087] hover:text-[#17211f]"}`}>I lost something{kind === "lost" && <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-[#27634f]"/>}</button>
              <button role="tab" aria-selected={kind === "found"} onClick={() => setKind("found")} className={`relative flex-1 py-3 text-sm font-semibold transition ${kind === "found" ? "text-[#27634f]" : "text-[#879087] hover:text-[#17211f]"}`}>I found something{kind === "found" && <span className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-[#27634f]"/>}</button>
            </div>
            <div className="space-y-5">
              <label className="block"><span className="mb-2 block text-xs font-bold text-[#33413b]">What does it look like? <span className="font-normal text-[#889189]">Be as specific as you can</span></span><textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} maxLength={500} placeholder={kind === "lost" ? "For example: dark green canvas backpack with a small orange keychain…" : "Describe what you found, without sharing every identifying detail…"} className="w-full resize-y border border-[#dcded6] bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-[#a1a79f] focus:border-[#6d947a] focus:ring-2 focus:ring-[#27634f]/10"/><span className="mt-1 block text-right text-[10px] text-[#9aa097]">{description.length}/500</span></label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-xs font-bold text-[#33413b]">{kind === "lost" ? "Last seen near" : "Found near"}</span><div className="relative"><MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#879087]"/><input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. North library, 2nd floor" className="h-11 w-full border border-[#dcded6] bg-white pl-9 pr-3 text-sm outline-none placeholder:text-[#a1a79f] focus:border-[#6d947a] focus:ring-2 focus:ring-[#27634f]/10"/></div></label>
                <label className="block"><span className="mb-2 block text-xs font-bold text-[#33413b]">{kind === "lost" ? "When did you last have it?" : "When did you find it?"}</span><div className="relative"><Clock3 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#879087]"/><input type="datetime-local" value={when} onChange={e => setWhen(e.target.value)} className="h-11 w-full border border-[#dcded6] bg-white pl-9 pr-3 text-sm text-[#68736f] outline-none focus:border-[#6d947a] focus:ring-2 focus:ring-[#27634f]/10"/></div></label>
              </div>
              <div><span className="mb-2 block text-xs font-bold text-[#33413b]">Reference photo <span className="font-normal text-[#889189]">Optional, but it helps us compare</span></span><input ref={fileRef} type="file" accept="image/*" onChange={handleImage} className="sr-only"/><div className="flex flex-wrap items-center gap-3">{image ? <div className="flex items-center gap-3 border border-[#dcded6] bg-white p-2"><img src={image} alt="Selected reference" className="h-14 w-16 object-cover"/><span className="text-xs font-medium text-[#526159]">Photo added</span><button aria-label="Remove photo" onClick={() => setImage(null)} className="ml-2 p-2 text-[#788078] hover:text-[#a7463d]"><X size={15}/></button></div> : <button type="button" onClick={() => fileRef.current?.click()} className="inline-flex h-12 items-center gap-2 border border-dashed border-[#bfc8bd] bg-[#f9f8f4] px-4 text-xs font-semibold text-[#526159] transition hover:border-[#6d947a] hover:bg-[#edf1e9]"><ImagePlus size={17}/> Add a photo <Upload size={13} className="ml-2 text-[#879087]"/></button>}<span className="inline-flex items-center gap-1.5 text-[11px] text-[#939b92]"><AudioLines size={14}/> Voice description coming soon</span></div></div>
              {error && <p role="alert" className="border-l-2 border-[#a7463d] bg-[#fbf2ef] px-3 py-2 text-xs text-[#8e3e36]">{error}</p>}
              <div className="flex flex-col gap-3 border-t border-[#e4e0d6] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-[11px] leading-5 text-[#879087]">We’ll only share enough detail to help identify a match. A few details stay private for verification.</p><button disabled={busy} onClick={findMatch} className="inline-flex h-12 items-center justify-center gap-2 bg-[#27634f] px-6 text-sm font-semibold text-white transition hover:bg-[#204e3f] focus:outline-none focus:ring-2 focus:ring-[#27634f] focus:ring-offset-2 disabled:cursor-wait disabled:bg-[#628573]">{busy ? <><Sparkles size={16} className="animate-pulse"/> Comparing campus reports…</> : <>{kind === "lost" ? "Find my item" : "Submit found item"}<ArrowRight size={16}/></>}</button></div>
            </div>
          </>}

          {stage === "match" && <div className="animate-[fade-in_.35s_ease-out]">
            <div className="mb-5 flex items-start gap-3 border-l-2 border-[#b58b43] bg-[#f3efe2] p-4"><Sparkles size={17} className="mt-0.5 shrink-0 text-[#96712f]"/><p className="text-sm leading-6 text-[#4e554c]">A found item shares several details with your report. Review the evidence before starting a claim.</p></div>
            <article className="overflow-hidden border border-[#deded4] bg-white">
              <div className="flex items-center justify-between border-b border-[#e8e6de] px-4 py-3 sm:px-5"><span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#778078]">Found report <span className="mx-1 text-[#c0c3ba]">/</span> CR-2481</span><span className="inline-flex items-center gap-1.5 bg-[#edf3eb] px-2.5 py-1.5 text-[10px] font-bold text-[#27634f]"><span className="h-1.5 w-1.5 rounded-full bg-[#4c8c62]"/> Strong possible match</span></div>
              <div className="grid sm:grid-cols-2"><div className="relative min-h-[220px] bg-[#e9e6dd]"><img src={itemPhoto} alt="Green canvas backpack with orange keychain" className="absolute inset-0 h-full w-full object-cover"/><span className="absolute bottom-3 left-3 bg-[#17211f]/80 px-2.5 py-1.5 text-[10px] font-semibold text-white">Found item · 29 Sep</span></div><div className="flex flex-col justify-center p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#889189]">Turned in at North Library</p><h3 className="mt-2 font-serif text-[25px] leading-tight">Green canvas backpack</h3><p className="mt-2 text-xs leading-5 text-[#68736f]">A student handed this in at the library desk after closing. It’s being held by Campus Security.</p><div className="mt-5 flex items-end gap-3"><span className="font-serif text-[42px] leading-none tracking-tight text-[#27634f]">92%</span><span className="pb-1 text-xs font-medium text-[#68736f]">details align</span></div><div className="mt-3 h-1.5 overflow-hidden bg-[#e9ece5]"><div className="h-full w-[92%] bg-[#4e8061]"/></div></div></div>
              <div className="border-t border-[#e8e6de] px-4 py-4 sm:px-5"><h4 className="text-xs font-bold text-[#34423b]">Why this looks like yours</h4><div className="mt-3 grid gap-2 sm:grid-cols-3"><Evidence label="Item & colour" value="Canvas backpack · forest green"/><Evidence label="Distinctive detail" value="Orange keychain reported"/><Evidence label="Place & time" value="Library · same afternoon"/></div></div>
            </article>
            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"><button onClick={() => setStage("report")} className="inline-flex h-11 items-center justify-center gap-2 px-3 text-sm font-semibold text-[#68736f] hover:text-[#17211f]"><ArrowLeft size={15}/> Edit my report</button><button onClick={() => setStage("verify")} className="inline-flex h-12 items-center justify-center gap-2 bg-[#27634f] px-6 text-sm font-semibold text-white transition hover:bg-[#204e3f]">Verify it’s mine <ShieldCheck size={16}/></button></div>
          </div>}

          {stage === "verify" && <div className="max-w-2xl border border-[#deded4] bg-white p-5 sm:p-7"><div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#edf3eb] text-[#27634f]"><ShieldCheck size={19}/></span><div><h3 className="text-sm font-bold">A detail only the owner would know</h3><p className="mt-1 text-xs leading-5 text-[#778078]">The found report includes a private identifying detail. Tell the security desk what was attached to the zipper pull.</p></div></div><label className="mt-6 block"><span className="mb-2 block text-xs font-bold text-[#33413b]">Your answer</span><input value={answer} onChange={e => setAnswer(e.target.value)} onKeyDown={e => e.key === "Enter" && answer.trim() && setStage("claimed")} placeholder="Enter the distinctive detail" className="h-12 w-full border border-[#dcded6] px-4 text-sm outline-none focus:border-[#6d947a] focus:ring-2 focus:ring-[#27634f]/10"/></label><p className="mt-2 text-[11px] text-[#8a928a]">Hint: it’s a small item attached to the bag, mentioned in your report.</p><div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between"><button onClick={() => setStage("match")} className="h-11 px-3 text-sm font-semibold text-[#68736f]">Back to match</button><button onClick={() => answer.trim() ? setStage("claimed") : setError("Add the identifying detail to continue.")} className="h-11 bg-[#27634f] px-5 text-sm font-semibold text-white hover:bg-[#204e3f]">Confirm ownership <ArrowRight size={15} className="ml-1 inline"/></button></div>{error && <p role="alert" className="mt-3 text-xs text-[#a7463d]">{error}</p>}</div>}

          {(stage === "claimed" || stage === "submitted") && <div className="max-w-2xl border border-[#d8e1d5] bg-[#edf2e9] p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#27634f] text-white"><CheckCircle2 size={24}/></span><p className="mt-5 text-[10px] font-bold uppercase tracking-[.16em] text-[#5a7762]">{stage === "claimed" ? "Ownership confirmed · CR-2481" : "Found report filed · CR-2514"}</p><h3 className="mt-2 font-serif text-3xl tracking-tight">{stage === "claimed" ? "Your backpack is safe." : "You’ve helped reunite someone with their things."}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-[#5f6d62]">{stage === "claimed" ? "Bring your student ID to the Campus Security desk in the Student Centre, room 104. They’re holding the backpack until 6 pm today." : "Campus Security will review the details and contact you if a report matches. The owner will need to verify privately before collection."}</p><div className="mt-6 flex items-center gap-3 border-t border-[#cbd8ca] pt-5"><span className="grid h-9 w-9 place-items-center bg-white text-[#27634f]"><MapPin size={17}/></span><div><p className="text-xs font-bold">Campus Security · Student Centre 104</p><p className="mt-1 text-[11px] text-[#768377]">Open today until 6:00 pm</p></div><Check size={16} className="ml-auto text-[#27634f]"/></div><button onClick={reset} className="mt-6 inline-flex h-11 items-center gap-2 border border-[#b8c7b5] bg-white px-4 text-xs font-bold text-[#27634f] hover:bg-[#f8faf6]">Start another report <ArrowRight size={14}/></button></div>}
        </section>

        <aside className="space-y-7 lg:border-l lg:border-[#e4e0d6] lg:pl-8">
          <section><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#879087]">Recently reunited</p><div className="mt-4 space-y-4"><Recent icon="⌁" title="Silver water bottle" detail="Returned at the gym · 2h ago"/><Recent icon="▤" title="Calculus notebook" detail="Found in East Hall · Yesterday"/><Recent icon="⌂" title="Bicycle key" detail="Turned in to Security · Yesterday"/></div></section>
          <section id="how-it-works" className="border-t border-[#e4e0d6] pt-6"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#879087]">From lost to found</p><ol className="mt-4 space-y-4">{[{n:"01",t:"Describe it",d:"Share the details you remember."},{n:"02",t:"Review a match",d:"See what lines up and where it was found."},{n:"03",t:"Collect safely",d:"Verify with campus staff before pickup."}].map(step => <li key={step.n} className="flex gap-3"><span className="pt-0.5 font-mono text-[10px] font-semibold text-[#7f8f7f]">{step.n}</span><div><p className="text-xs font-bold text-[#37433c]">{step.t}</p><p className="mt-1 text-[11px] leading-5 text-[#879087]">{step.d}</p></div></li>)}</ol></section>
          <div className="border-l-2 border-[#b58b43] bg-[#f0ede3] px-4 py-3"><p className="text-xs font-semibold text-[#535a4e]">A note on privacy</p><p className="mt-1 text-[11px] leading-5 text-[#747a70]">We keep one or two details private so only the real owner can claim an item.</p></div>
        </aside>
      </div>
    </div>
  )
}

function Evidence({ label, value }: { label: string; value: string }) { return <div className="border-l-2 border-[#93ad91] bg-[#f7f7f2] px-3 py-2.5"><p className="text-[9px] font-bold uppercase tracking-[.1em] text-[#788279]">{label}</p><p className="mt-1 text-[11px] font-semibold leading-4 text-[#47554a]">{value}</p></div> }
function Recent({ icon, title, detail }: { icon: string; title: string; detail: string }) { return <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center border border-[#e2e0d7] bg-white text-lg text-[#647c67]">{icon}</span><div><p className="text-xs font-semibold text-[#39443e]">{title}</p><p className="mt-1 text-[10px] text-[#8a928a]">{detail}</p></div></div> }
