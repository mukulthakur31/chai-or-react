import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import { login as authLogin } from '../store/authSlice'
import {Button,Input,Logo,} from "./index"
import UseDispatch from 'react-redux'
import authservice from '../apperite/auth'
import {useForm} from "react-hook-form"
function Login() {
    const navigate =useNavigate()
    const dispatch=UseDispatch()
    const {register,handleSubmit}=useForm()
    const [error ,seterror]=useState("")
    const login=async(data)=>{
        seterror("")
        try {
            const session=await authservice.login(data)
            if(session){
                const userdata=await authservice.getCurrentUser()
                if(userdata) dispatch(authLogin(userdata));
                navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div 
    className='flex items-center justify-center w-full'>
        <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div
            className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%"/>
                </span>
            </div> 
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account </h2>  
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have an account?&nbsp;
                <Link
                    to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'> {error}</p>}

            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    type="email"
                    label="Email"
                    placeholder='Enter your Email'
                    {
                        ...register("Email",{
                            required:true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                        })
                    }
                     />

                     <Input 
                     type="Password"
                     label='Password'
                     placeholder='Enter Password'
                     {...register("Password",{
                            required:true,
                     })}
                      />

                      <Button
                      type='Submit'
                      className='w-full'
                      >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login