import Link from "next/link";
import { Logo } from "./Logo";
import { restaurant } from "@/lib/restaurant";

const nav = [
  { href: "#menu", label: "La carte" },
  { href: "#formules", label: "Formules" },
  { href: "#infos", label: "Infos" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-kalam-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo className="text-3xl" />
          <span className="hidden sm:inline text-[10px] font-semibold tracking-[0.2em] text-kalam-500 uppercase">
            Montgeron
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-kalam-900">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-kalam-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={restaurant.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-kalam-200 px-4 py-2 text-sm font-semibold text-kalam-700 hover:bg-kalam-50 transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            {restaurant.phone}
          </a>
          <a
            href="#menu"
            className="inline-flex items-center rounded-full bg-kalam-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-kalam-700 transition-colors shadow-sm"
          >
            Commander
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .97.76l.94 3.76a1 1 0 0 1-.27.96L7.2 10.2a13 13 0 0 0 6.6 6.6l1.72-1.74a1 1 0 0 1 .96-.27l3.76.94a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2A18 18 0 0 1 3 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
