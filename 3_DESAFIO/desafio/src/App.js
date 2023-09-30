import './App.css';
import City from './assets/city.jpg';
import CarDetailts from './components/CarDetailts';
import ConditionRender from './components/ConditionRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import { useState} from 'react';
import Fragment  from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';



function App() {

  //const name = "Giovanna";
  const [userName] = useState("Maria");

  const cars =[
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 12134},
    {id: 1, brand: "Renault", color: "Azul", newCar: false, km: 141414},
  ]

  function showMensagem(){
    console.log("🚀 ~ file: App.js:26 ~ showMensagem ~ showMensagem:", showMensagem)
    
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
       {/* Imagem em assets */}
       <div>
        <img src={City} alt="Cidade" />
       </div>
       <ManageData />
       <ListRender />
       <ConditionRender />
       {/* props */}
      <ShowUserName  name={userName}/>
       {/* destructuring */}
       <CarDetailts brand="VW" km={10000} color="Azul" newCar={false}/>
       {/* reaproveitamento */}
       <CarDetailts brand="Ford" color="Vermelha" km={0} newCar={true}/>
       <CarDetailts brand="Fiat" color="Branco" km={4500} newCar={false}/>
       {/* loop em array de objetos */}
       {cars.map((car) => (
        <CarDetailts 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
       ))}
        {/* Fragment */}
        <Fragment propFragment="teste" />
        {/* Children */}
        <Container myValue="testing">
          <p>Este é o conteúdo</p>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMensagem}/>
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
