/* eslint-disable react/no-unescaped-entities */


import { useEffect, useState } from "react";
import { UseGlobalContext } from "../components/Context";
import { Link } from "react-router-dom";



const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {t,data} = UseGlobalContext()



  useEffect(() => {
    // Function to update width when the window is resized
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

console.log(width);


  return (
    <div className="home">

{/* Hero */}
      
      <div className="home-hero">
        <img src={"/heroimg.png"} alt="hero-image" className="home-hero-img" />
        <h1 className="home-hero-text">
          <span className="home-hero-text-s">
            Bukhara
          </span>
          <br/>
          <span className="home-hero-text-m">
            Natural
          </span>
          <br/>
          <span className="home-hero-text-l">
            Product
          </span>
        </h1>
        </div>


{/* Services */}


        <div className="home-ourserv-box">
          <div className="home-ourserv">
            <ul className="home-ourserv-list">
              <li className="home-ourserv-list-item">
                <img src="/noun_delivery_1095359.svg" alt="" className="" />
                <div className="about-serv">
                  <h3 className="serv-name">
                    {t("yetkazish")}
                  </h3>
                  <p className="serv-info">
                    {t("yetkazishtext")}
                  </p>
                </div>
              </li>
              <li className="home-ourserv-list-item">
                <img src="/noun_guarantee_952398.svg" alt="" className="" />
                <div className="about-serv">
                  <h3 className="serv-name">
                    {t("kafolat")}
                  </h3>
                  <p className="serv-info">
                    {t("kafolattext")}
                  </p>
                </div>
              </li>
              <li className="home-ourserv-list-item">
                <img src="/Group-995.svg" alt="" className="" />
                <div className="about-serv">
                  <h3 className="serv-name">
                    {t("support")}
                  </h3>
                  <p className="serv-info">
                    {t("supportext")}
                  </p>
                </div>
              </li>
              <li className="home-ourserv-list-item">
                <img src="/noun_Wallet_745515.svg" alt="" className="" />
                <div className="about-serv">
                  <h3 className="serv-name">
                    {t("tolov")}
                  </h3>
                  <p className="serv-info">
                    {t("tolovtext")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

{/* Winter collection */}

        <div className="winter-collection-top-box">
          <div className="winter-collection-top">
            <div>
              <h2>
                100%
              </h2>
              <span>{t("sifat")}</span>
            </div>
            <img src="/winter.png" alt="" />
            <div className="winter-collection-top-text-cont">
              <h3>
                "{t("btm")}"
              </h3>
              <p>
                {t("info")}
              </p>
              <button className="winter-collectBtn">
                {t("toplam")}
              </button>
            </div>
          </div>
          <h2 className="winter-collection-head-text">
            {t("winter")}
          </h2>
          <p className="winter-collection-extra-text">
          {t("btm")}
          </p>
        </div>
        
        <div className="winter-collection">
        {width>550?data.winter.map((item, index) => (
    <div key={index} className="winter-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
    </div>
  )):
  data.winter.map((item, index) => (
    index<3?<div key={index} className="winter-item">
    <img src={item.image} alt={item.name} />
    <h4>{item.name}</h4>
  </div>:null
  ))}
        </div>



{/* Autumn collection */}




        <div className="autumn-collection-top-box">
          <div className="autumn-collection-top">
            <div>
              <h2>
                100%
              </h2>
              {t("sifat")}
            </div>
            <img src="/autumn.png" alt="" />
            <div className="autumn-collection-top-text-cont">
              <h3>
                "{t("btm")}"
              </h3>
              <p>
                {t("info")}
              </p>
              <button className="autumn-collectBtn">
                {t("toplam")}
              </button>
            </div>
          </div>
          <h2 className="autumn-collection-head-text">
            {t("autumn")}
          </h2>
          <p className="autumn-collection-extra-text">
          {t("btm")}
          </p>
        </div>

        <div className="autumn-collection">
        {width>550?data.autumn.map((item, index) => (
    <div key={index} className="autumn-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
    </div>
  )):
  data.autumn.map((item, index) => (
    index<3?<div key={index} className="autumn-item">
    <img src={item.image} alt={item.name} />
    <h4>{item.name}</h4>
  </div>:null
  ))}
        </div>




{/* Summer collection */}





        <div className="summer-collection-top-box">
          <div className="summer-collection-top">
            <div>
              <h2>
                100%
              </h2>
              {t("sifat")}
            </div>
            <img src="/summer.png" alt="" />
            <div className="summer-collection-top-text-cont">
              <h3>
                "{t("btm")}"
              </h3>
              <p>
                {t("info")}
              </p>
              <button className="summer-collectBtn">
                {t("toplam")}
              </button>
            </div>
          </div>
          <h2 className="summer-collection-head-text">
            {t("summer")}
          </h2>
          <p className="summer-collection-extra-text">
          {t("btm")}
          </p>
        </div>

        <div className="summer-collection">
        {width>550?data.summer.map((item, index) => (
      <div key={index} className="summer-item">
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
      </div>)):
      data.summer.map((item, index) => (
        index<3?<div key={index} className="summer-item">
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
      </div>:null))}
            </div>





{/* News */}



        <div className="news-box">
          <div className="news">
            <div className="news-top-text">
              <h2>
                {t("yangilik")}
              </h2>
              <span>
              {t("btm")}
              </span>
            </div>
            <div className="news-cont">
              <div className="news-item">
                <img src="/news-1.png" alt="" />
                <div className="news-item-created">
                  <p>
                    10/05/2024
                  </p>
                  <span>&#183;</span>
                  <p>
                    {t("kimyaratdi")}
                  </p>
                </div>
                <div className="news-item-name">
                  <h2>
                    {t("yangiliknomi")}
                  </h2>
                </div>
                <div className="news-item-info">
                  <p>
                    {t("yangilikinfo")}
                  </p>
                </div>
              </div>
              <div className="news-item">
                <img src="/news-2.png" alt="" />
                <div className="news-item-created">
                  <p>
                    10/05/2024
                  </p>
                  <span>&#183;</span>
                  <p>
                    {t("kimyaratdi")}
                  </p>
                </div>
                <div className="news-item-name">
                  <h2>
                    {t("yangiliknomi")}
                  </h2>
                </div>
                <div className="news-item-info">
                  <p>
                    {t("yangilikinfo")}
                  </p>
                </div>
              </div>
              <div className="news-item">
                <img src="/news-3.png" alt="" />
                <div className="news-item-created">
                  <p>
                    10/05/2024
                  </p>
                  <span>&#183;</span>
                  <p>
                    {t("kimyaratdi")}
                  </p>
                </div>
                <div className="news-item-name">
                  <h2>
                    {t("yangiliknomi")}
                  </h2>
                </div>
                <div className="news-item-info">
                  <p>
                    {t("yangilikinfo")}
                  </p>
                </div>
              </div>
            </div>
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

export default Home
