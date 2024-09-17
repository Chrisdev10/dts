import { useEffect, useState } from 'preact/hooks';
import './navbar.css';
import logo from '/logo.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isScroll, setIsScroll] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsOpen(window.innerWidth <= 768 ? false : true);
      setIsScroll(window.innerHeight > 20 ? true : false);
    };
    const handleScroll = () => {
      setIsScroll(window.screenY > 20 ? true : false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsOpen]);
  return (
    <>
      <nav className="navbar-c" style={`${isScroll ? 'background-color:transparent' : ''}`}>
        <div className="navbar-logo" style="z-index:10">
          <img src={logo} alt="Logo" width={50} className="logo-dts" />
        </div>
        <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`} style={`${width > 768 ? '' : 'display:none'} `}>
          <li className="navbar-item" onClick={() => setIsOpen(!isOpen)}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" onClick={() => setIsOpen(!isOpen)}>
            <Link to="/event">Event</Link>
          </li>

          <li className="navbar-item">
            <a href="#services">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <input type="checkbox" role="button" checked={isOpen} onClick={handleClick} aria-label="Display the menu" class="menu" />
      </nav>
      <aside style={`${width < 768 && isOpen ? '' : 'display:none'} `}>
        <ul className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          <li className="navbar-item" onClick={() => setIsOpen(!isOpen)}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" onClick={() => setIsOpen(!isOpen)}>
            <Link to="/event">Event</Link>
          </li>

          <li className="navbar-item">
            <a href="#services">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
