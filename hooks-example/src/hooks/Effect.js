// example for useEffect
import { useEffect, useState } from 'react'

function Effect(){
    const [count , setCount ]= useState(0);
    
    useEffect(()=> console.log("My Component has rendered"));

    useEffect(()=> {
        console.log("Effect Function has been mounted");
        return ()=> {
            console.log("Effect Function has been Un-mounted");
        }
    },[]);

    useEffect(() => {
        console.log("Value of count changed");
    }, [count]);

    const incr = () => setCount((count) => count + 1);
    const decr = () => setCount((count) => count - 1);
    return (
      <div>
        <span>Use Effect Example</span>
        <div>
          <button className="btn" onClick={decr}>
            -
          </button>
          <span>{count}</span>
          <button className="btn" onClick={incr}>
            +
          </button>
        </div>
      </div>
    );
}
export default Effect;