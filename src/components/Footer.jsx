import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <section className='bg-[#0D2436]'>
    <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10 '>
      <div className='col-span-5   md:col-span-4 lg:col-span-2'>
        <h3 className='text-[#5A7184] font-bold md:text-lg'>Products</h3>
        <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
           <li>
            <a href="/">landing page</a>
           </li>
           <li>
            <a href="/">Features</a>
           </li> <li>
            <a href="/">Documentation</a>
           </li> <li>
            <a href="/">Referal programs</a>
           </li>
           <li>
            <a href="/">Pricing</a>
           </li>
        </ul>
      </div>
      <div className='col-span-5  md:col-span-4 lg:col-span-2'>
        <h3 className='text-[#5A7184] font-bold md:text-lg'>Services</h3>
        <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
           <li>
            <a href="/">Documentation</a>
           </li>
           <li>
            <a href="/">Design</a>
           </li> <li>
            <a href="/">Themes</a>
           </li> <li>
            <a href="/">Illustrations</a>
           </li>
           <li>
            <a href="/">UI kit</a>
           </li>
        </ul>
      </div>
      <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
        <h3 className='text-[#5A7184] font-bold md:text-lg'>Company</h3>
        <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'> 
           <li>
            <a href="/">About</a>
           </li>
           <li>
            <a href="/">Terms</a>
           </li> <li>
            <a href="/">Privacy Policy</a>
           </li> <li>
            <a href="/">Referal programs</a>
           </li>
           <li>
            <a href="/">Careers</a>
           </li>
        </ul>
      </div>
      <div className='col-span-5 md:col-span-4 lg:col-span-2'>
        <h3 className='text-[#5A7184] font-bold md:text-lg'>Products</h3>
        <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
           <li>
            <a href="/">More</a>
           </li>
           <li>
            <a href="/">Documentation</a>
           </li> <li>
            <a href="/">Licence</a>
           </li> <li>
            <a href="/">Changelog</a>
           </li>
        </ul>
      </div>
      <div className='col-span-10 md:order-first md:col-span-4 '>
        <img src={images.Logo} alt="logo" className='brightness-0 invert mx-auto md:mx-0'/>
        <p className='text-sm text-[#5A7184] text-center mt-4 md:text-left md:text-base lg:text-sm'>Build a modern and creative website with J Graphics</p>
        <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
          <li>
            <a href="/"><img src={images.github} alt="" className='w-6 h-auto'/></a>
          </li>
          <li>
            <a href="/"><img src={images.linkin} alt="" className='w-6 h-auto'/></a>
          </li>
          <li>
            <a href="/"><img src={images.x} alt="" className='w-6 h-auto'/></a>
          </li>
          <li>
            <a href="/"><img src={images.instagram} alt="" className='w-6 h-auto'/></a>
          </li>
          <li>
            <a href="/"><img src={images.github} alt="" className='w-6 h-auto'/></a>
          </li>
        </ul>
      </div>
      <div className='hidden  md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
        <div className='bg-[#1565D8] text-white p-3 rounded-full'>
        <img src={images.linkin} alt="" className='w-7 h-auto'/>
        </div>
        <p className='font-bold italic text-[#5A7184]'>Copyright 2025. Crafted with inspiration</p>
      </div>
    </footer>
    </section>
  )
}

export default Footer