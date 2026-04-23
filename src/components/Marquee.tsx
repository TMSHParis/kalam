const items = [
  "🥙 Halal 100%",
  "★ Fait minute",
  "🍟 Frites maison",
  "🔥 Ouvert jusqu'à 23h45",
  "🚴 Livraison Uber Eats",
  "🎓 Menu Étudiant 6.50€",
  "📍 42 Av. de la République · Montgeron",
  "🆕 Nouveau : Smash K · T-Max",
];

export function Marquee() {
  return (
    <div className="bg-kalam-950 text-kalam-100 border-y border-kalam-800 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-6 text-sm font-semibold tracking-wide flex items-center gap-2"
          >
            {item}
            <span className="text-kalam-500">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
