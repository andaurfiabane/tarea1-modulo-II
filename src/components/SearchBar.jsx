import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos..." alt="Barra de búsqueda" />
    </div>
  );
}

export default SearchBar;