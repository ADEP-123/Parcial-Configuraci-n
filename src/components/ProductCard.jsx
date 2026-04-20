import { memo } from "react";
import PropTypes from "prop-types";

const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <button className="add-button" onClick={() => onAddToCart(product)}>
          Agregar al Carrito
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
};

export default ProductCard;
