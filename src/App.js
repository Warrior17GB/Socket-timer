import './App.css';
import { subscribeToTimer } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [timestamp, setTimestamp] = useState("No timestamp yet");
  useEffect(() => {
    subscribeToTimer((err, timestamp) => setTimestamp(timestamp))
  }, []);
  return (
    <div className="App">
      <p className="App-intro">
        This is the timer value: {timestamp}
      </p>
    </div>
  );
}

export default App;
