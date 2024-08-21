/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { UseGlobalContext } from '../components/Context';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Contacts = () => {

  const {t} = UseGlobalContext();
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Function to update width when the window is resized
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  


  return (
    <div className='contacts-box'>
    <div className='contacts'>
      <div className="contacts-link">
        <h2 className='contacts-link-headtext'>
          {t("boglanish")}
        </h2>
        <form className='contacts-link-form' >
          <input type="email" className='contacts-link-form-email' placeholder={t("email")} />
          <input type="text" className='contacts-link-form-number' placeholder={t("number")} />
          <textarea type="text" className='contacts-link-form-text' placeholder={t("xabar")}/>
          <button className='contacts-link-form-submit'>
            {t("submit")}
          </button>
        </form>
      </div>
      <div className='contacts-map'>
      <iframe className='contacts-map-frame' loading="lazy" src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="39.747452957301974, 64.45996439941372" aria-label="39.747452957301974, 64.45996439941372"></iframe>
    </div>
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
    </div>
  )
}

export default Contacts
