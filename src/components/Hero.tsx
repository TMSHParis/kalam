import Image from "next/image";
import { restaurant } from "@/lib/restaurant";

export function Hero() {
  return (
    <section className="relative overflow-hidden brush-band text-white">
      <BrushSplashes />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
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

          <HeroVisual />
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
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrushSplashes() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full bg-kalam-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 w-[640px] h-[640px] rounded-full bg-kalam-400/25 blur-3xl"
        aria-hidden
      />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-kalam-yellow/40 to-kalam-400/40 blur-3xl"
        aria-hidden
      />
      <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-kalam-900">
        <Image
          src="/hero-kebab.jpg"
          alt="Sandwich Kalam avec frites maison et coca"
          width={1800}
          height={900}
          priority
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kalam-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-kalam-yellow">
              Signature
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black text-white leading-tight">
              Sandwich Tandoori
            </div>
            <div className="mt-0.5 text-xs text-kalam-100/80">
              Poulet mariné maison, cheddar fondu, frites
            </div>
          </div>
          <div className="shrink-0 rounded-2xl bg-kalam-yellow text-kalam-950 px-4 py-2.5 text-center">
            <div className="text-[10px] font-bold uppercase tracking-wider">
              dès
            </div>
            <div className="text-2xl font-black leading-none">8€</div>
          </div>
        </div>
      </div>
    </div>
  );
}
