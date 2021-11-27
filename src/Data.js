import React from "react";
import Current from "./Current";
import Forecast from "./Forecast";

const Data = ({ data }) => {
  return (
    <main className="py-4 md:py-8 xl:py-12 space-y-4 xl:space-y-8 2xl:space-y-12">
      <Current location={data.location} current={data.current} />
      <div
        className="space-y-4 pb-12 md:space-y-0 md:flex justify-center 
                      items-center gap-4 xl:gap-8 2xl:gap-12"
      >
        <Forecast forecast={data.forecast.forecastday[0]} />
        <Forecast forecast={data.forecast.forecastday[1]} />
      </div>
    </main>
  );
};

export default Data;
