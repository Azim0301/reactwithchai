import React from 'react'
import {useState} from 'react'

export const App = () => {
  const [color, setColor] = useState("red");
  return (
   <div className ="w-full h-screen"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 y-2">
      <div className="flex flex-wrap gap-5">
        <button 
        onClick ={() => setColor("red")}
        className="text-white"
        style={{backgroundColor:"red"}}
        >Red</button>
        <button
        onClick ={() => setColor("green")}
         className="text-white"
         style={{backgroundColor:"green"}}
        >Green</button>
        <button 
        onClick ={() => setColor("blue")}
        className="text-white"
        style={{backgroundColor:'blue'}}
        >Blue</button>

      </div>
    </div>

   </div>
  )
}
export default App