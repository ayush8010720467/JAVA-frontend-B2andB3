// example for use State

import { useState } from 'react';
function State(props){
    const [count, setCount] = useState(0);
    const incr = () => setCount((count)=>count +1);
    const decr = () => setCount((count) => count - 1);
    const reset = () => setCount(0);
    return (
      <>
        <button onClick={decr}>-</button>
        <span>{count}</span>
        <button onClick={incr}>+</button>
        <button onClick={reset}>Reset</button>
      </>
    );
}
export default State;