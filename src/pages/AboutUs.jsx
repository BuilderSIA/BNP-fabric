/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../components/Context"
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [width, setWidth] = useState(window.innerWidth);
    const {t} = UseGlobalContext();
    useEffect(() => {
      // Function to update width when the window is resized
      const handleResize = () => setWidth(window.innerWidth);
  
      // Add event listener on component mount
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
    <div className="aboutus">
      <div className="aboutus-info">
        <h2 className="aboutus-info-head">
          {t("btm")}
        </h2>
        <ul className="aboutus-info-list">
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-1")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-2")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-3")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-4")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-5")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-6")}
              </p>
          </li>
          
        </ul>
      </div>
      <img src="/aboutus.png" alt="" />
      </div>
      <footer className="footer">
          <div className="footer-logo">
              <Link to={"/"}>
                <img src="/logo.png" alt="logo" />
              </Link>
            <p className="footer-logo-extra">
            "{t("btm")}" {t("info")}
            </p>
          </div>
          <div className="footer-menu">
            <h3>
              {t("menu")}
            </h3>
            <div className="footer-menu-cont">
            <p>
              <Link to={"/"}>
                {t("uy")}
              </Link>
            </p>
            <p>
              <Link to={"/aboutus"}>
                {t("bizhaqimizda")}
              </Link>
            </p>
            <p>
              <Link to={"/collection"}>
                {t("toplam")}
              </Link>
            </p>
            <p>
              <Link to={"/contacts"}>
                {t("kontaktlar")}
              </Link>
            </p>
            </div>
          </div>
          <div className="footer-contacts">
            <h3>
              {t("kontaktlar")}
            </h3>
            <p>
              {t("address")}
            </p>
          </div>
          <div className="footer-linkus">
            <h3>
              {t("linkus")}
            </h3>
            <input type="text" placeholder={width>500?t("pochta"):null} />
            <button>
              {t("subscribe")}
            </button>
          </div>
        </footer>
    
    </>
  )
}

export default AboutUs
