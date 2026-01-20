import React from 'react'
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
const App = () => {

  const users = [
    { img : "https://images.unsplash.com/photo-1768638687898-7851d341cb87?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
      intro :"", 
      tag:"Satisfied"
    },
    { img : "https://plus.unsplash.com/premium_photo-1762254767906-66ebacfaf414?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xlOXpPN3ZrWHd0c3x8ZW58MHx8fHx8" ,
      intro :"", 
      tag:"Underserved"
    },
    { img : "https://images.unsplash.com/photo-1764366795867-a0e7fcbf791e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" ,
      intro :"", 
      tag:"Underbanked"
    },
    { img : "https://images.unsplash.com/photo-1768590238659-b401ffa9571e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" ,
      intro :"", 
      tag:"Understanding"
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
 