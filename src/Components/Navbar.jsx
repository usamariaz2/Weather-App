import React from 'react'



const Navbar = () => {
  return (
<header className="cursor-pointer flex justify-center bg-gray-300 drop-shadow-md ">
  <div className="flex flex-nowrap flex-row gap-5 lg:gap-20 items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
      <img src="Assets/logo.png" className='w-16 lg:w-24' alt="Weatherly" />
      <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent hidden lg:display ml-3 text-xl">Weatherly</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-purple-600" href='/'>Home</a>
      <a className="mr-5 hover:text-purple-600" href='#home'>Weather</a>
      <a className="mr-5 hover:text-purple-600" href='#footer'>Contact</a>
    </nav>
  </div>
</header>

  
  )
}

export default Navbar