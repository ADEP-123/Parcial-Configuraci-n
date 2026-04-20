import { memo } from "react";
import PropTypes from "prop-types";

const ProductCard = memo(function ProductCard({
  product,
  onAddToCart,
  quantityInCart,
}) {
  const isMaxStock = quantityInCart >= product.stock;
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <button
          className={`add-button ${isMaxStock ? "add-button--disabled" : ""}`}
          onClick={() => onAddToCart(product)}
          disabled={isMaxStock}
        >
          {isMaxStock ? "Sin stock disponible" : "Agregar al Carrito"}
        </button>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  quantityInCart: PropTypes.number.isRequired,
};

export default ProductCard;
