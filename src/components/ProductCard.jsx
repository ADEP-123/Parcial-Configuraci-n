import { memo, useState } from "react";
import PropTypes from "prop-types";

const FALLBACK_IMAGE =
  "https://placehold.co/300x300/1a1a2e/9fa8da?text=Sin+imagen";
const ProductCard = memo(function ProductCard({
  product,
  onAddToCart,
  quantityInCart,
}) {
  const isMaxStock = quantityInCart >= product.stock;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {!imgLoaded && !imgError && (
          <div className="product-image-skeleton" aria-hidden="true" />
        )}
        <img
          src={imgError ? FALLBACK_IMAGE : product.image}
          alt={product.name}
          className="product-image"
          style={{ opacity: imgLoaded ? 1 : 0 }}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            setImgError(true);
            setImgLoaded(true);
          }}
          loading="lazy"
        />
      </div>
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
