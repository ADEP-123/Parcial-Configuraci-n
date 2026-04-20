import PropTypes from "prop-types";
import { CATEGORIES, DEFAULT_PRICE_FILTER } from "../data/products";

function FilterBar({
  currentFilter,
  onFilterChange,
  selectedPrice,
  onPriceChange,
}) {
  return (
    <div className="filter-bar">
      <div className="category-filters">
        <span>Filtrar por:</span>
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={currentFilter === category ? "active" : ""}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="price-filters">
        <span>Precio:</span>
        <button
          className={selectedPrice === DEFAULT_PRICE_FILTER ? "active" : ""}
          onClick={() => onPriceChange(DEFAULT_PRICE_FILTER)}
        >
          Todos
        </button>
        <button
          className={selectedPrice === "low" ? "active" : ""}
          onClick={() => onPriceChange("low")}
        >
          Menor a $80
        </button>
        <button
          className={selectedPrice === "medium" ? "active" : ""}
          onClick={() => onPriceChange("medium")}
        >
          $80 - $130
        </button>
        <button
          className={selectedPrice === "high" ? "active" : ""}
          onClick={() => onPriceChange("high")}
        >
          Mayor a $130
        </button>
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  selectedPrice: PropTypes.string.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

export default FilterBar;
