export type Size = { label: string; price: number };
export type Product = {
  id: string;
  name: string;
  description?: string;
  sizes?: Size[];
  price?: number;
  badge?: "new" | "student";
  emoji?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  products: Product[];
};

const seulMenu = (seul: number, menu: number): Size[] => [
  { label: "Seul", price: seul },
  { label: "Menu", price: menu },
];

export const sandwichs: Product[] = [
  { id: "savoureux", name: "Savoureux", description: "Escalope, steak, cheddar", sizes: seulMenu(9, 10), emoji: "🥙" },
  { id: "radikool", name: "Radikool", description: "Escalope, cordon bleu, cheddar", sizes: seulMenu(9.5, 10.5), emoji: "🥙" },
  { id: "steak-zinger", name: "Steak Zinger", description: "Steak, filet de poulet mariné, cheddar", sizes: seulMenu(9.5, 10.5), emoji: "🥩", badge: "new" },
  { id: "mytik", name: "Mytik", description: "Chicken spécial, steak, cheddar", sizes: seulMenu(9, 10), emoji: "🥙" },
  { id: "farmer", name: "Farmer", description: "Steak, jambon, chorizo, cheddar", sizes: seulMenu(9, 10), emoji: "🥓" },
  { id: "special", name: "Spécial", description: "Poulet marinade spécial, cheddar", sizes: seulMenu(8.5, 9.5), emoji: "🍗" },
  { id: "buffalo", name: "Buffalo", description: "3 steaks, bacon, cheddar", sizes: seulMenu(9, 10), emoji: "🥩" },
  { id: "radikal", name: "Radikal", description: "Steak, cordon bleu, cheddar", sizes: seulMenu(9, 10), emoji: "🥙" },
  { id: "delice", name: "Délice", description: "Escalope, bacon, cheddar", sizes: seulMenu(9, 10), emoji: "🥓" },
  { id: "curry", name: "Curry", description: "Poulet curry mariné, cheddar", sizes: seulMenu(8.5, 9.5), emoji: "🍛" },
  { id: "escalope-viennoise", name: "Escalope Viennoise", description: "Escalope panée, cheddar", sizes: seulMenu(7.5, 8.5), emoji: "🥪" },
  { id: "savoyard", name: "Savoyard", description: "Steak, lardon, p. de terre, crème fraîche, raclette", sizes: seulMenu(9.5, 10.5), emoji: "🧀" },
  { id: "tandoori", name: "Tandoori", description: "Poulet tandoori mariné, cheddar", sizes: seulMenu(8.5, 9.5), emoji: "🍗" },
  { id: "chicken-mix", name: "Chicken Mix", description: "Chicken tandoori, chicken curry, cheddar", sizes: seulMenu(9.5, 10.5), emoji: "🍗" },
  { id: "steak", name: "Steak", description: "Double steak, cheddar", sizes: seulMenu(7.5, 8.5), emoji: "🥩" },
  { id: "kebab", name: "Kebab", description: "Émincé de kebab", sizes: seulMenu(7.5, 8.5), emoji: "🌯" },
  { id: "escalope", name: "Escalope", description: "Escalope, cheddar", sizes: seulMenu(8.5, 9.5), emoji: "🥪" },
  { id: "supreme-tandoori", name: "Suprême Tandoori", description: "Chicken tandoori, steak, cheddar", sizes: seulMenu(9, 10), emoji: "🍗" },
  { id: "mix", name: "Mix", description: "Kebab, 1 viande au choix, cheddar", sizes: seulMenu(9, 10), emoji: "🌯" },
  { id: "supreme-curry", name: "Suprême Curry", description: "Chicken curry, steak, cheddar", sizes: seulMenu(9, 10), emoji: "🍛" },
];

export const burgers: Product[] = [
  { id: "double-cheese", name: "Double Cheese", description: "2 steaks, cheddar", sizes: seulMenu(7, 8), emoji: "🍔" },
  { id: "smash-k", name: "Smash K", description: "Steak gourmet 65g, cheddar, sauce spécial", sizes: seulMenu(9, 10), emoji: "🍔", badge: "new" },
  { id: "royal-bacon", name: "Royal Bacon", description: "2 steaks, bacon, cheddar", sizes: seulMenu(7.5, 8.5), emoji: "🥓" },
  { id: "country", name: "Country", description: "2 steaks, galette de pomme de terre, cheddar", sizes: seulMenu(8.5, 9.5), emoji: "🥔" },
  { id: "chicken-burger", name: "Chicken Burger", description: "Poulet pané, cheddar", sizes: seulMenu(7.5, 8.5), emoji: "🍗" },
  { id: "le-k-burger", name: "Le K Burger", description: "Filet de poulet mariné et pané, cheddar", sizes: seulMenu(8, 9), emoji: "🍗" },
  { id: "big-up", name: "Big Up", description: "3 steaks 180g, cheddar", sizes: seulMenu(11.5, 12.5), emoji: "🍔" },
  { id: "big-two", name: "Big Two", description: "2 steaks 180g, cheddar", sizes: seulMenu(10.5, 11.5), emoji: "🍔" },
  { id: "big-one", name: "Big One", description: "1 steak 180g, cheddar", sizes: seulMenu(9.5, 10.5), emoji: "🍔" },
  { id: "big-burger", name: "Big Burger", description: "2 steaks, cheddar", sizes: seulMenu(8, 9), emoji: "🍔" },
];

export const tacos: Product[] = [
  { id: "t1", name: "T1", description: "2 steaks, fromage", price: 8, emoji: "🥪" },
  { id: "t2", name: "T2", description: "4 steaks, fromage", price: 9.5, emoji: "🥪" },
  { id: "t-max", name: "T-Max", description: "6 steaks, fromage", price: 11, emoji: "🥪" },
  { id: "croq-mr", name: "Croq Mr", description: "Dinde, fromage", price: 7.5, emoji: "🧀" },
];

export const snacks: Product[] = [
  {
    id: "tenders",
    name: "Tenders",
    description: "Filets de poulet panés",
    sizes: [
      { label: "x4", price: 7 },
      { label: "x6", price: 8 },
      { label: "x9", price: 9 },
    ],
    emoji: "🍗",
    badge: "new",
  },
  {
    id: "nuggets",
    name: "Nuggets",
    description: "Nuggets de poulet",
    sizes: [
      { label: "x4", price: 6.5 },
      { label: "x6", price: 7.5 },
      { label: "x9", price: 9.5 },
    ],
    emoji: "🐔",
  },
];

export const menusFormules: Product[] = [
  {
    id: "menu-etudiant",
    name: "Menu Étudiant",
    description: "Sandwich au choix + frites + boisson · entre 11h30–14h30 sauf dimanche et vacances",
    price: 6.5,
    badge: "student",
    emoji: "🎓",
  },
  {
    id: "menu-enfant",
    name: "Menu Enfant",
    description: "Cheeseburger ou nuggets x4 + frites + boisson",
    price: 6.5,
    emoji: "🧒",
  },
  {
    id: "compose",
    name: "Compose ton sandwich",
    description: "Pain maison ou tortilla · 2 viandes au choix · suppléments possibles",
    price: 11,
    badge: "new",
    emoji: "🥖",
  },
];

export const desserts: Product[] = [
  { id: "tiramisu-mangue", name: "Tiramisu Mangue", price: 3.5, emoji: "🥭" },
  { id: "tiramisu-maison", name: "Tiramisu Maison", price: 3.5, emoji: "🍮" },
  { id: "tarte-daim", name: "Tarte au Daim", price: 2.5, emoji: "🍫" },
];

export const supplements = [
  { name: "Lardon", price: 1.2 },
  { name: "Raclette", price: 1.2 },
  { name: "Galette de pomme de terre", price: 1.2 },
  { name: "Boursin", price: 1 },
  { name: "Jambon", price: 1 },
  { name: "Cheddar", price: 1 },
  { name: "Œuf", price: 1 },
  { name: "Bacon", price: 1 },
  { name: "Chorizo", price: 1 },
  { name: "Viande supp", price: 2.5 },
  { name: "Steak Big", price: 3.5 },
] as const;

export const sauces = [
  "Poivre",
  "Chili Thaï",
  "Andalouse",
  "Blanche",
  "Fish",
  "Cheesy",
  "Harissa",
  "Barbecue",
  "Algérienne",
  "Mayonnaise",
  "Ketchup",
  "Samouraï",
  "Moutarde",
  "Biggy",
] as const;

export const categories: MenuCategory[] = [
  { id: "formules", title: "Formules", subtitle: "Menus étudiant, enfant et compose ton sandwich", emoji: "🎯", products: menusFormules },
  { id: "sandwichs", title: "Sandwichs", subtitle: "20 recettes signature · prix Seul ou Menu (frites + boisson)", emoji: "🥙", products: sandwichs },
  { id: "burgers", title: "Burgers", subtitle: "Smash, Big, Chicken et spécialités maison", emoji: "🍔", products: burgers },
  { id: "tacos", title: "Tacos", subtitle: "Chauds et fondants · de T1 à T-Max", emoji: "🌯", products: tacos },
  { id: "snacks", title: "Snacks", subtitle: "Tenders et nuggets · x4, x6 ou x9", emoji: "🍗", products: snacks },
  { id: "desserts", title: "Desserts", subtitle: "Tiramisu maison et tarte au Daim", emoji: "🍰", products: desserts },
];
