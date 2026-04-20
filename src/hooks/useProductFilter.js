import { useState, useMemo, useEffect } from "react";
import {
  productData,
  PRICE_RANGES,
  DEFAULT_PRICE_FILTER,
} from "../data/products";

export function useProductFilter() {
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(DEFAULT_PRICE_FILTER);

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
        priceFilter === DEFAULT_PRICE_FILTER
          ? true
          : priceFilter === "low"
            ? product.price < PRICE_RANGES.low.max
            : priceFilter === "medium"
              ? product.price >= PRICE_RANGES.medium.min &&
                product.price <= PRICE_RANGES.medium.max
              : priceFilter === "high"
                ? product.price > PRICE_RANGES.high.min
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
