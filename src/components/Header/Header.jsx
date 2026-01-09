import './Header.css'
import logo from '../../assets/images/logo.png'
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header" alt="Cabecera de página">
      <div className="logo">
        <span className="logo-icon"><img src={logo} className="logo-img" alt="Logo perfumería" /></span>
        <span className="logo-text" alt="Nombre de la tienda">Perfumería FullStack</span>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;