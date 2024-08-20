import { UseGlobalContext } from "../components/Context"

const AboutUs = () => {
    const {t} = UseGlobalContext();


  return (
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
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-7")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-8")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-9")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-10")}
              </p>
          </li>
          <li className="aboutus-info-list-item">
          <span>&#183;</span>
              <p>
              {t("about-11")}
              </p>
          </li>
        </ul>
      </div>
      <img src="/aboutus.png" alt="" />
    </div>
  )
}

export default AboutUs
