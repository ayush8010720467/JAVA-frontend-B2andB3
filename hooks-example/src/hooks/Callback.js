import { useCallback, useState } from 'react';
function Callback(){
    const [count, setCount] = useState(0);
    const getNameWithout_useCallback = () => {
        return () => `Ayush getNameWithout_useCallback ${count}`;
    }

    const getNameWith_useCallback = useCallback(() => {
      return () => `Ayush getNameWith_useCallback ${count}`;
    }, []);

    return (
      <div>
        <div>
          <span> useCallback Hook Example</span>
        </div>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          +
        </button>
        <br></br>
        <span>{getNameWithout_useCallback()()}</span>
        <br />
        <br />
        <span>{getNameWith_useCallback()()}</span>
      </div>
    );
}
export default Callback;