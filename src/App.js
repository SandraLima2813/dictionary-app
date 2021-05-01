
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className= "container">
      <header className="App-header">
   <h1>Welcome to the Dictionary!</h1>
      </header>
      <main> 
        <Dictionary />
      </main>
      <footer>
        <small>Coded by Sandra Lima
        </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
