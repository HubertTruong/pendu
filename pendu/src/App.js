import {useContext} from 'react';
import { ThemeContext } from './components/Context/Theme'
import './App.css'
import Home from './components/Home/Home'
import CallApi from './components/CallApi'
import Keyboard from './components/Keyboard/Keyboard'
import Leaderboard from './components/Leaderboard'


function App() {

  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <div 
      className="App" 
      style={
        {backgroundColor: theme.backgroundColor, color: theme.color}
      }
    >
      <button onClick={toggleTheme}>Dark / Light Mode</button>
      <Home />
      <CallApi /> 
      <Keyboard />
      <Leaderboard />
    </div>
  );
}

export default App;
