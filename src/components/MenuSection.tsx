import { categories, sauces, supplements } from "@/lib/menu";
import { ProductCard } from "./ProductCard";

export function MenuSection() {
  return (
    <section id="menu" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-kalam-100 px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase text-kalam-700">
            La Carte
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-kalam-950 tracking-tight">
            Tout ce qu'on fait,
            <br />
            on le fait <span className="text-kalam-600">minute</span>.
          </h2>
          <p className="mt-4 text-kalam-700/80 text-lg">
            Viandes halal, frites maison, sauces fait maison. Commandez au
            comptoir, à emporter ou via Uber Eats.
          </p>
        </div>

        <nav
          aria-label="Catégories"
          className="mt-10 flex flex-wrap gap-2 border-b border-kalam-100 pb-4"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-kalam-50 hover:bg-kalam-100 text-kalam-800 px-4 py-2 text-sm font-semibold transition-colors"
            >
              <span>{cat.emoji}</span> {cat.title}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-kalam-900 tracking-tight">
                    <span className="mr-3">{cat.emoji}</span>
                    {cat.title}
                  </h3>
                  {cat.subtitle && (
                    <p className="mt-1.5 text-kalam-700/70">{cat.subtitle}</p>
                  )}
                </div>
                <span className="hidden sm:inline text-sm text-kalam-500 font-medium">
                  {cat.products.length} produit{cat.products.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cat.products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-kalam-50 border border-kalam-100 p-8">
            <h4 className="text-xl font-black text-kalam-900">Suppléments</h4>
            <p className="mt-1 text-sm text-kalam-700/70">
              Personnalisez votre sandwich ou burger.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {supplements.map((s) => (
                <li
                  key={s.name}
                  className="flex items-baseline justify-between border-b border-dashed border-kalam-200 pb-1.5"
                >
                  <span className="text-kalam-900">{s.name}</span>
                  <span className="font-bold text-kalam-700">
                    {s.price === null
                      ? "—"
                      : `${s.price % 1 === 0 ? s.price : s.price.toFixed(2).replace(".", ",")}€`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl brush-card text-white p-8">
            <h4 className="text-xl font-black">Sauces maison</h4>
            <p className="mt-1 text-sm text-kalam-100/80">
              13 sauces à choisir · offertes avec chaque commande.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {sauces.map((sauce) => (
                <span
                  key={sauce}
                  className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur"
                >
                  {sauce}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
