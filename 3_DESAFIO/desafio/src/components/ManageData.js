import { useState } from 'react';

const ManageData = () => {

  let someData = 10; 
  console.log("🚀 ~ file: ManageData.js:4 ~ ManageData ~ someData:", someData)

  const [number, setNumber] = useState(15);
  console.log("🚀 ~ file: ManageData.js:9 ~ ManageData ~ number:", number)
  

  return (
    <div>
        <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
       <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
       </div>
    </div>
  )
}

export default ManageData