import './Header.css'
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon"><img src={logo} alt="Logo Perfumería" className="logo-img"/></span>
        <span className="logo-text">Perfumería FullStack</span>
      </div>
    </header>
  );
}

export default Header;