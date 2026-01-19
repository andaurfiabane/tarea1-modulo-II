import "./Loader.css";

function Loader({ text }) {
  return (
    <div className="loader-wrapper">
      <div className="spinner" />
      <p className="loader-text">{text}</p>
    </div>
  );
}

export default Loader;