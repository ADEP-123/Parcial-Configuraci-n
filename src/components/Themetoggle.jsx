import PropTypes from "prop-types";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      className={`theme-toggle ${isDark ? "theme-toggle--dark" : "theme-toggle--light"}`}
      onClick={onToggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__icon">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;
