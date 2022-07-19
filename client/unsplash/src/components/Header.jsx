import React from 'react'
import logo from '../assets/my_unsplash_logo.svg'

const Header = () => {
  return (
    <header>
        <div className='container px-1 flex items-center justify-between'>
               <div className='flex items-center'>
                  <img src={logo} alt="logo" />
                  <input type="text" placeholder="search by name" className=' form-input w-c rounded-xl border border-grey text-grey font-noto'/>
               </div>
                
               <button className= 'text-white bg-gren  font-noto rounded-xl p-3 text-sm'>Add a photo</button>
        </div>
    </header>
  )
}

export default Header