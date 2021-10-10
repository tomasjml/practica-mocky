import './App.css';
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card title={"Trial"} subtitle={"Boostrap trial"} text={"This test works"}/>
      </header>
    </div>
  );
}

export default App;
