import React, { useContext, useEffect, useState } from "react";
import { states } from "./Context/StateMangment";
import { IoMdSearch } from "react-icons/io";
export default function InputSearch() {
  const [city, setCity] = useState("Lahore");
  const { fetchLatLon,lat,lon, fetchWeather } = useContext(states);
  const handleCity = async (e) => {
    setCity(e.target.value);
  };
  const handleFetch = async () => {
    if (city.trim() !==''){
      fetchLatLon(city);
    }
  };

  useEffect(() => {
    if(lat !== null && lon !== null){
      fetchWeather();
    }
    // eslint-disable-next-line
  }, [lat,lon]);
  return (
    <fieldset className="w-full flex justify-center ">
      <label htmlFor="Search" className="hidden">
        Search
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="button"
            onClick={handleFetch}
            title="search"
            className="p-1 focus:outline-none focus:ring"
          >
            <IoMdSearch className="" />
          </button>
        </span>
        <input
          onChange={(e) => {
            handleCity(e);
          }}
          onKeyPress={(e) => e.key === "Enter" && handleFetch()}
          type="search"
          name="Search"
          placeholder="Search the city"
          className="w-80 py-2 pl-10 text-sm rounded-md  focus:outline-none "
        />
       
      </div>
    </fieldset>
  );
}
