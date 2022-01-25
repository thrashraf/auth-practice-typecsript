import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import loginImage from '../assets/login.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
    
}

export const Login = (props: Props) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const googleAuth = (): void => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const githubAuth = (): void => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    const login = () => {
        axios.post('http://localhost:5000/auth/login', {username, password}, {withCredentials: true})
        .then(res => {
            navigate('/')
            window.location.reload();
        })
        .catch(err => toast.error(err.response.data.message))
    }

    return (
        <div className=' w-full block lg:grid grid-cols-2 overflow-hidden h-screen bg-[#1f2a48] text-white'>
            <section className='h-screen bg-gradient-to-b from-[#00d4ff] via-[#090979] to-[#020024] hidden lg:block '>
                <img src={loginImage} alt="login" className='h-screen object-cover'/>
            </section>
            

            <section className='flex flex-col max-w-md lg:mx-[20%] m-auto px-[5%] pt-[100px] lg:pt-0'>
                <h1 className=' text-lg text-gray-400 font-normal mt-20'>Welcome Back.</h1>
                <p className=' text-3xl font-semibold'>Log In to Continue.</p>
                
                <input name="username" className='px-10 py-3 rounded-lg border-2 mt-10 bg-[#141c2f] border-[#141c2f] focus:outline-none' placeholder='enter your email' type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input name="password" className='px-10 py-3 rounded-lg border-2 my-5 bg-[#141c2f] border-[#141c2f] ' placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button className='px-5 py-2 border-2 rounded-lg bg-blue-400 text-white border-blue-400 w-52 mx-auto my-2' onClick={login}>Login</button>

                <section className='flex justify-center items-center mt-5'>
                    <span className=' border-t-[1px] border-gray-300 w-32 mr-2'></span>
                    <p className='text-gray-300'>or</p>
                    <span className=' border-t-[1px] border-gray-200 w-32 ml-2'></span>
                </section>

                <button className='px-5 py-2 border-2 rounded-lg bg-red-500 text-white border-red-500 w-52 mx-auto my-2' onClick={googleAuth}>Google+</button>
                <button className='px-5 py-2 border-2 rounded-lg bg-black text-white border-black w-52 mx-auto my-2' onClick={githubAuth}>Github</button>
            </section>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
