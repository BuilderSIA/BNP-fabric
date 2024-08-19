/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom"
import { UseGlobalContext } from "./Context"


const SinglePage = () => {
    const {data} = UseGlobalContext();
    const {id} = useParams();
    let items = [].concat(data.winter,data.spring,data.summer,data.autumn);
    let currentItem = items.find((item)=>item.id==id)
  return (
    <div className="single-box">
      <img src={currentItem.image} alt="" />
      <div className="single-info">

      <h2>{currentItem.name}</h2>
      <table className="single-info-table">
        <tbody className="single-info-table-body">
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Material:</td>
            <td className="single-info-table-column" >{currentItem.material}</td>
          </tr>
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Yostiq kiyimi:</td>
            <td className="single-info-table-column" >{currentItem.yostiqKiyimi}</td>
          </tr>
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Choyshab:</td>
            <td className="single-info-table-column" >{currentItem.choyshab}</td>
          </tr>
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Ko'rpa-to'shak:</td>
            <td className="single-info-table-column" >{currentItem.korpaToshak}</td>
          </tr>
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Hajmi:</td>
            <td className="single-info-table-column" >{currentItem.hajmi}</td>
          </tr>
          <tr className="single-info-table-row">
            <td className="single-info-table-column">Ishlab chiqaruvchi:</td>
            <td className="single-info-table-column">{currentItem.ishlabChiqargan}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default SinglePage
{/* <div>
      <h2>Ikat</h2>
      <table>
        <tbody>
          <tr>
            <td>Material:</td>
            <td>100% paxta flanel</td>
          </tr>
          <tr>
            <td>Yostiq kiyimi:</td>
            <td>50x70 sm (2 dona)</td>
          </tr>
          <tr>
            <td>Choyshab:</td>
            <td>260×280 sm (1 dona)</td>
          </tr>
          <tr>
            <td>Ko'rpa-to'shak:</td>
            <td>160x220 sm (2 dona)</td>
          </tr>
          <tr>
            <td>Hajmi:</td>
            <td>Maxsus o'lcham</td>
          </tr>
          <tr>
            <td>Ishlab chiqaruvchi:</td>
            <td>Buxoro tabiiy mahsuloti</td>
          </tr>
        </tbody>
      </table>
      <p>
        Kategoriya: <span style={{ color: 'red' }}>Qishki kolleksiya</span>
      </p>
    </div> */}