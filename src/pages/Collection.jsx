/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import { UseGlobalContext } from "../components/Context"
import { Link, useNavigate } from "react-router-dom"
import Pagination from "../components/Pagination";


const Collection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const {data,t} = UseGlobalContext()
  const [current,setCurrent] = useState([].concat(data.winter,data.spring,data.summer,data.autumn))
  

  const [currentPage,setCurrentPage] = useState(1);
  const [itemPerPage,setItemPerPage] = useState(width>425?10:5);
  
  const indexOfLastItem = currentPage*itemPerPage;
  const indexOfFirstitem = indexOfLastItem - itemPerPage;
  const currentItems = current.slice(indexOfFirstitem,indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  


  const navigate = useNavigate();

  
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
    <div className="collection-box">
      <div className="collection-sidebar">
        <h2 className="collection-sidebar-categories-toptext">
          {t("toplamlar")}
        </h2>
        <div className="collection-sidebar-categories">
          <h2 onClick={()=>setCurrent(data.spring)} className={current==data.spring?"selected":"non-selected"} >
            {t("spring")}
          </h2>
          <h2 onClick={()=>setCurrent(data.winter)} className={current==data.winter?"selected":"non-selected"}>
            {t("winter")}
          </h2>
          <h2 onClick={()=>setCurrent(data.summer)} className={current==data.summer?"selected":"non-selected"}>
            {t("summer")}
          </h2>
          <h2 onClick={()=>setCurrent(data.autumn)} className={current==data.autumn?"selected":"non-selected"}>
            {t("autumn")}
          </h2>
        </div>
      </div>






      <div className="collection" >
        <div className="collection-top">
          <div className="collection-top-left">
            <h2 className="collection-top-left-head">
                {t("toplam")}
            </h2>
            <div className="collection-top-left-shows">
              <p>
                {t("showing")}{t("otob")} {t("tadan")} {indexOfFirstitem+1}-{indexOfLastItem} {t("of")}{t("iz")} {t("korsatil")}
              </p>
            </div>
          </div>
          <div className="collection-top-right">
            <div className="pagination-box">
              <Pagination itemPerPage={itemPerPage} totalItems={current.length} paginate={paginate}  />
            </div>
            <button className={current.length===[].concat(data.winter,data.spring,data.summer,data.autumn).length?"collection-top-right-sort-none":"collection-top-right-sort"}  onClick={()=>setCurrent([].concat(data.winter,data.spring,data.summer,data.autumn))}>
              {t("hamma")}
            </button>
            
          </div>
        </div>
        <div className="collection-list">

        
      {currentItems.map((item, index) => (
      <div key={index} className="collection-item" onClick={()=>navigate(`/single/${item.id}`)}> 
        <img src={item?.image} alt={item?.name} />
        <h4>{item?.name}</h4>
      </div>))
      }
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
    
    </>
  )
}

export default Collection
