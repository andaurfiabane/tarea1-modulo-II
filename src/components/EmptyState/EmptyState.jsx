import './EmptyState.css';

function EmptyState({ title, description, icon }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;