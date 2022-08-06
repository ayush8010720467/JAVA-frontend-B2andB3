import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import { useState } from 'react';
import Counter  from './Components/Counter/Counter';
import Setting from './Components/Setting/Setting';
// arr= [1,2,3,4,5]
// ...arr ===> 1,2,3,4,5
function App() {
  const [counters, setCounters] = useState([]);
  const [displaySetting, toggleDisplaySetting] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const addCounters = () => {
    setCounters([...counters, <Counter key={counters.length} />]);
  }
  return (
    <div className="App">
      <header className="App-header" style={backgroundColor}>
        <div className="top-right">
          <Button
            stylingClass={"btn"}
            handleClick={() => {
              toggleDisplaySetting((displaySetting) => !displaySetting);
            }}
          >
            Setting
          </Button>
          {!displaySetting && <Button stylingClass={"btn btn-plus"} handleClick={addCounters}>
            +
          </Button>}
        </div>
        {displaySetting ? (
          <Setting
            onClose={() => toggleDisplaySetting(false)}
            changeBackground={(color) => {
              setBackgroundColor({ "backgroundColor": color });
            }}
            initialBgColor={backgroundColor? backgroundColor["background-color"]: null}
          />
        ) : (
          <>{counters}</>
        )}
      </header>
    </div>
  );
}

export default App;
