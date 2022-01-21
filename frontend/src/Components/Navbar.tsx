import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import UserContext from '../UserContext'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


export const Navbar = () => {

    const location = useLocation() 
    console.log(location.pathname);

    const user: any = useContext(UserContext)
    

    return (
        <div className={'h-14 bg-[#0079fe] text-white '} style={location.pathname === '/login' || location.pathname === '/register' ? {display: 'none'} : {display: 'block'}}>
            <div className=' max-w-4xl flex justify-between items-center h-14 m-auto'>
                <img src={logo} alt='logo' className='w-20 h-20 p-2 object-contain' />

                <ul className='flex items-center'>
                    <li className=' mr-8 cursor-pointer w-[32px] '><img src={user.length > 0 ? user[0].imageUrl : null} className=' rounded-[50%] object-cover' alt='profile' style={user.length > 0 ? {display: 'block'} : {display: 'none'}}/></li>
                    <li className=' font-medium mr-8 cursor-pointer'>{user.length > 0 ? user[0].username : null}</li>
                    <li className=' font-medium mr-8 cursor-pointer'>{user.length > 0 ? 'Logout' : <Link to={'/login'}>Login</Link>}</li>
                </ul>
            </div>
        </div>
    )
}
