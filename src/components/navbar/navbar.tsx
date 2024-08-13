import { useEffect, useState } from 'preact/hooks';
import './navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth <= 768 ? false : true);
      setIsScroll(window.innerHeight > 20 ? true : false);
    };
    const handleScroll = () => {
      setIsScroll(window.screenY > 20 ? true : false);
      console.log(window.screenY);
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
      <nav
        className="navbar"
        style={`${isScroll ? 'background-color:transparent' : ''}`}
      >
        <div className="navbar-logo">Logo</div>
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
        <input
          type="checkbox"
          role="button"
          checked={isOpen}
          onClick={handleClick}
          aria-label="Display the menu"
          class="menu"
        />
      </nav>
    </>
  );
}
