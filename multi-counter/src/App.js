import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import { useState } from 'react';
import Counter  from './Components/Counter/Counter';
// arr= [1,2,3,4,5]
// ...arr ===> 1,2,3,4,5
function App() {
  const [counters, setCounters] = useState([]);
  const addCounters = () => {
    setCounters([...counters, <Counter key={counters.length} />]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button
          text={"+"}
          stylingClass={"btn btn-plus top-right"}
          handleClick={addCounters}
        ></Button>
        {counters}
      </header>
    </div>
  );
}

export default App;
