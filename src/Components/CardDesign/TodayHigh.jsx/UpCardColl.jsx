import React, { useContext } from 'react'
import UpCardDesign from './UpCardDesign'
import { states } from '../../Context/StateMangment'

export default function UpCardColl() {
    const {weather}= useContext(states)
    const state =[
        {name:"Wind Speed",img:"Assets/wind.png",lf_txt:weather.wind.speed,unit:"km/h",rt_txt:(new Date(weather.dt * 1000)).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric', hour12: true })},
        {name:"Pressure",img:"Assets/pressure.png",lf_txt:weather.main.pressure, unit:"mbar",},
        {name:"Sunrise & Sunset",img:'Assets/sun.png',lf_txt:(new Date(weather.sys.sunrise * 1000)).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric', hour12: true }),
        rt_txt:(new Date(weather.sys.sunset * 1000)).toLocaleString('en-US', {  hour: 'numeric', minute: 'numeric' })}
    ]
    
  return (
    <div className='flex gap-5 flex-col  lg:flex-row'>
        {state.map((item,i)=>{return <UpCardDesign key={i} name={item.name} img={item.img} lf_txt={item.lf_txt} unit={item.unit} rt_txt={item.rt_txt} />})}
    </div>
  )
}
