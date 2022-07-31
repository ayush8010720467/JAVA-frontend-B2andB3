import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(0);
  const changeTheme = () => {
    if (theme === 0) {
      setTheme(1);
    } else {
      setTheme(0);
    }
  }
  return (
    <div className={theme === 0 ? "App light" : "App dark"}>
      <header className="App-header">
        <button
          className={theme === 0 ? "btn btn-light" : "btn btn-dark"}
          onClick={changeTheme}
        >
          Toggle Background
        </button>
      </header>
    </div>
  );
}

export default App;
