import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import UserContext from '../UserContext'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    const location = useLocation() 
    console.log(location.pathname);

    const user: any = useContext(UserContext)

    
    
    

    return (
        <div className={'h-14 bg-blue-400 text-white items-center justify-around'} style={location.pathname === '/login' || location.pathname === '/register' ? {display: 'none'} : {display: 'flex'}}>
            <span>thrashraf</span>

            <ul className='flex items-center'>
                <li className=' mr-8 cursor-pointer w-[32px] '><img src={user.length > 0 ? user[0].imageUrl : null} className=' rounded-[50%] object-cover' alt='profile' /></li>
                <li className=' font-medium mr-8 cursor-pointer'>{user.length > 0 ? user[0].username : null}</li>
                <li className=' font-medium mr-8 cursor-pointer'>{user.length > 0 ? 'Logout' : <Link to={'/login'}>Login</Link>}</li>
            </ul>
        </div>
    )
}
