import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-center text-4xl text-red-500 p-4'>User : {userid}</div>
  )
}

export default User