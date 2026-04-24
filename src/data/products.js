export const productData = [
  {
    id: 1,
    name: "Zapato Deportivo Runner",
    price: 89.99,
    category: "Deportivo",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
    stock: 15,
  },
  {
    id: 2,
    name: "Zapato Formal Elegance",
    price: 129.99,
    category: "Formal",
    image:
      "https://images.unsplash.com/photo-1641893843833-a006778dc00b?w=300&h=300&fit=crop&crop=center",
    stock: 8,
  },
  {
    id: 3,
    name: "Sandalia Summer Beach",
    price: 45.5,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=300&fit=crop&crop=center",

    stock: 20,
  },
  {
    id: 4,
    name: "Bota Timber Classic",
    price: 159.99,
    category: "Botas",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=300&h=300&fit=crop&crop=center",

    stock: 5,
  },
  {
    id: 5,
    name: "Zapato Deportivo Pro",
    price: 110.0,
    category: "Deportivo",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center",

    stock: 12,
  },
  {
    id: 6,
    name: "Mocasín Comfort Plus",
    price: 75.0,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&crop=center",

    stock: 18,
  },
  {
    id: 7,
    name: "Zapato Formal Executive",
    price: 189.99,
    category: "Formal",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=300&h=300&fit=crop&crop=center",

    stock: 3,
  },
  {
    id: 8,
    name: "Botín Urban Style",
    price: 95.0,
    category: "Botas",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop&crop=center",

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

export const DEFAULT_PRICE_FILTER = "all";
