import { restaurant } from "@/lib/restaurant";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-kalam-950 text-kalam-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <Logo variant="light" className="text-5xl" />
            <p className="mt-4 text-sm text-kalam-200/80 max-w-sm leading-relaxed">
              Restaurant halal à Montgeron. Sandwichs, burgers, tacos et
              formules. Fait minute, viandes halal, sauces maison.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-kalam-600 hover:bg-kalam-500 px-5 py-2.5 text-sm font-bold text-white transition-colors"
              >
                📞 {restaurant.phone}
              </a>
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                @{restaurant.instagram}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-kalam-yellow">
              Adresse
            </h4>
            <address className="mt-4 not-italic text-sm leading-relaxed text-kalam-100">
              {restaurant.address.street}
              <br />
              {restaurant.address.zip} {restaurant.address.city}
              <br />
              {restaurant.address.country}
            </address>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-kalam-300 hover:text-white underline underline-offset-4"
            >
              Ouvrir dans Maps →
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-kalam-yellow">
              Horaires
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li className="flex justify-between gap-4">
                <span>Lun – Jeu</span>
                <span className="text-kalam-200/80">11h30 – 23h45</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Vendredi</span>
                <span className="text-kalam-200/80">18h00 – 23h45</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sam – Dim</span>
                <span className="text-kalam-200/80">11h30 – 23h45</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kalam-300/70">
          <span>© {new Date().getFullYear()} Kalam Montgeron · Tous droits réservés</span>
          <span>Halal · Sur place · À emporter · Uber Eats</span>
        </div>
      </div>
    </footer>
  );
}
