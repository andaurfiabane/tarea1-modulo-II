import './SearchBar.css';

function SearchBar({ 
  value ='' ,
  onChange, 
  placeholder = 'Buscar...',
  className = '',
}) 
{
  return (
    <div className="search-bar">
      <input 
        type = "text" 
        value = {value}
        placeholder = {placeholder} 
        alt = {`Barra de búsqueda ${value}`}
        onChange = {(e) => onChange(e.target.value)}
        className = {className}
      />
    </div>
  );
}

export default SearchBar;