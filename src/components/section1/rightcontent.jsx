import React from 'react'
import Card from "./rightcard";
const rightcontent = (props) => {
  return (
    <div id="right" className='h-full flex overflow-auto flex-nowrap gap-10  w-2/3 '>
      {props.users.map(function(elem,idx){
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag}  />
      })}
    </div>
  )
}

export default rightcontent
