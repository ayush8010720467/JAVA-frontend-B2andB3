import './App.css';
import State from './hooks/State';
import { useState } from 'react';
import { hooksStateEnum } from './constants'
import Effect from './hooks/Effect';
import LayoutEffect from './hooks/LayoutEffect';
import Callback from './hooks/Callback';
import UseMemoExample from './hooks/Memo';

function App() {
  const [hooksState, setHooksState] = useState(hooksStateEnum[1]);
  return (
    <div className="App">
      <button
        className={hooksState === hooksStateEnum[0] ? "btn selected" : "btn"}
        onClick={() => setHooksState(hooksStateEnum[0])}
      >
        useState
      </button>
      <button
        className={hooksState === hooksStateEnum[1] ? "btn selected" : "btn"}
        onClick={() => setHooksState(hooksStateEnum[1])}
      >
        useEffect
      </button>
      <button
        className={hooksState === hooksStateEnum[2] ? "btn selected" : "btn"}
        onClick={() => setHooksState(hooksStateEnum[2])}
      >
        useLayoutEffect
      </button>
      <button
        className={hooksState === hooksStateEnum[3] ? "btn selected" : "btn"}
        onClick={() => setHooksState(hooksStateEnum[3])}
      >
        useCallback
      </button>
      <button
        className={hooksState === hooksStateEnum[4] ? "btn selected" : "btn"}
        onClick={() => setHooksState(hooksStateEnum[4])}
      >
        useMemo
      </button>
      <header className="App-header">
        {hooksState === hooksStateEnum[0] && <State />}
        {hooksState === hooksStateEnum[1] && <Effect />}
        {hooksState === hooksStateEnum[2] && <LayoutEffect />}
        {hooksState === hooksStateEnum[3] && <Callback/>}
        {hooksState === hooksStateEnum[4] && <UseMemoExample/>}
      </header>
    </div>
  );
}

export default App;
//  <State/>
// new State()
// <button onClick={decr}>-</button>
// <span>{count}</span>
// <button onClick={incr}>+</button>
// <button onClick={reset}>Reset</button>