import React from 'react'
import { useState ,useCallback , useEffect , useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState("8")
  const [numberAllowed , setnumberAllowed] = useState(false) 
  const [character ,setCharacter] = useState(false) 
  const [password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(character) str += "~!@#$%^&*)_+{}[]|\;:<>,./?"

     for(let i=1; i<=length ; i++){
    let char =(Math.floor(Math.random() * str.length + 1));
    pass += str.charAt(char)
  }
  setPassword(pass)
  },[length,numberAllowed,character,setPassword])

  const copyPasswordtoClipboard= useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },
  [password])

 useEffect(()=>{
  passwordGenerator()
 },[length,setnumberAllowed,setCharacter,passwordGenerator])

  

  return (
    <>
    
    <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-500 text-center my-4">Password Generator
      <div className ="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-black"
        placeholder="Password"
        readOnly 
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordtoClipboard}
        className="bg-blue-800 text-white w-30"
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex ites-center gap-x-1">
          <input
          type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange ={(e)=>{setLength(e.target.value)}}
           />
           <label >Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={setnumberAllowed}
          id="numberInput"
          onChange ={() => {
            setnumberAllowed((prev) => !prev);
          }}
          />
          <label >Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={character}
          id="numberInput"
          onChange ={() => {
            setCharacter((prev) => !prev);
          }}
          />
          <label >Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
