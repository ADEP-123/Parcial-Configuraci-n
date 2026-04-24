import { memo } from "react";
import PropTypes from "prop-types";

const ShoppingCart = memo(function ShoppingCart({
  cart,
  onRemove,
  onUpdateQuantity,
  onClose,
  total,
  onCheckout,
  onToast,
  onConfirm,
}) {
  const handleCheckout = async () => {
    const ok = await onConfirm({
      title: "Finalizar compra",
      message: `¿Confirmar la compra de ${cart.reduce((t, i) => t + i.quantity, 0)} producto(s) por $${total.toFixed(2)}?`,
      variant: "success",
    });
    if (ok) {
      onCheckout();
      onClose();
      onToast({ message: "¡Compra realizada con éxito!", type: "success" });
    }
  };

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={async () => {
                    const ok = await onConfirm({
                      title: "Eliminar producto",
                      message: `¿Eliminar "${item.name}" del carrito?`,
                      variant: "danger",
                    });
                    if (ok) {
                      onRemove(item.id);
                      onToast({
                        message: `"${item.name}" eliminado del carrito`,
                        type: "info",
                      });
                    }
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
});

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
  onToast: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ShoppingCart;
