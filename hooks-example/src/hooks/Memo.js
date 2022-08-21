import { useMemo, useState } from "react";
function UseMemoExample() {
    const [count, setCount] = useState(0);
    const getNameWithout_useMemo = () => {
      return () => `Ayush getNameWithout_useMemo ${count}`;
    };

    const getNameWith_useMemo = useMemo(() => {
      return () => `Ayush getNameWith_useMemo ${count}`;
    }, []);

    return (
      <div>
        <div>
          <span> useMemo Hook Example</span>
        </div>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          +
        </button>
        <br></br>
        <span>{getNameWithout_useMemo()()}</span>
        <br />
        <br />
        <span>{getNameWith_useMemo()}</span>
      </div>
    );
}
export default UseMemoExample;
