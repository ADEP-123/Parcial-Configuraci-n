import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import { useCart } from "./hooks/useCart";
import { useProductFilter } from "./hooks/useProductFilter";

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

  return (
    <div className="app-container">
      <header className="header">
        <h1>Tienda de Zapatos</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          Carrito ({cart.length})
        </button>
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
        />
      )}
    </div>
  );
}

export default App;
