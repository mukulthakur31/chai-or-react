import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef= useRef(null)
  const passwordgenerator= useCallback(()=>{
     let pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numbers) str+="123456789"
     if(character) str+="!@~#$%^&*()<>"

     for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(index)
     }
     setpassword(pass)

  },[length,character,numbers,setpassword])

  useEffect(() => {
    passwordgenerator()
  }, [length, numbers, character, passwordgenerator])
  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])



  return (
    <>
    <div className="container">
    <h1 className='text-4xl text-center text-white'>Password generator</h1>
    <div className="result text-center">
      <input type="text"
      value={password} 
      readOnly
      placeholder='password'
      ref={passwordRef}
      />
      <button className='text-2xl text-center text-white btn'
      onClick={copyPasswordToClipboard}
      >Copy</button>
    </div>
    <div className="scroll text-center">
      <input type="range"
      min={0}
      max={20}
      value={length} 
      onChange={(e)=>setlength(e.target.value)}
      />
    <label className='text-2xl text-center text-white'>Length:{length}</label>
    </div>
    <div className="checkmarks text-center">
      <input type="checkbox"
       defaultChecked={numbers}
      onChange={()=>{
        // her in next line we can implictly return prev with out {} because it is a single line code in it  but if we have a mul. line code  we can't implicity return then ww have to use return keyword  here i use return beacuse i want to explain that we can also use return but there is no  need of return in sigle line code but if you use curly brackects then you ned to write return keyword 
        setnumbers((prev)=>{return !prev})
      }}/>
      <label className='text-2xl text-center text-white'>Numbers</label>
      <input type="checkbox"
       defaultChecked={character}
      onChange={()=>{
        setcharacter((prev)=>!prev)
      }}/>
      <label className='text-2xl text-center text-white'>Characters</label>
    </div>
    </div>
    </>
  )
}

export default App
