import { useEffect, useState } from "react"
import { UseGlobalContext } from "../components/Context"


const Collection = () => {
  const {data,t} = UseGlobalContext()
  const [current,setCurrent] = useState([].concat(data.winter,data.spring,data.summer,data.autumn))





  useEffect(()=>{
  },[current])


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
      <div className="collection">
      {current.map((item, index) => (
      <div key={index} className="">
        <img src={item.image} alt={item.name} />
        <h4>{item.name}</h4>
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
