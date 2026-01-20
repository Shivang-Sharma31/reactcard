import React from 'react'
import { MoveUpRight } from "lucide-react";
const rightcardcontent = (props) => {
  return (
    <div className='absolute flex flex-col justify-between top-0 left-0 h-full w-full p-8 '>
        <h2 className='text-xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-white mb-14 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet soluta ut, error beatae dolorem laudantium.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-full' >{props.tag}</button>
                <button className='bg-blue-600 text-white px-4 py-3 rounded-full' ><MoveUpRight className="w-5 h-5" /></button>
            </div>
        </div>
      </div>
  )
}

export default rightcardcontent
