import React from 'react'
import ArticleCard from '../../../components/ArticleCard';
import { changeCount } from '../../../store/actions/countActions';
import {  useSelector, useDispatch } from 'react-redux';
const Article = () => {
  const count = useSelector((state) => state.count.number); // <-- Fix selector
  const dispatch = useDispatch();
  const countChangeHandler = (type) => {
    dispatch(changeCount(type))
  }
  return (
    <section className=' flex flex-col  container mx-auto  px-5 py-10'>
        <div className='flex flex-wrap  md:gap-x-5 gap-y-5 pb-10'>
        <ArticleCard className="w-full md:w-[calc(50% - 20px) lg:w-[calc(33.33%-21px)]]"/>
        <ArticleCard className="w-full md:w-[calc(50% - 20px) lg:w-[calc(33.33%-21px)]]"/>
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-[#1565D8] border-2 border-[#1565D8] px-6 py-3 rounded-lg'>
            <span>More articles</span>
             {/*import {FaArrowRight} from 'react-icons/fa'*/}
          {/*} <FaArrowRight clasName = "w-3 h-3"/>*/}
        </button>
       <div className='mt-2 flex items-center gap-x-5'>
         <button onClick={() => countChangeHandler('DECREASE')} >DECREASE</button>
         {count}
         <button onClick={() => countChangeHandler('INCREASE')}>INCREASE</button>

       </div>
    </section>
  )
}

export default Article