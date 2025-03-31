import React from 'react'
import { images } from '../../../constants'

const CTA = () => {
    return (
        <>
            <section className='relative bg-[#0D2436] px-5'>
                <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>
                    <div className='col-span-12 lg:col-span-6'>
                        <h2 className='text-white font-sans font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left'>Get our stories delivered from us to your inbox weekly.</h2>
                        <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
                            <input type="text" placeholder='your email' className='px-4 py-3 rounded-lg w-full placeholder:text-[#5A7184] ' />
                            <button className='px-4 py-3 rounded-lg w-full bg-[#1565D8] text-white font-bold md:w-fit md:whitespace-nowrap'>Get Started</button>
                        </div>
                        <p className='text-[#5A7184] text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left'>
                            <span className='font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-[#5A7184]'>Get a response tomorrow </span>if you submit by 9pm today.
                            If we received after 9pm will get a response the following day.
                        </p>
                    </div>
                    <div className='col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last'>
                        <div className='w-3/4 mx-auto relative'>
                            <div className='w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]'/>
                            <div className='w-1/2 h-1/2 bg-white opacity-[.06] rounded-lg absolute -bottom-[10%] -left-[8%]' />
                            <div className="w-full rounded-xl  bg-white p-3 z-[1] relative">
                                <img src={images.CtaImage} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-68 xl:h-60' />
                                <div className='p-5'>
                                    <h2 className='font-sans font-bold text-xl text-[#183856] md:text-2xl lg:text=[28px] lg:text-[28px]'>Future of work</h2>
                                    <p className='text-[#5A7184] mt-3 text-sm md:text-lg'>Majority of people will work in jobs that don't exist today</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA