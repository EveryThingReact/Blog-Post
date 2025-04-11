import React, { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux';
import { images } from '../constants'
{/*import {AiOutlineMenu, AiOutlineClose} from "react-icons"*/}


const NavItemInfo = [
    {name:"Home", type:"link" },
    {name:"Articles", type: "link"},
    {name:"Pages v", type:"dropdown", items:["About Us","Contact Us"]},
    {name:"Pricing", type: "link"},
    {name:"FAQ", type: "link"},
]
const NavItem = ({item}) => {
  const [dropdown, setDropdown] = useState(false);
  const userSate = useSelector();

  const toggleDropdownHandler = () => {
   setDropdown((curState) => {
    return !curState;
   })
  }
   return (
    <li className='relative group'>
    {item.type === "link" ? (
    <>
    <a href="/" className='px-4 py-2 group-hover:text-blue-500 transition-all duration-500 '>
    {item.name}
    </a>
    <span className=' cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 
    top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </> ):( 
    <div className='flex flex-col items-center'>
      <button className="px-4 py-2 flex gap-x-1 items-center" onClick={toggleDropdownHandler}>
    <span>{item.name}</span>
    </button>
    <div className={` ${dropdown ? "block":"hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 rlg:ight-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
      <ul className='bg-[#183856] lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
       {item.items.map((page , index)=>(
        <a key={index} href="/" className='hover:bg-[#0D2436] hover:text-white px-4 py-2 text-white lg:text-[#183856]'>
          {page}</a>
       ))}
      </ul>
    </div>
    </div>
    )}
 
   </li>
   )
};
const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);
    const navVisibilityHandler = () => {
        setNavIsVisible((curState) =>{
            return !curState;
        })
    }
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
        <header className='container mx-auto px-5 flex  justify-between py-4 items-center'>
            <div>
                <img src={images.Logo} className='w-16' alt="logo" />
            </div>
         <div className='lg:hidden z-50'>
         <button onClick={navVisibilityHandler} className="focus:outline-none" aria-label="Toggle Menu">
            <svg
                className="w-6 h-6 text-indigo-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={navIsVisible ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
         </div>
            <div className={` ${navIsVisible ? "right-0" : "-right-full "} transition-all duration-300 mt-[56px] lg:mt-0 bg-[#0D2436] lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center
             lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className='text-white items-center gap-y-5 lg:text-[#183856] flex flex-col lg:flex-row gap-x-2 font-semibold'>
                   {NavItemInfo.map((item) =>(
                    <NavItem key={item.name} item={item}/>
                   ))}
                </ul>
            <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 '>Sign in</button>
            </div>
        </header>
    </section>

  )
}

export default Header