import { restaurant } from "@/lib/restaurant";

export function Hero() {
  return (
    <section className="relative overflow-hidden brush-band text-white">
      <BrushSplashes />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-kalam-yellow" />
              Halal · Montgeron
            </span>

            <h1 className="mt-6 font-sans text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              Le goût qui
              <br />
              fait la diff'
              <span className="text-kalam-yellow">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-kalam-100/90">
              17 sandwichs signature, burgers gourmet, tacos XL et formules
              imbattables. Fait minute, chez{" "}
              <span className="font-[family-name:var(--font-display)] text-2xl text-white align-middle">
                Kalam
              </span>{" "}
              à Montgeron.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-kalam-yellow px-6 py-3.5 text-base font-bold text-kalam-950 hover:brightness-95 transition"
              >
                Voir la carte
                <ArrowIcon />
              </a>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition backdrop-blur"
              >
                Appeler {restaurant.phone}
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <Stat kpi="17+" label="Sandwichs signature" />
              <Stat kpi="6.50€" label="Menu étudiant" />
              <Stat kpi="23h45" label="Fermeture tardive" />
            </dl>
          </div>

          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-black text-white">{kpi}</dt>
      <dd className="mt-1 text-xs text-kalam-100/70 uppercase tracking-wider">
        {label}
      </dd>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden>
      <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrushSplashes() {
  return (
    <>
      <div className="pointer-events-none absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full bg-kalam-500/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[640px] h-[640px] rounded-full bg-kalam-400/25 blur-3xl" aria-hidden />
    </>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-kalam-yellow/40 to-kalam-400/30 blur-2xl" aria-hidden />
      <div className="relative rounded-[2rem] bg-white/5 border border-white/15 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-display)] text-5xl text-white">
            Kalam
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-kalam-yellow px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-kalam-950">
            Halal
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {FEATURED.map((item) => (
            <div key={item.name} className="rounded-2xl bg-kalam-900/60 border border-white/10 p-4">
              <div className="text-2xl">{item.emoji}</div>
              <div className="mt-3 text-sm font-semibold text-white">{item.name}</div>
              <div className="mt-1 text-xs text-kalam-200/80">{item.desc}</div>
              <div className="mt-3 flex items-center gap-1">
                <span className="text-xs text-kalam-200">dès</span>
                <span className="text-lg font-black text-kalam-yellow">{item.from}€</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-kalam-100/80">
          <span>Sur place · À emporter</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ouvert aujourd'hui
          </span>
        </div>
      </div>
    </div>
  );
}

const FEATURED = [
  { emoji: "🥙", name: "Tandoori", desc: "Poulet mariné maison", from: "8" },
  { emoji: "🍔", name: "Smash K", desc: "Steak gourmet 175g", from: "9" },
  { emoji: "🌯", name: "T-Max", desc: "4 steaks XL · new", from: "11" },
  { emoji: "🎯", name: "Menu Étudiant", desc: "Sandwich + frites + boisson", from: "6.50" },
];
