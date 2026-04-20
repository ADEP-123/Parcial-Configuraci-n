export const productData = [
  {
    id: 1,
    name: "Zapato Deportivo Runner",
    price: 89.99,
    category: "Deportivo",
    image: "https://placehold.co/300x300",
    stock: 15,
  },
  {
    id: 2,
    name: "Zapato Formal Elegance",
    price: 129.99,
    category: "Formal",
    image: "https://placehold.co/300x300",
    stock: 8,
  },
  {
    id: 3,
    name: "Sandalia Summer Beach",
    price: 45.5,
    category: "Casual",
    image: "https://placehold.co/300x300",
    stock: 20,
  },
  {
    id: 4,
    name: "Bota Timber Classic",
    price: 159.99,
    category: "Botas",
    image: "https://placehold.co/300x300",
    stock: 5,
  },
  {
    id: 5,
    name: "Zapato Deportivo Pro",
    price: 110.0,
    category: "Deportivo",
    image: "https://placehold.co/300x300",
    stock: 12,
  },
  {
    id: 6,
    name: "Mocasín Comfort Plus",
    price: 75.0,
    category: "Casual",
    image: "https://placehold.co/300x300",
    stock: 18,
  },
  {
    id: 7,
    name: "Zapato Formal Executive",
    price: 189.99,
    category: "Formal",
    image: "https://placehold.co/300x300",
    stock: 3,
  },
  {
    id: 8,
    name: "Botín Urban Style",
    price: 95.0,
    category: "Botas",
    image: "https://placehold.co/300x300",
    stock: 10,
  },
];

export const PRICE_RANGES = {
  low: { max: 80 },
  medium: { min: 80, max: 130 },
  high: { min: 130 },
};

export const CATEGORIES = [
  "Todos",
  ...new Set(productData.map(product => product.category)),
];
