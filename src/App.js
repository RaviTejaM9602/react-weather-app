import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import LoaderComponent from "./Components/LoaderComponent";
import SearchBar from "./Components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultComponent from "./Components/ResultComponent";


function App() {
  const [city,setCity] = useState('');
  const [result,setResult] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [status,setStatus] = useState(true);

  let base="https://api.openweathermap.org/data/2.5/weather"
  let password = process.env.REACT_APP_API_PASSWORD;
  let units = `metric`;
  let api = `${base}?q=${city}&units=${units}&appid=${password}`;
  

  useEffect(()=>{
    if(city==='') return 
    else{
      let fetchData = async()=>{
        setIsLoading(true)
        setResult([])
        return await axios.get(api).then(res=>{
          setIsLoading(false)
          setStatus(true)
          setResult(res?.data);
        })
        .catch(err=>{
          setIsLoading(false)
          setStatus(false)
        })
      }
      fetchData()
    }
  },[city])

  return (
    <div className="App text-capitalize">
    <h4 className="text-center">weather app</h4>
    <SearchBar setCity={setCity} />
    <LoaderComponent
      result={result}
      city={city}
      isLoading={isLoading}
      status={status}
    />
    {/* {result.length !==0?  <ResultComponent result={result}/>: null} */}
   {/* {result.length !==0 &&  } */}
   <ResultComponent/>
  </div>
  );
}

export default App;