import React from 'react'
import {LOGO_URL} from "../utils/constants"


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-3 text-2xl'>
      <div>
        <img src={LOGO_URL}
          alt=''
          className='w-20 h-20'
        />
      </div>
      <div className='flex justify-between list-none w-150 underline'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Contect Us</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
      </div>
      <div>Cart</div>
    </nav>
  )
}

export default Navbar
