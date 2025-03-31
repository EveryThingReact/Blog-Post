import React, { useState } from 'react'

const CommentForm = ({btnLable, formSubmitHandler, formCancelHandler = null, initialText = "" }) => {
    const submitHandler = (e) => {
        e.preventDefault()
        formSubmitHandler(value);
        setValue("");
    }
   const [value, setValue] = useState(initialText);    
  return (
    <form onSubmit={submitHandler}>
     <div className='flex flex-col-reverse gap-y-2 items-end border border-[#1565D8] rounded-lg p-4 min-[420px]:flex-row'>
        <textarea  className='w-full focus:outline-none bg-transparent'
         placeholder='Leave your comments here..' value={value} onChange={(e) => setValue(e.target.value)} rows="5"/>
         <div className='flex items-center gap-x-2 pt-2 '>
          {formCancelHandler && (
            <button onClick={formCancelHandler} className='px-6 py-2.5 rounded-lg border border-red-500 text-red-500'>
              Cancel
            </button>
          )}
         <button type='submit' className='px-6 py-2.5 rounded-lg bg-[#1565D8] text-white font-semibold '>{btnLable}</button>
         </div>
     </div>
    </form>
  )
}

export default CommentForm