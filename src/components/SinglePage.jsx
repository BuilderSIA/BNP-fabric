import { useParams } from "react-router-dom"


const SinglePage = () => {
    const {id} = useParams()
  return (
    <div className="single-box">
      <h2>
        Hello single page
      </h2>
      <h1>
        {id}
      </h1>
    </div>
  )
}

export default SinglePage
