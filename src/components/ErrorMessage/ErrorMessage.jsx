import './ErrorMessage.css';
import ActionButton from '../ActionButton/ActionButton';

function ErrorMessage({
  title = "Ocurrió un error",
  description = "No pudimos cargar la información. Intenta nuevamente.",
  icon = "⚠️",
  onRetry
}) {
  return (
    <div className="error-message">
      <div className="error-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>

      {onRetry && (
        <ActionButton
          label="Reintentar"
          onClick={onRetry}
          available={true}
        />      
      )}
    </div>
  );
}

export default ErrorMessage;