import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    // useparams hook is used to extarcttake data fromthe url 
    const {userid,usernumber} = useParams()
  return (
    <>
    <div className="bg-gray-700 text-center text-3xl">Userid:{userid}</div>
    <div className="bg-gray-700 text-center text-3xl">Usernumber:{usernumber}</div>
    </>
  )
}

export default User