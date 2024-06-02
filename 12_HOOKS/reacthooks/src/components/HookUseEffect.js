import React, { useEffect, useState} from 'react'

const HookUseEffect = () => {
    
//1 - useEffect, sem dependências
 useEffect(() => {
    console.log("Estou sendo executado!");
});

 const [number, setNumber] = useState(1);

 const changeSomething = () => {
    setNumber(number + 1);
 }

  return (
    <div>
        <h2>UseEffect</h2>
        <hr></hr>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
    </div>
  )
}

export default HookUseEffect