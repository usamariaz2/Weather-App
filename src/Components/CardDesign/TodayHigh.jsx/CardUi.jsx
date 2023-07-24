import React from 'react'


export default function CardUi({main,icon,unit,temp_unit,text,name}) {
  return (
    <div className='rounded-lg bg-white border p-3 lg:w-1/3'>
      <h1 className='bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg'>{name}</h1>
        <div className='flex items-center justify-between w-full'>
        <h1 className='grow-0'>{main}{unit} <sup className=' text-slate-400'>{temp_unit}</sup> </h1>
        <div className='max-w-[60%]' >
          {icon}
          <p>{text} ipsum dolor sit amet.</p>
        </div>
        </div>
    </div>
  )
}
