
import { logDOM } from '@testing-library/dom';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className= "container">
      <header className="App-header">
   <h1>What does it mean? 🤷‍♀️</h1>
  
      </header>
      <main> 
        <Dictionary defaultKeyword ="bulldog" />
      </main>
      <footer>
        <small>Coded by Sandra Lima <a href="https://github.com/SandraLima2813/dictionary-app.git"> and open source on GitHub.</a>
        </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
