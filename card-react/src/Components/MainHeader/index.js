import './index.css';
import logo from '../../logo.svg';
import { useState } from 'react';
function MainHeader(props){
  const [count, setCount] = useState(0);
  console.log("Rerender")
    return (
      <>
        <div className="main_header">
          <img src={logo} height="49" width="34" alt="logo"></img>
          <span>{count}</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
      </>
    );
}
export default MainHeader;