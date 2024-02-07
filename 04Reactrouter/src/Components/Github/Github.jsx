import React from 'react'
import { useEffect,useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
      fetch('https://api.github.com/users/mukulthakur31')
      .then((res)=> res.json())
      .then((data)=> setdata(data))
    },[])
  return (
    
    <div className="bg-gray-700 text-center m-7 p-8 text-3xl">Github Followers;{data.followers}
    <img src={data.avatar_url} alt="my picture" width={200}/></div>
  
  
  )
}

export default Github