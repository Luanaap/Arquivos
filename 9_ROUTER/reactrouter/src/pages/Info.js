import { useParams } from "react-router-dom"

const Infor = () => {
  const { id } = useParams(); 

  return (
    <div>
        <h2>Mais informações sobre o produto: {id}</h2>
    </div>
  )
}

export default Infor