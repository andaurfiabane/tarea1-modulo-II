import './ActionButton.css';

function ActionButton({ label, onClick, available }) {

  return (
    <div style={{ position: "relative" }}>
      <button
        className={`action-button ${available ? "btn-primary" : "btn-secondary"}`}
         disabled={!available}
         onClick={onClick}
         alt={`botón ${label}`}
      >
      {label}
      </button>
    </div>
  );
}

export default ActionButton;