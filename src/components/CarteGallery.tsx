import Image from "next/image";

const pages = [
  { src: "/carte-page-7723.jpg", label: "Couverture", alt: "Flyer Kalam — couverture avec le sandwich signature" },
  { src: "/carte-page-7724.jpg", label: "Sandwichs", alt: "Page Nos Sandwichs — 17 recettes signature" },
  { src: "/carte-page-7725.jpg", label: "Burgers & Compose", alt: "Page Compose ton sandwich et Nos Burgers" },
  { src: "/carte-page-7726.jpg", label: "Menus & Tacos", alt: "Page Menu étudiant, Tacos, Tenders et Desserts" },
];

export function CarteGallery() {
  return (
    <section className="bg-kalam-950 text-white py-20 sm:py-24 overflow-hidden relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(168,108,200,.45) 0%, transparent 40%), radial-gradient(circle at 85% 70%, rgba(107,47,143,.45) 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase text-kalam-yellow">
            La carte en images
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
            Feuilletez notre
            <br />
            flyer comme en boutique.
          </h2>
          <p className="mt-4 text-kalam-100/80 text-lg">
            Les 4 pages du flyer Kalam, en haute résolution. Zoomez pour tout voir.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pages.map((page) => (
            <a
              key={page.src}
              href={page.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-white/10 bg-kalam-900 hover:border-kalam-yellow/60 hover:scale-[1.02] transition-all shadow-lg hover:shadow-kalam-yellow/20"
            >
              <Image
                src={page.src}
                alt={page.alt}
                width={800}
                height={1067}
                className="w-full h-auto aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kalam-950/90 via-kalam-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-kalam-yellow text-kalam-950 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {page.label}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 border border-white/20 backdrop-blur text-white group-hover:bg-kalam-yellow group-hover:text-kalam-950 transition">
                  <ZoomIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZoomIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="m20 20-3.5-3.5M8 11h6m-3-3v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
