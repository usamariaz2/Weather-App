import React, { useContext } from 'react'
import { states } from '../../Context/StateMangment'
import CardUi from './CardUi'
import {WiHumidity} from 'react-icons/wi'
import {MdOutlineVisibility} from 'react-icons/md'
import {FaTemperatureEmpty} from 'react-icons/fa6'

export default function CardUis() {
    const {weather} = useContext(states)
    const state =[
       {name:"Humidity",  main:weather.main.humidity ,unit:" %", icon:<WiHumidity className=' font-semibold text-2xl text-darkviolet' />,text:'Humidity'},
       {name:"Feels_like", main:Math.floor(weather.main.feels_like-273.15),temp_unit:"0C" , icon:<FaTemperatureEmpty className=' font-semibold text-2xl text-darkviolet'/>,text:"Feels like"},
       {name:"Visibility", main:weather.visibility/1000 ,unit:" Km", icon:<MdOutlineVisibility className=' font-semibold text-2xl text-darkviolet'/>, text:"Visibilty "}
    ]
    // {Math.floor(weather.main.feels_like-273.15)}
    return (
        <div className='flex items-center gap-5  flex-col lg:flex-row '>
            {state.map((item,i)=>{return <CardUi key={i} temp_unit={item.temp_unit} unit={item.unit} name={item.name} main={item.main} icon={item.icon} text={item.text}/> })}
        </div>
  )
}
