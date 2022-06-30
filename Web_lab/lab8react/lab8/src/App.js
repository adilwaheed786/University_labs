import logo from './logo.svg';
import { Greeting } from './Component/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="box">
            <h1>
                <u>Lab 7</u>
            </h1>
        </div>
        <div class="box">
            <h1>INTRODUCTION TO REACT JS</h1>
        </div>
        <div class="task1 box">
            <h2>Task1:build a greeting webpage</h2>
                     <h4>  <Greeting/> </h4>  
              
        </div>
        <div class="task2 box">
            <h2 >Task2:personal portfolio webpage  </h2>
        </div>
        <div class="task3 box">
            <h2 >Task3:arithmetic calculation  </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
