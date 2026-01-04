import './ActionButton.css';

function ActionButton({ stock }) {
  const isAvailable = stock > 0;

  return (
    <button
      className={`action-button ${
        isAvailable ? "btn-primary" : "btn-secondary"
      }`}
    >
      {isAvailable ? "Agregar al carrito" : "Notificarme"}
    </button>
  );
}

export default ActionButton;