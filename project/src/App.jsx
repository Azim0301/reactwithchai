import  React from 'react'
import Card from '../components/card'

const App = () => {
  let myObj = {
    name: "Azim",
    age: 20
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
    <Card username="Azim" txt="Welcome from Azim"/>
    <Card username="Ajmeri" txt="Welcome from Ajmeri"/>
    </>
  )
} 
export default App