import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { HookUseContext } from './components/HookUseContext';

function App() {
  return (
    <div className="App">
     <HookUseContext>
     <h1>React Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={ <About/>}></Route>
      </Routes>
      </BrowserRouter>
     </HookUseContext>
    </div>
  );
}

export default App;
