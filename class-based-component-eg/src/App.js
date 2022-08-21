import logo from './logo.svg';
import './App.css';
import CBC from './Component/CBC';
import Button from './Component/Button';
import { useState } from 'react'
import TestUnmount from './Component/TestUnmount';

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [showTestunmount, setShowTestUnmount ] = useState(true);
  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <CBC test="test CBC props"></CBC>
      <Button setBgColor={setBgColor}></Button>
      <Button
        setBgColor={() => {
          setShowTestUnmount((showTestunmount) => !showTestunmount);
        }}
        text={'toggle test component'}
      ></Button>
      {showTestunmount && <TestUnmount></TestUnmount>}
    </div>
  );
}

export default App;
// new Button({setBgColor: setBgColor, test: "Hi"});
