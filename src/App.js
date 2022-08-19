import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

function App() {
  const [city, setCity] = useState('');
  const [result,setResult] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [status,setStatus] = useState(true);
  return (
    <div className="App">
      <h1>Hello React Weather App</h1>
    </div>
  );
}

export default App;
