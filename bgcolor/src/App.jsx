
import {useState} from 'react'
import React from 'react'
export const App = () => {

  const [color , setColor] = useState("white");
  return (
    <div className="w-full h-screen"
      style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 px-3 py-1 rounded-full">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"blue"}}
          >Blue</button>
             <button
             onClick={() => setColor("yellow")}
             className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"yellow"}}
          >Yellow</button>
             <button
             onClick={() => setColor("green")}
             className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"green"}}
          >Green</button>
             <button
             onClick={() => setColor("purple")}
             className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"purple"}}
          >Purple</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"black"}}
          >Black</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-5 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"pink"}}
          >Pink</button>
        </div>
      </div>
    </div>

  )
}
export default App