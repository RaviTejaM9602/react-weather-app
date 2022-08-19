import React from "react";
import Cards from "./Cards";
import Timezone from "./TimeZone";

const ResultComponent = ({ result }) => {
  let { dt, id, main, name, sys, timezone, wind, weather} = result;
  console.log(result);
  return (
    <div className="card-parent">
      <Cards 
        weather={weather}
        data={main?.temp} 
        label="Temperature"
        unit="° C"
      />
      <Cards 
        data={main?.humidity}
        label="Humidity"
        unit="%"
        icon="bi bi-droplet" 
        />
      <Cards
         data={main?.pressure}
         label="Pressure"
         unit="hPa"
         icon="bi bi-speedometer"         
        />

      <Cards 
       data={wind?.speed}
       label="Wind"
       unit="Km/H"
       icon="bi bi-water"
              />
      <Cards
        data={<Timezone input={sys?.sunrise} timezone={timezone} />}
        label="Sun rise"
        icon="bi bi-sunrise" 
      />
      <Cards data={<Timezone input={sys?.sunset} timezone={timezone} />}
      label="Sun set"
      icon="bi bi-sunset-fill" 
      />
    </div>
  );
};

export default ResultComponent;
