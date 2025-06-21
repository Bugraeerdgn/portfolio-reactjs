import { Link } from 'react-router-dom';
import logo from '../assets/ABE.png'; // kendi logo dosyana göre yolu güncelle

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="site-title">Ahmet Buğra Erdoğan</h1>
      </div>

      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
