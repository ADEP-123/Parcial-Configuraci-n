import { useState, useMemo, useEffect } from "react";
import { productData } from "../data/products";

export function useProductFilter() {
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const products = useMemo(() => {
    return productData.filter(product => {
      const matchesCategory = filter === "Todos" || product.category === filter;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
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
  }, [filter, debouncedSearch, priceFilter]);

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
