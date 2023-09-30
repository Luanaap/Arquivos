//components 
import FirstComponent from './componentes/FirstComponent';
import TemplateExpressions from './componentes/TemplateExpressions';
import MyComponent from './componentes/MyComponent';
import Events from './componentes/Events';
import Challenge from './componentes/Challenge';


// styles / css
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
