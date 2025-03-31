import React from 'react'
import { images } from '../../../constants'

const Hero = () => {
  return (
 <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row justify-between'>
    <div className='mt-10 lg:w-1/2'>
        <h1 className='text-3xl text-center font-serif font-bold text-[#183856] md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Read the most intresting articles</h1>
        <p className='text-[#5A7184] mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, distinctio. Quis et reiciendis minus non aut harum ipsum odio consequatur, 
        vero illo dignissimos repellat rem dolore? Sed numquam dolore repudiandae.
        </p>
     <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
     <div className='relative'>
{/*import {FiSearch} from 'react-icons/fi'*/}
        {/*<FiSearch className = 'absolute left-3 top-1/2 -translate-x-1/2 w-6 h-6 text-[#959EAD]'/>  */}
     <input className='placeholder:font-bold font-semibold text-[#183856] placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4'
      type="text" placeholder='Search article ....' />
    </div>
        <button className='w-full bg-[#1565D8] text-white font-semibold rounded-lg px-5 py-3  md:absolute md:right-2 md:translate-y-3 md:w-fit md:py-2'>Search</button>
     </div>
     <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7 '>
        <span className='text-[#5A7184] font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>Popular Tags:</span>
        <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
            <li className='rounded-lg bg-blue-600 bg-opacity-10 px-3 py-1.5 text-[#1565D8] font-semibold'>Designs</li>
            <li className='rounded-lg bg-blue-600 bg-opacity-10 px-3 py-1.5 text-[#1565D8] font-semibold'>User Experince</li>
            <li className='rounded-lg bg-blue-600 bg-opacity-10 px-3 py-1.5 text-[#1565D8] font-semibold'>User Interface</li>
        </ul>
    </div>
    </div>
    <div className='hidden lg:block lg:1/2'>
        <img className='w-1/2' src={images.HeroImage} alt="Users are reading articles" />
    </div>
 </section>
  )
}

export default Hero