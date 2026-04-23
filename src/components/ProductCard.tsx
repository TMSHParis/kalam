import type { Product } from "@/lib/menu";

const badgeLabel: Record<NonNullable<Product["badge"]>, string> = {
  new: "Nouveau",
  student: "Étudiant",
};

const badgeStyle: Record<NonNullable<Product["badge"]>, string> = {
  new: "bg-kalam-yellow text-kalam-950",
  student: "bg-kalam-600 text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const minPrice = product.sizes
    ? Math.min(...product.sizes.map((s) => s.price))
    : product.price;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-white border border-kalam-100 p-5 hover:border-kalam-300 hover:shadow-lg hover:-translate-y-0.5 transition-all">
      {product.badge && (
        <span
          className={`absolute -top-2 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeStyle[product.badge]}`}
        >
          {badgeLabel[product.badge]}
        </span>
      )}

      <h3 className="text-lg font-bold text-kalam-900 leading-tight">
        {product.name}
      </h3>

      {product.description && (
        <p className="mt-1.5 text-sm text-kalam-700/75 leading-snug flex-1">
          {product.description}
        </p>
      )}

      <div className="mt-4 flex items-end justify-between gap-3">
        {product.sizes ? (
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <span
                key={size.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-kalam-50 px-2.5 py-1 text-xs font-semibold text-kalam-800"
              >
                <span className="text-kalam-500">{size.label}</span>
                <span className="text-kalam-900">{formatPrice(size.price)}</span>
              </span>
            ))}
          </div>
        ) : product.price !== undefined ? (
          <span className="text-xs text-kalam-600 font-medium">Prix unique</span>
        ) : null}

        {minPrice !== undefined && !product.sizes && (
          <span className="text-2xl font-black text-kalam-700">
            {formatPrice(minPrice)}
          </span>
        )}
      </div>
    </article>
  );
}

function formatPrice(n: number): string {
  return n % 1 === 0 ? `${n}€` : `${n.toFixed(2).replace(".", ",")}€`;
}
