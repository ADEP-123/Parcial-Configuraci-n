import PropTypes from "prop-types";

const ICONS = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

function Toast({ toast, onRemove }) {
  return (
    <div
      className={`toast toast--${toast.type}`}
      role="alert"
      onClick={() => onRemove(toast.id)}
    >
      <span className="toast__icon">{ICONS[toast.type]}</span>
      <span className="toast__message">{toast.message}</span>
      <button
        className="toast__close"
        onClick={() => onRemove(toast.id)}
        aria-label="Cerrar"
      >
        ✕
      </button>
      <div
        className="toast__progress"
        style={{ animationDuration: `${toast.duration}ms` }}
      />
    </div>
  );
}

Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

function ToastContainer({ toasts, onRemove }) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

ToastContainer.propTypes = {
  toasts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToastContainer;
