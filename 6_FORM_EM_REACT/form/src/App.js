import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Giovanna", email: "giovanna@gmail.com", bio: "Sou uma fotografa", role: "admin" }} />
    </div>
  );
}

export default App;
