import React from 'react'
import LeftContent from "./leftcontent";
import RightContent from "./rightcontent";
const page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 items-center px-18 h-[90vh] flex gap-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default page1Content
