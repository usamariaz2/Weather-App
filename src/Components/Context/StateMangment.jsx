import React, { createContext, useState } from 'react'
const states = createContext();
const apiKey = process.env.REACT_APP_API_KEY;
export default function StateMangment({children}) {
   const[lat , setLat]= useState(31.5656822)
   const[lon , setLon]= useState(74.3141829)
   const [weather , setWeather]= useState('')
   const [loading , setLoading]= useState(false)

    const fetchLatLon = async(city)=>{
      try {
        setLoading(true)
        const req = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        const data = await req.json();
        
          setLat(data[0].lat);
          setLon(data[0].lon);
          setLoading(false)

    } catch (error) {
      alert("can't find")
        setLat(null)
        setLon(null)
        setLoading(false)
        console.log(error)
    }
    }
    const fetchWeather = async()=>{
      try {
       setLoading(true)
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        const req= await fetch(url)
        const data = await req.json();
        setWeather(data)
        setLoading(false)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    const getGeoLocation =async()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
        },
        ((error)=>{
          console.error("Can't Get Location", error)
        }))
      }
        else{
        console.log("can't get that location")
      }
      
    };
   
    

  return (
    <states.Provider value={{fetchLatLon,apiKey,getGeoLocation, loading,fetchWeather,lat,lon,weather}}>{children}</states.Provider>
  )
}
export {states};
