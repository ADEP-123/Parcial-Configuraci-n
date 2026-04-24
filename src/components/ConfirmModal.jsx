import PropTypes from "prop-types";

function ConfirmModal({ confirmState }) {
  if (!confirmState) return null;

  const { title, message, variant, onAccept, onCancel } = confirmState;

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div
        className="confirm-modal"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
      >
        <div className="confirm-header">
          <span className="confirm-icon">
            {variant === "danger" ? "🗑️" : ""}
            {variant === "warning" ? "⚠️" : ""}
            {variant === "success" ? "✅" : ""}
          </span>
          <h3 id="confirm-title" className="confirm-title">
            {title}
          </h3>
        </div>

        <p className="confirm-message">{message}</p>

        <div className="confirm-actions">
          <button
            className="confirm-btn confirm-btn--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className={`confirm-btn confirm-btn--accept confirm-btn--${variant}`}
            onClick={onAccept}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  confirmState: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    onAccept: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }),
};

export default ConfirmModal;
