import React from 'react'
import Rightcardcontent from "./rightcardcontent";
const rightcard = (props) => {
  return (
    <div className='h-full shrink-0  relative overflow-hidden w-80 bg-red-200 rounded-4xl '>
      <img className='w-full h-full object-cover' src={props.img} alt="" />
      <Rightcardcontent id={props.id} tag={props.tag} />
    </div>
  )
}

export default rightcard
