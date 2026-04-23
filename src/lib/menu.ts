export type Size = { label: string; price: number };
export type Product = {
  id: string;
  name: string;
  description?: string;
  sizes?: Size[];
  price?: number;
  badge?: "new" | "student";
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  products: Product[];
};

export const sandwichs: Product[] = [
  { id: "savoureux", name: "Savoureux", description: "Escalope panée, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "radikool", name: "Radikool", description: "Steak tandoori, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "farmer", name: "Farmer", description: "Steak, bacon, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "special", name: "Special", description: "Steak, galette de pomme de terre, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "delice", name: "Délice", description: "Poulet curry mariné, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "tandoori", name: "Tandoori", description: "Poulet tandoori, cheddar", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }] },
  { id: "chicken-mix", name: "Chicken Mix", description: "Poulet tandoori, chicken curry, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "supreme-tandoori", name: "Suprême Tandoori", description: "Steak tandoori, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "escalope", name: "Escalope", description: "Escalope, cheddar", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }] },
  { id: "steak-zinger", name: "Steak Zinger", description: "Steak épicé, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }], badge: "new" },
  { id: "buffalo", name: "Buffalo", description: "Poulet buffalo, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "escalope-viennoise", name: "Escalope Viennoise", description: "Escalope viennoise, cheddar", sizes: [{ label: "M", price: 7 }, { label: "L", price: 8.5 }] },
  { id: "steak", name: "Steak", description: "Double steak, cheddar", sizes: [{ label: "M", price: 7 }, { label: "L", price: 8.5 }] },
  { id: "kebab", name: "Kebab", description: "Émincé de kebab", sizes: [{ label: "M", price: 7 }, { label: "L", price: 8.5 }] },
  { id: "supreme-curry", name: "Suprême Curry", description: "Chicken curry, steak, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "mix", name: "Mix", description: "Kebab, 2 viandes au choix, cheddar", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
  { id: "mytik", name: "Mytik", description: "Spécialité maison", sizes: [{ label: "M", price: 9.5 }, { label: "L", price: 10 }] },
];

export const burgers: Product[] = [
  { id: "double-cheese", name: "Double Cheese", description: "2 steaks, cheddar", sizes: [{ label: "M", price: 7 }, { label: "L", price: 8 }] },
  { id: "royal-bacon", name: "Royal Bacon", description: "2 steaks, bacon, cheddar", sizes: [{ label: "M", price: 7.5 }, { label: "L", price: 8 }] },
  { id: "country", name: "Country", description: "2 steaks, galette de pomme de terre, cheddar", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }] },
  { id: "big-one", name: "Big One", description: "1 steak 180g, cheddar", sizes: [{ label: "M", price: 9 }, { label: "L", price: 10 }] },
  { id: "big-two", name: "Big Two", description: "2 steaks 180g, cheddar", sizes: [{ label: "M", price: 10 }, { label: "L", price: 11 }] },
  { id: "big-up", name: "Big Up", description: "3 steaks 180g, cheddar", sizes: [{ label: "M", price: 11 }, { label: "L", price: 12 }] },
  { id: "big-burger", name: "Big Burger", description: "2 steaks, cheddar", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }] },
  { id: "chicken-burger", name: "Chicken Burger", description: "Poulet pané, cheddar", sizes: [{ label: "M", price: 7 }, { label: "L", price: 8 }] },
  { id: "le-k-burger", name: "Le K Burger", description: "Filet de poulet pané, bacon, cheddar", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }] },
  { id: "smash-k", name: "Smash K", description: "Steak gourmet 175g, cheddar", sizes: [{ label: "M", price: 9 }, { label: "L", price: 10 }], badge: "new" },
];

export const tacos: Product[] = [
  { id: "t1", name: "T1", description: "2 steaks, fromage", sizes: [{ label: "M", price: 8 }, { label: "L", price: 9 }, { label: "XL", price: 9.5 }] },
  { id: "t2", name: "T2", description: "2 steaks, fromage", sizes: [{ label: "M", price: 8.5 }, { label: "L", price: 9.5 }] },
  { id: "t-max", name: "T-Max", description: "4 steaks, fromage", sizes: [{ label: "XL", price: 11 }], badge: "new" },
  { id: "croq-mr", name: "Croq Mr", description: "Croque-monsieur chaud", sizes: [{ label: "M", price: 7.5 }, { label: "L", price: 9.5 }] },
];

export const snacks: Product[] = [
  { id: "tenders", name: "Tenders", description: "Filets de poulet panés", sizes: [{ label: "x3", price: 3.5 }, { label: "x5", price: 6.5 }, { label: "x7", price: 9 }] },
  { id: "nuggets", name: "Nuggets", description: "Nuggets de poulet", sizes: [{ label: "x3", price: 3 }, { label: "x5", price: 7.5 }, { label: "x7", price: 9.5 }] },
  { id: "dinde-fromage", name: "Dinde fromage", description: "Chaud, fondant", price: 6.5 },
  { id: "pate-jambon", name: "Pâté au jambon", description: "À la découpe", price: 3 },
];

export const menusFormules: Product[] = [
  { id: "menu-etudiant", name: "Menu Étudiant", description: "Sandwich au choix + frites + boisson · sauf dimanche et vacances", price: 6.5, badge: "student" },
  { id: "menu-enfant", name: "Menu Enfant", description: "Cheeseburger ou 4 nuggets + frites + boisson", price: 6.5 },
  { id: "compose", name: "Compose ton sandwich", description: "Pain maison ou tortilla · 2 viandes au choix · suppléments possibles", price: 11, badge: "new" },
];

export const desserts: Product[] = [
  { id: "tiramisu-passion", name: "Tiramisu Passion", price: 3 },
  { id: "tiramisu-mangue", name: "Tiramisu Mangue", price: 3 },
];

export const supplements = [
  { name: "Viande supp", price: 2.5 },
  { name: "Steak Big", price: 3.5 },
  { name: "Cheddar", price: 1 },
  { name: "Galette de pomme de terre", price: 1.2 },
  { name: "Lardon", price: null },
  { name: "Raclette", price: null },
  { name: "Jambon", price: null },
  { name: "Bacon", price: null },
  { name: "Boursin", price: null },
  { name: "Œuf", price: null },
  { name: "Chorizo", price: null },
] as const;

export const sauces = [
  "Poivre",
  "Chili Thaï",
  "Samouraï",
  "Blanche",
  "Fish",
  "Cheezy",
  "Harissa",
  "Barbecue",
  "Algérienne",
  "Mayonnaise",
  "Ketchup",
  "Moutarde",
  "Bigy",
] as const;

export const categories: MenuCategory[] = [
  { id: "formules", title: "Formules", subtitle: "Menus étudiant, enfant et compose ton sandwich", emoji: "🎯", products: menusFormules },
  { id: "sandwichs", title: "Sandwichs", subtitle: "17 recettes signature · tailles M et L", emoji: "🥙", products: sandwichs },
  { id: "burgers", title: "Burgers", subtitle: "Smash, Big, Chicken et spécialités maison", emoji: "🍔", products: burgers },
  { id: "tacos", title: "Tacos", subtitle: "Chauds et fondants · du M au XL", emoji: "🌯", products: tacos },
  { id: "snacks", title: "Snacks", subtitle: "Tenders, nuggets et à la découpe", emoji: "🍗", products: snacks },
  { id: "desserts", title: "Desserts", subtitle: "Tiramisu maison", emoji: "🍰", products: desserts },
];
