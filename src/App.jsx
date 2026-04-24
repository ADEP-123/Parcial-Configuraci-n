import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { useCart } from "./hooks/useCart";
import { useProductFilter } from "./hooks/useProductFilter";
import ToastContainer from "./components/ToastContainer";
import { useToast } from "./hooks/useToast";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, total } =
    useCart();
  const {
    products,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    priceFilter,
    setPriceFilter,
  } = useProductFilter();
  const [showCart, setShowCart] = useState(false);

  const { toasts, showToast, removeToast } = useToast();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-brand">
          <img src="/logo.png" alt="Logo" className="header-logo" />
          <h1>Tienda de Zapatos</h1>
        </div>
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="cart-button"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Carrito ({cart.reduce((total, item) => total + item.quantity, 0)}
            )
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="filters-section">
          <SearchBar value={searchTerm} onSearch={setSearchTerm} />
          <FilterBar
            currentFilter={filter}
            onFilterChange={setFilter}
            selectedPrice={priceFilter}
            onPriceChange={setPriceFilter}
          />
        </div>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              quantityInCart={
                cart.find(item => item.id === product.id)?.quantity ?? 0
              }
            />
          ))}
        </div>
      </main>

      {showCart && (
        <ShoppingCart
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setShowCart(false)}
          total={total}
          onCheckout={clearCart}
          onToast={showToast}
        />
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}

export default App;
