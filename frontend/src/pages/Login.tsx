import React from 'react'
import loginImage from '../assets/login.png'


interface Props {
    
}

export const Login = (props: Props) => {

    const googleAuth = (): void => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    return (
        <div className=' w-full grid grid-cols-2 overflow-hidden h-screen bg-[#1f2a48] text-white'>
            <section className='h-screen bg-gradient-to-b from-[#00d4ff] via-[#090979] to-[#020024]'>
                <img src={loginImage} alt="login" className='h-screen object-cover'/>
            </section>
            

            <section className='flex flex-col max-w-md mx-[20%]'>
                <h1 className=' text-lg text-gray-400 font-normal mt-20'>Welcome Back.</h1>
                <p className=' text-3xl font-semibold'>Log In to Continue.</p>
                
                <input className='px-10 py-3 rounded-lg border-2 mt-10 bg-[#141c2f] border-[#141c2f] focus:outline-none' placeholder='enter your email' type="email" />
                <input className='px-10 py-3 rounded-lg border-2 my-5 bg-[#141c2f] border-[#141c2f] ' placeholder='password' type="password" />

                <button className='px-5 py-2 border-2 rounded-lg bg-blue-400 text-white border-blue-400 w-52 mx-auto my-2'>Login</button>

                <section className='flex justify-center items-center mt-5'>
                    <span className=' border-t-[1px] border-gray-300 w-32 mr-2'></span>
                    <p className='text-gray-300'>or</p>
                    <span className=' border-t-[1px] border-gray-200 w-32 ml-2'></span>
                </section>

                <button className='px-5 py-2 border-2 rounded-lg bg-red-500 text-white border-red-500 w-52 mx-auto my-2' onClick={googleAuth}>Google+</button>
                <button className='px-5 py-2 border-2 rounded-lg bg-blue-500 text-white border-blue-500 w-52 mx-auto my-2'>Facebook</button>
            </section>
        </div>
    )
}
