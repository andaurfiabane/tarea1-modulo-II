import './StateMessage.css';
import ActionButton from '../ActionButton/ActionButton';

function StateMessage({
  type = "empty",
  title,
  description,
  icon,
  actionLabel,
  onAction
}) {
  return (
    <div className={`state-message ${type}`}>
      <div className="state-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>

      {actionLabel && onAction && (
        <ActionButton
          label={actionLabel}
          onClick={onAction}
          available={true}
        /> 
      )}
    </div>
  );
}

export default StateMessage;