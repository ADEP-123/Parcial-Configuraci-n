import PropTypes from "prop-types";

function FilterBar({
  currentFilter,
  onFilterChange,
  selectedPrice,
  onPriceChange,
}) {
  const categories = ["Todos", "Deportivo", "Formal", "Casual", "Botas"];

  return (
    <div className="filter-bar">
      <div className="category-filters">
        <span>Filtrar por:</span>
        {categories.map(cat => (
          <button
            key={cat}
            className={currentFilter === cat ? "active" : ""}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="price-filters">
        <span>Precio:</span>
        <button
          className={selectedPrice === "low" ? "active" : ""}
          onClick={() => onFilterChange("low")}
        >
          Menor a $80
        </button>
        <button
          className={selectedPrice === "medium" ? "active" : ""}
          onClick={() => onFilterChange("medium")}
        >
          $80 - $130
        </button>
        <button
          className={selectedPrice === "high" ? "active" : ""}
          onClick={() => onFilterChange("high")}
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
