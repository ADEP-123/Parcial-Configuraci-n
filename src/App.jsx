import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import { productData } from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productData);
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showCart, setShowCart] = useState(false);

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

  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };

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
          <SearchBar value={searchTerm} onSearch={handleSearch} />
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
          total={getTotal}
          onCheckout={clearCart}
        />
      )}
    </div>
  );
}

export default App;
