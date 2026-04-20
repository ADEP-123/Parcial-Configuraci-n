import { useState, useEffect } from "react";
import { productData } from "../data/products";

export function useProductFilter() {
  const [products, setProducts] = useState(productData);
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    const filtered = productData.filter(product => {
      const matchesCategory = filter === "Todos" || product.category === filter;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice =
        priceFilter === "all"
          ? true
          : priceFilter === "low"
            ? product.price < 80
            : priceFilter === "medium"
              ? product.price >= 80 && product.price <= 130
              : priceFilter === "high"
                ? product.price > 130
                : true;

      return matchesCategory && matchesSearch && matchesPrice;
    });
    setProducts(filtered);
  }, [filter, searchTerm, priceFilter]);

  return {
    products,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    priceFilter,
    setPriceFilter,
  };
}
