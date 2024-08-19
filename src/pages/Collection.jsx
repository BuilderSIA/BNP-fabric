import { useEffect, useState } from "react"
import { UseGlobalContext } from "../components/Context"
import { useNavigate } from "react-router-dom"


const Collection = () => {
  const {data,t} = UseGlobalContext()
  const [current,setCurrent] = useState([].concat(data.winter,data.spring,data.summer,data.autumn))
  
  const navigate = useNavigate();

  
  


  useEffect(()=>{
    
  },[current])


  return (
    <div className="collection-box">
      <div className="collection-sidebar">
        <div className="collection-sidebar-search">
          <input type="text" placeholder={t("search")} />
          <button>
          <img src="/search.png" alt="" />
          </button>
        </div>
        <h2 className="collection-sidebar-categories-toptext">
          {t("toplam")}
        </h2>
        <div className="collection-sidebar-categories">
          <h2 onClick={()=>setCurrent(data.spring)}>
            {t("spring")}
          </h2>
          <h2 onClick={()=>setCurrent(data.winter)}>
            {t("winter")}
          </h2>
          <h2 onClick={()=>setCurrent(data.summer)}>
            {t("summer")}
          </h2>
          <h2 onClick={()=>setCurrent(data.autumn)}>
            {t("autumn")}
          </h2>
        </div>
      </div>






      <div className="collection" >
      {current.map((item, index) => (
      <div key={index} className="collection-item" onClick={()=>navigate(`/single/${item.id}`)}> 
        <img src={item?.image} alt={item?.name} />
        <h4>{item?.name}</h4>
      </div>))
      }
      <h2>
        {current.length}
      </h2>
      </div>
    </div>
  )
}

export default Collection
