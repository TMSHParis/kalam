export const restaurant = {
  name: "Kalam",
  tagline: "Sandwichs, Burgers & Toasts — Halal à Montgeron",
  address: {
    street: "42 Avenue de la République",
    city: "Montgeron",
    zip: "91230",
    country: "France",
  },
  phone: "01 78 84 33 90",
  phoneHref: "tel:+33178843390",
  instagram: "le_kalam",
  instagramUrl: "https://www.instagram.com/le_kalam",
  uberEats: true,
  halal: true,
  hours: [
    { label: "Lundi", open: "11h30", close: "23h45" },
    { label: "Mardi", open: "11h30", close: "23h45" },
    { label: "Mercredi", open: "11h30", close: "23h45" },
    { label: "Jeudi", open: "11h30", close: "23h45" },
    { label: "Vendredi", open: "18h00", close: "23h45" },
    { label: "Samedi", open: "11h30", close: "23h45" },
    { label: "Dimanche", open: "11h30", close: "23h45" },
  ],
  hoursSummary: "Lun–Dim · 11h30–23h45 · Vendredi 18h–23h45",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=42+Avenue+de+la+R%C3%A9publique+91230+Montgeron",
} as const;
