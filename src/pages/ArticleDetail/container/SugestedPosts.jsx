import React from 'react'
import { Link } from 'react-router-dom'

const SugestedPosts = ({className, header, post = [], tags}) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
     <h2 className='font-sans font-medium  text-[#0D2436] md:text-xl'>{header}</h2>
     <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
       {post.map((item) => (
        <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
         <img className='aspect-square object-cover rounded-lg w-1/5' src={item.image} alt="image" />
         <div className='text-sm font-sans text-[#0D2436] font-medium'>
            <h3 className='text-xs font-sans text-[#0D2436] font-medium md:text-base lg:text-lg '>{item.title}</h3>
            <span className='text-xs  opacity-60'>{new Date(item.createdAt).toLocaleDateString("en-US",{
                day: "numeric",
                month:"short",
                year:"numeric"
            })}</span>
         </div>
        </div>
       ))}
     </div>
     <h2 className='font-sans  font-medium text-[#0D2436] mt-8 md:text-xl'>Tags</h2>
     <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
        {tags.map((item, index) => (
        <Link key={index} to='/' className='inline-block rounded-md px-3 py-1.5 bg-[#1565D8] font-sans text-xs text-white md:text-sm'>{item}</Link>
        ))}
     </div>
    </div>
  )
}

export default SugestedPosts