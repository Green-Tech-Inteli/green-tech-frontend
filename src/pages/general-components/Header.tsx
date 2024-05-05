import { Link, useLocation } from 'react-router-dom';
import Logo from './../../assets/web-logo-navbar.png';

function Header() {
  const location = useLocation();

  return (
    <div className="absolute w-full z-10 space-y-12 bg-gray-600 text-gray-100 bg-opacity-50">
      <header className="md:p-2">
        <div className="container flex justify-between h-14 mx-auto">
          <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <img width="220px" height="90px" src={Logo} alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className={`flex ${location.pathname === '/partnerships' ? 'border-b-2 border-white' : ''}`}>
              <Link to="/partnerships" className="flex items-center px-4 -mb-1 text-white">Parcerias</Link>
            </li>
            <li className={`flex ${location.pathname === '/projects' ? 'border-b-2 border-white' : ''}`}>
              <Link to="/projects" className="flex items-center px-4 -mb-1 text-white">Projetos</Link>
            </li>
            <li className={`flex ${location.pathname === '/contact' ? 'border-b-2 border-white' : ''}`}>
              <Link to="/contact" className="flex items-center px-4 -mb-1 text-white">Contato</Link>
            </li>
            <li className={`flex ${location.pathname === '/about' ? 'border-b-2 border-white' : ''}`}>
              <Link to="/about" className="flex items-center px-4 -mb-1 text-white">Sobre</Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;