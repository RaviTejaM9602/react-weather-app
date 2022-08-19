import React from "react";
import Cards from "./Cards";
import Timezone from "./Timezone";

const ResultComponent = ({ result }) => {
  let { main, sys, timezone, wind} = result;
  console.log(result);
  return (
    <div className="card-parent">
      <Cards 
        data={main?.temp} 
        label="Temperature"
        unit="° C"
      />
      <Cards 
        data={main?.humidity}
        label="Humidity"
        unit="%" />
      <Cards
         data={main?.pressure}
         label="Pressure"
         unit="hPa"
        />

      <Cards 
       data={wind?.speed}
       label="Wind"
       unit="Km/H"
              />
      <Cards
        data={<Timezone input={sys?.sunrise} timezone={timezone} />}
        label="Sun rise"
      />
      <Cards data={<Timezone input={sys?.sunset} timezone={timezone} />}
      label="Sun set" />
    </div>
  );
};

export default ResultComponent;
