import { useEffect, useState } from "react"
import { UseGlobalContext } from "../components/Context"
import { useNavigate } from "react-router-dom"


const Collection = () => {
  const {data,t} = UseGlobalContext()
  const [all,setAll] = useState([].concat(data.winter,data.spring,data.summer,data.autumn))
  
  const navigate = useNavigate();

  
  


  useEffect(()=>{
    
  },[all])


  return (
    <div className="collection-box">
      <div className="collection-sidebar">
        <div className="collection-sidebar-search">
          <input type="text" placeholder={t("search")} />
          <button>
          search
          </button>
        </div>
      </div>
      <div className="collection" >
      {all.map((item, index) => (
      <div key={index} className="collection-item" onClick={()=>navigate(`/single/${item.id}`)}> 
        <img src={item?.image} alt={item?.name} />
        <h4>{item?.name}</h4>
      </div>))
      }
      <h2>
        {all.length}
      </h2>

      </div>
    </div>
  )
}

export default Collection
