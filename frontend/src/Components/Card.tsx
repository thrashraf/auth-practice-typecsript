import React, {useEffect, useState} from 'react'
import browserIcon from '../assets/browser.png'
import windowsIcon from '../assets/windows.png'
import { Link } from 'react-router-dom'

interface data {
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: number
    platform: string
    publisher: string
    release_date: Date
    short_description: string
    thumbnail: string
    title: string
}

interface Props {
    data: data[]
    numberOfCard: any
}

export const Card = (props: Props) => {

    const [yPosition, setYPosition] = useState<number>(0);
    

    // ? addEventListener to scroll save it on local storage
    useEffect(() => {

        const handleScroll = () => {
            
            setYPosition(window.pageYOffset)
            localStorage.setItem('yPosition', yPosition.toString())
        }
      
        window.addEventListener('scroll', handleScroll);

        return () => {
            // ? Remove listener when component unmounts
            window.removeEventListener('scroll', handleScroll);
        };

      }, [yPosition])


    
    //? getValue from localStorage and scrollTo that position
    useEffect(() => {
        const scrollPosition = localStorage.getItem('yPosition');

        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition))
            console.log(scrollPosition);
        }
    }, [])

      

    const card: any = localStorage.getItem('card');
    return (
        
            <div className=' grid grid-cols-3 m-auto gap-7 max-w-4xl mt-10 '>

            
            {props.data.slice(0, card > 9 ? card : props.numberOfCard).map(games => {
                // console.log(games);
                return (
                <Link to={`/game-detail/${games.id}`} state={games.id} >
                    <div key={games.id} className='cursor-pointer bg-[#141c2f] rounded-lg' >
                        <img src={games.thumbnail} alt={games.title} className=' rounded-t-lg'/>

                        <div className='mt-5 px-5 flex justify-between' >
                            <h1>{games.title.length > 20 ? games.title.slice(0, 20) + '...' : games.title}</h1>
                            <span className='bg-[#0079fe] px-2 py-1 rounded-[4px] text-[11px]'>FREE</span>
                        </div>

                        <p className='px-5 text-[12px] mt-3 text-gray-400'>{games.short_description.slice(0, 35) + '...'}</p>
                        
                        <section className='py-5 px-5 flex justify-between'>
                            <img src={games.platform === 'Web Browser' ? browserIcon : windowsIcon} alt='platform' className='w-6 h-6'/>
                            <span className='bg-[#0079fe] px-2 py-1 rounded-[4px] text-[11px]'>{games.genre}</span>
                        </section>
                    </div>
                </Link>
                )
            })}
        </div>
        
    )
}
