import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="singleCounter">
          <div className="counter">
            <Button
              text="-"
              handleClick={() => {
                setCount((count) => count - 1);
              }}
              stylingClass={"btn btn-minus"}
            />
            <span>{count}</span>
            <Button
              text="+"
              handleClick={() => {
                setCount((count) => count + 1);
              }}
              stylingClass={"btn btn-plus"}
            />
          </div>
          <Button
            text="Reset"
            handleClick={() => {
              setCount(0);
            }}
            stylingClass={"btn btn-reset"}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
