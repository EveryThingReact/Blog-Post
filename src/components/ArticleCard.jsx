import React from 'react'
import { images } from '../constants'
const ArticleCard = (className) => {
  return (
    <div className={`rounded-xl overflow-hidden  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
        <img src={images.post1Image} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-68 xl:h-60' />
        <div className='p-5'>
           <h2 className='font-sans font-bold text-xl text-[#183856] md:text-2xl lg:text=[28px]'>Future of work</h2>
           <p className='text-[#5A7184] mt-3 text-sm md:text-lg'>Majority of people will work in jobs that don't exist today</p>
           <div className='flex justify-between flex-nowrap items-center mt-6 '>
             <div className='flex items-center gap-x-2 mf:gap-x-2.5'>
                <img src={images.postProfile} alt="post profile" className='w-9 h-9 md:w-10 md:h-10' />
                <div className='flex flex-col '>
                  <h4 className='font-bold italic text-[#183856] text-sm md:text-base'>John Doe</h4>
                  <div className='flex items-center gap-x-2 '>
                    {/*import {BsChecklg} from 'react-icons/bs'*/}
                    <span className=' bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                        {/*<BsChecklg className="w-1.5 h-1.5 text-[#36B37E]" />*/}</span>
                    <span className='italic text-[#5A7184] text-xs md:text-sm'>Verified Writer</span>
                  </div>
                </div>
             </div>
             <span className='font-bold italic text-[#5A7184] text-sm md:text-base'>27 Feb</span>
           </div>
        </div>
    </div>
  )
}

export default ArticleCard