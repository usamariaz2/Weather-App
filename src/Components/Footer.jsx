import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoGithub} from 'react-icons/bi'
export default function Footer() {
  return (
   
<footer id='footer' className=" bg-gray-300 drop-shadow ">
  <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
      <img src="Assets/logo.png" className='w-24' alt="Weatherly" />
      <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent ml-3 text-xl">Weatherly</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Weatherly —
      <a href="https://twitter.com/Usama_Crypto" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@usama_crypto</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a className="font-bold text-xl hover:scale-150 delay-200 hover:bg-[#3B5998] hover:text-white hover:rounded-full hover:p-1" href='https://web.facebook.com/profile.php?id=100016828635862'> 
        <BiLogoFacebook />
      </a> 
      <a className="ml-3 font-bold text-xl hover:scale-150 hover:bg-[#1DA1F2] hover:rounded-full hover:p-1 " href='https://twitter.com/Usama_Crypto'> 
        <BiLogoTwitter/>
      </a>
      <a className="ml-3 font-bold text-xl hover:scale-150 hover:bg-[#0077B5] hover:text-white hover:rounded-full hover:p-1 " href='https://www.linkedin.com/in/usamariazur/'> 
        <BiLogoLinkedin/>
      </a>
      <a className="ml-3 font-bold text-xl hover:scale-150 hover:bg-[#212F3D] hover:text-white hover:rounded-full hover:p-1 " href='https://github.com/usamariaz2'> 
        <BiLogoGithub/>
      </a>
    </span>
  </div>
</footer>

  )
}
