//imports
import { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [time, setTime] = useState('')
    
    function formatTime(val) {
      if(val < 10){
        return '0'
      } else {
        return '';
      }
    };
    
    //interval for clock tick function
    useEffect(() => {
      //Interval
      const timerID = setInterval(() => tick(), 1000)

      //Cleanup
      return function Cleanup() {
        clearInterval(timerID)
      }
    })

    //Clock Tick Function
    function tick() {
      //Date variables
      const d = new Date();
      const h = d.getHours();
      const m = d.getMinutes();
      const s = d.getSeconds();

      //State to Fromated time
      setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);
    }
  //Return JSX
  //Insert State
  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
}

export default App;
