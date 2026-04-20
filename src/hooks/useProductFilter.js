import { useState, useMemo } from "react";
import { productData } from "../data/products";

export function useProductFilter() {
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const products = useMemo(() => {
    return productData.filter(product => {
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
