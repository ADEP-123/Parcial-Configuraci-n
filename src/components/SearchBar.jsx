import PropTypes from "prop-types";

function SearchBar({ value, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar zapatos..."
        value={value}
        onChange={e => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
