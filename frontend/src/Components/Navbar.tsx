import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import logo from '../assets/logo.png';


export const Navbar = () => {

    const location = useLocation() 
    console.log(location.pathname);
    const navigate = useNavigate()

    const user: any = useContext(UserContext)

    if (user) {
        console.log(user);
    }

    const logout = () => {
        window.open('http://localhost:5000/auth/logout', '_self');
    }

    const login = () => {
        console.log('login');
        navigate('/login')
    }

   
    

    return (
        <div className={'h-14 bg-[#0079fe] text-white '} style={location.pathname === '/login' || location.pathname === '/register' ? {display: 'none'} : {display: 'block'}}>
            <div className=' max-w-4xl flex justify-between items-center h-14 m-auto'>
                <img src={logo} alt='logo' className='w-20 h-20 p-2 object-contain' />

                <ul className='flex items-center'>
                    {user.length > 0 ?
                        <aside className='flex items-center'>
                            <li className=' mr-8 cursor-pointer w-[32px] '><img src={ user[0].imageUrl } className=' rounded-[50%] object-cover' alt='profile' /></li>
                            <li className=' font-medium mr-8 cursor-pointer'>{ user[0].username }</li>
                        </aside> 
                    : null}
                    <li className=' font-medium mr-8 cursor-pointer' onClick={user.length > 0 ? logout : login}>{user.length > 0 ? 'Logout'  : 'login'}</li>
                </ul>
            </div>
        </div>
    )
}
