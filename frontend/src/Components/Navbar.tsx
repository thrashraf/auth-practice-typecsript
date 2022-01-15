import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import UserContext from '../UserContext'



export const Navbar = () => {

    const location = useLocation() 
    console.log(location.pathname);

    const user: any = useContext(UserContext)

    console.log(user);

    return (
        <div className={'h-14 bg-blue-400 text-white items-center justify-around'} style={location.pathname === '/login' ? {display: 'none'} : {display: 'flex'}}>
            <span>thrashraf</span>

            <ul className='flex items-center'>
                <li className=' mr-8 cursor-pointer w-[32px] '><img src={user.imageUrl} className=' rounded-[50%] object-cover' alt='profile' /></li>
                <li className=' font-medium mr-8 cursor-pointer'>{user.username}</li>
                <li className=' font-medium mr-8 cursor-pointer'>Logout</li>
            </ul>
        </div>
    )
}
