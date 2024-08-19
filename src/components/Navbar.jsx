
import { useEffect, useState } from "react";
import { UseGlobalContext } from "./Context";
import './Navbar.css'
import { Link } from "react-router-dom";



const Navbar = () => {

    const {t,handleChange} = UseGlobalContext();
    const lang = localStorage.getItem("i18nextLng");


    const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const handleNavItemClick = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-box">
    <div className={shadow ? "navbarshadow":"navbar"}>
    <div className="navbar-container container">
    <div className="navbar-logo">
              <Link to={"/"}>
                <img src="/logo.png" alt="logo" />
              </Link>
            </div>
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            
            <ul className="menu-items">
                <li>
                  <Link to={"/"} onClick={handleNavItemClick}>
                    {t("uy")}
                  </Link>
                </li>
                <li>
                <Link to={'/collection'}  onClick={handleNavItemClick}>
                  {t("toplam")}
                </Link>
                </li>
                <li>
                <Link to={'/aboutus'} onClick={handleNavItemClick}>
                  {t("bizhaqimizda")}
                </Link>
                </li>
                <li>
                <Link to={'/contacts'} onClick={handleNavItemClick}>
                  {t("kontaktlar")}
                </Link>
                </li>
                <select onChange={handleChange} value={lang} className="nav-lang">
                  <option value="uz">
                      Uz
                  </option>
                  <option value="ru">
                      Ru
                  </option>
                  <option value="en">
                      Eng
                  </option>
                </select>
            </ul>
            
        </div>
    </div>
    </div>
  )
}

export default Navbar