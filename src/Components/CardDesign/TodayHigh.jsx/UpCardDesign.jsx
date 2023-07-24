import React from 'react'
export default function UpCardDesign({name,img,lf_txt,unit,rt_txt}) {
  return (
    <div className="group flex flex-col gap-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-md p-2 w-1/1 lg:w-1/3">
      <div className=' bg-primary_6 py-1 px-2 rounded-md max-w-fit'>
      <h1 className='text-secondary text-md font-normal tracking-wide'>{name}</h1>
      </div>
      <img className='w-sm self-center object-cover text-red-600 w-32 group-hover:animate-spin duration-1000 delay-200' src={img} alt={name} />
      {/* <div className="w-16 h-16 border-8 p-10 border-dashed rounded-full animate dark:border-violet-400">
      {lf_txt}
      </div> */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
        <h1 className='text-2xl font-medium'>{lf_txt}</h1>
        <sub className='text-lg text-slate-200'>{unit}</sub>
        </div>
        <h1 className='text-xl'>{rt_txt}</h1>
      </div>
    </div>
  )
}
