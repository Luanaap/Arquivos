import './App.css';
import DetailsCar from './components/DetailsCar';

function App() {

  const cars = [ 
    {id: 1, brand: "Ferrari", km: 0},
    {id: 2, brand: "Uno", km: 121414},
    {id: 3, brand: "Up", km: 14414},
  ]
  return (
    <div className="App">
      <h1>Meus carros</h1>
      <DetailsCar brand="Ferrari" km={10000}/>
      <DetailsCar brand="Uno" km={0}/>
      <DetailsCar brand="Up" km={2000}/>
    </div>
  );
}

export default App;
