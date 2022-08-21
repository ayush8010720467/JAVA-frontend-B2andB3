// Example for useLayout Effect

import { useLayoutEffect, useEffect, useState } from "react";
function LayoutEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => console.log("My Component has rendered FROM USE-EFFECT"));

    useEffect(() => {
      console.log("Effect Function has been mounted FROM USE-EFFECT");
      return () => {
        console.log("Effect Function has been Un-mounted FROM USE-EFFECT");
      };
    }, []);

    useEffect(() => {
      console.log("Value of count changed FROM USE-EFFECT");
    }, [count]);

    useLayoutEffect(() => console.log("My Component has rendered FROM USE-LAYOUT-EFFECT"));

    useLayoutEffect(() => {
      console.log("Effect Function has been mounted FROM USE-LAYOUT-EFFECT");
      return () => {
        console.log("Effect Function has been Un-mounted FROM USE-LAYOUT-EFFECT");
      };
    }, []);

    useLayoutEffect(() => {
      console.log("Value of count changed FROM USE-LAYOUT-EFFECT");
    }, [count]);

    const incr = () => setCount((count) => count + 1);
    const decr = () => setCount((count) => count - 1);
    return (
      <div>
        <span>Use Layout Effect Example</span>
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
export default LayoutEffect;