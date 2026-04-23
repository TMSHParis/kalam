import { restaurant } from "@/lib/restaurant";

export function InfoSection() {
  return (
    <section id="infos" className="bg-kalam-50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block rounded-full bg-kalam-100 px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase text-kalam-700">
              Nous trouver
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-kalam-950 tracking-tight">
              En plein centre
              <br />
              de <span className="text-kalam-600">Montgeron</span>.
            </h2>

            <div className="mt-8 space-y-5">
              <InfoRow
                icon={<PinIcon />}
                title="Adresse"
                value={`${restaurant.address.street}, ${restaurant.address.zip} ${restaurant.address.city}`}
                href={restaurant.mapsUrl}
                action="Itinéraire"
              />
              <InfoRow
                icon={<PhoneIcon />}
                title="Téléphone"
                value={restaurant.phone}
                href={restaurant.phoneHref}
                action="Appeler"
              />
              <InfoRow
                icon={<InstagramIcon />}
                title="Instagram"
                value={`@${restaurant.instagram}`}
                href={restaurant.instagramUrl}
                action="Suivre"
              />
            </div>
          </div>

          <div>
            <div className="rounded-3xl bg-white border border-kalam-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-xl font-black text-kalam-900">Horaires</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 text-green-700 border border-green-200 px-3 py-1 text-xs font-semibold">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Ouvert jusqu'à 23h45
                </span>
              </div>

              <ul className="mt-5 divide-y divide-kalam-100">
                {restaurant.hours.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="font-semibold text-kalam-900">
                      {h.label}
                    </span>
                    <span className="text-sm text-kalam-700">
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-kalam-700/70 leading-relaxed">
                Le vendredi, ouverture à 18h00 après la prière. Menu étudiant
                non disponible le dimanche et pendant les vacances scolaires.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Badge label="Halal" />
              <Badge label="Sur place" />
              <Badge label="Uber Eats" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  value,
  href,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  action: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 rounded-2xl bg-white border border-kalam-100 p-4 sm:p-5">
      <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-kalam-600 text-white flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold tracking-wider uppercase text-kalam-500">
          {title}
        </div>
        <div className="mt-0.5 text-sm sm:text-base text-kalam-900 font-semibold truncate">
          {value}
        </div>
      </div>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="self-center shrink-0 rounded-full border border-kalam-200 text-kalam-700 hover:bg-kalam-50 px-3 sm:px-4 py-2 text-xs font-semibold"
      >
        {action}
      </a>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-kalam-100 py-4 text-center">
      <div className="text-sm font-bold text-kalam-800">{label}</div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .97.76l.94 3.76a1 1 0 0 1-.27.96L7.2 10.2a13 13 0 0 0 6.6 6.6l1.72-1.74a1 1 0 0 1 .96-.27l3.76.94a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2A18 18 0 0 1 3 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
