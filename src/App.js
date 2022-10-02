import Topbar from './compoents/Topbar';
import Main from './compoents/Main';
import { useDarkMode } from './context/darkModeContext';
import './App.scss'

function App() {
  const darkMode = useDarkMode();
  console.log('darkMode', darkMode)
  return (
    <div className={`app ${darkMode && 'dark'}`}>
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
