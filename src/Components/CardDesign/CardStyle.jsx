import React, { useContext } from 'react'
import { states } from '../Context/StateMangment'
import {BsGeoAltFill} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaCalendarDays} from 'react-icons/fa6'

export default function CardStyle() {
const {weather,getGeoLocation} = useContext(states)

return (
   <div className='bg-gradient-to-r from-violet-500 to-purple-500 drop-shadow-md md:drop-shadow-xl rounded-lg p-3 text-white w-full  lg:w-1/4 hover:scale-105 delay-100 duration-200 ease-in-out'>
    <div className=' flex flex-col gap-3'> 
        <div className='flex justify-end'>
       <button className='bg-primary_bg p-1 rounded-full ' onClick={getGeoLocation}><BsGeoAltFill className='font-bold text-2xl' /></button> 
       </div>
           <img className='w-36' src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" /> 
<div className='flex font-medium items-center'>
       <h1 className='text-6xl'> {Math.floor(weather.main.temp-273.15)}</h1><sup className='text-lg'>0</sup><h1 className='text-4xl'>C</h1></div>

       <div className='flex items-center'>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} className='w-9' alt={weather.weather[0].description} />
        <h1 className='uppercase font-medium tracking-wide text-2xl'>{weather.weather[0].description}</h1>
        </div>
        
        <hr className=" bg-gradient-to-r from-violet-500 to-purple-500 border border-purple-400 rounded-full "></hr>
        <div className='flex items-center font-medium gap-2'>
        <HiOutlineLocationMarker className='text-2xl'/>
        <h3>{weather.name}, {weather.sys.country}</h3>
        </div>

        <div className='flex font-medium items-center gap-2'>
        <FaCalendarDays className='text-2xl'/> 
        <div>{(new Date(weather.dt * 1000)).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric'})} <span className='text-xl ml-2 text-bold'>{(new Date(weather.dt * 1000)).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric', hour12: true })} </span> </div>
        </div>

        </div>

    </div>
    
  )
}
