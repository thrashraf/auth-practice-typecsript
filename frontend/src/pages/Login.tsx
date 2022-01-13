import React from 'react'
import loginImage from '../assets/login.png'


interface Props {
    
}

export const Login = (props: Props) => {
    return (
        <div className=' w-full grid grid-cols-2 overflow-hidden'>
            <img src={loginImage} alt="login" className=' object-cover'/>

            <section className='flex flex-col max-w-md mx-[20%]'>
                <h1 className=' text-lg text-gray-500 font-medium mt-10'>Welcome Back.</h1>
                <p className=' text-3xl font-semibold'>Log In to Continue.</p>
                
                <input className='px-10 py-3 rounded-lg border-2 mt-10' placeholder='enter your email' type="email" />
                <input className='px-10 py-3 rounded-lg border-2 my-5' placeholder='password' type="password" />

                <button className='px-5 py-2 border-2 rounded-lg bg-blue-400 text-white border-blue-400   mt-10'>Login</button>

                <section className='flex justify-center items-center mt-5'>
                    <span className=' border-t-[1px] border-gray-300 w-32 mr-2'></span>
                    <p className='text-gray-300'>or</p>
                    <span className=' border-t-[1px] border-gray-200 w-32 ml-2'></span>
                </section>

                <button className='px-5 py-2 border-2 rounded-lg bg-red-500 text-white border-red-500  mt-5'>Google+</button>
                <button className='px-5 py-2 border-2 rounded-lg bg-blue-500 text-white border-blue-500 mt-4'>Facebook</button>
            </section>
        </div>
    )
}
