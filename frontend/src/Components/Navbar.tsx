import React from 'react'

export const Navbar = () => {
    return (
        <div className={'flex h-14 bg-blue-400 text-white items-center justify-around'}>
            <span>thrashraf</span>

            <ul className='flex items-center'>
                <li className=' mr-8 cursor-pointer w-[32px] '><img src='https://i.pinimg.com/736x/89/41/40/8941408fe5575d61409cd1af209445e3.jpg' className=' rounded-[50%] object-cover' alt='profile' /></li>
                <li className=' font-medium mr-8 cursor-pointer'>John Doe</li>
                <li className=' font-medium mr-8 cursor-pointer'>Logout</li>
            </ul>
        </div>
    )
}
