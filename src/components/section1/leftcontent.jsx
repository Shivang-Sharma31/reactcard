import React from 'react'
import { MoveUpRight } from "lucide-react";
import Texthero from "./herotext";
const leftcontent = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between '>
      <Texthero/>
      <div >
        <MoveUpRight className="w-12 h-12" />
      </div>
    </div>
  )
}

export default leftcontent
