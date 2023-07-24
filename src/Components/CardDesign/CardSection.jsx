import React, { useContext } from 'react'
import { states } from '../Context/StateMangment'
import CardStyle from './CardStyle'
import CardUis from './TodayHigh.jsx/CardUis'
import UpCardColl from './TodayHigh.jsx/UpCardColl'

export default function CardSection() {
    const {weather } = useContext(states)
  return (
    <>
    {weather ?
    <div className='flex items-center min-h-screen gap-5 flex-col justify-center lg:pd-1 lg:flex-row '>
    <CardStyle/>
    <div className='bg-gradient-to-r from-violet-200 to-pink-200 p-4 rounded-md max-sm:w-full '>
      <h1 className='text-secondry font-medium text-xl mb-4'>Today's Highlights </h1>
    <div className='flex flex-col  gap-4 '>
    <UpCardColl/>
    <CardUis/>
    </div>
    </div>
    </div>
    :  null
}

    </>
  )
}
