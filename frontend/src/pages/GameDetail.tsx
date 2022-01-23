import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '../Components/Spinner/Spinner';


export const GameDetail: FC = () => {
    
    const [gameDetail, setGameDetail] = useState<any[]>([])
    const [screenshotIndex, setScreenshotIndex] = useState<number>(0);
    const [description, setDescription] = useState<boolean>(false)

    const location = useLocation()
    const id = location.state;

    useEffect(() => {

       async function fetch() {

        
        await axios.get(`http://localhost:5000/game/games/search/${id}`)
        .then(res => {
            console.log(res);

            const details = res.data
            setGameDetail(gameDetail => [...gameDetail, details])
            
        })
        .catch(err => {
            console.log(err);
        }) 
       }

        fetch()
        window.scrollTo(0, 0);

    }, [id])

    const changeMainImage = (index:number) => {
        setScreenshotIndex(index);
    }

  
    return (
        <div className='bg-[#1f2a48] w-full '>
            {gameDetail.length > 0 ? gameDetail.map(game => {

                return (

                    <div className=' max-w-4xl grid grid-cols-2 m-auto py-20 gap-10' key={game.id}>

                        <aside>
                            <img src={game.screenshots[screenshotIndex].image} alt='game'  className='w-[600px] h-[250px] object-cover' />

                            <section className='grid grid-cols-3 mt-4 gap-5'>
                            
                            <img src={game.screenshots[0].image} alt='game' onClick={() => changeMainImage(0) } className={screenshotIndex === 0 ? 'border-2 border-[#0079fe] cursor-pointer object-cover' : 'cursor-pointer object-cover'} />
                            <img src={game.screenshots[1].image} alt='game' onClick={() => changeMainImage(1) } className={screenshotIndex === 1 ? 'border-2 border-[#0079fe] cursor-pointer object-cover' : 'cursor-pointer object-cover'}/>
                            <img src={game.screenshots[2].image} alt='game' onClick={() => changeMainImage(2) } className={screenshotIndex === 2 ? 'border-2 border-[#0079fe] cursor-pointer object-cover' : 'cursor-pointer object-cover'}/>
                            
                            </section>
                        </aside>

                        <aside>
                            <h1 className=' text-4xl text-white px-5'>{game.title}</h1>
                            <button className='mx-5 bg-blue-500 px-3 py-1  text-white rounded-md mt-10'><a href={game.game_url} className=' no-underline' >Download</a></button>

                            <section className='px-5 my-10 flex justify-between max-w-[350px]'>

                                <aside className='text-gray-500'>
                                    <p>Release Date : </p>
                                    <p>Developer : </p>
                                    <p>Publisher : </p>
                                    <p>Genre : </p>
                                    <p>Platform</p>
                                </aside>

                                <aside className='text-blue-500'>
                                    <p>{game.release_date.split("-").reverse().join("-")}</p>
                                    <p>{game.developer}</p>
                                    <p>{game.publisher}</p>
                                    <p>{game.genre}</p>
                                    <p>{game.platform}</p> 
                                </aside>
                                
                            </section>

                            <h1 className='px-5 text-white'>Game Description : </h1>

                            <p className=' text-gray-500 px-5 mt-5'>{description ? game.description : game.description.slice(0, 400)}... <span onClick={() => setDescription(!description)} className='text-blue-500 cursor-pointer'>see more</span> </p>

                            {game.minimum_system_requirements ?  (

                            <div className='mt-10 px-5 text-white'>
                                <h1>Minimum System Requirement : </h1>

                                <section className=' mt-5 flex justify-between'>

                                <aside className='text-gray-500'>
                                    <p>Graphics : </p>
                                    <p>Memory : </p>
                                    <p>OS : </p>
                                    <p>Processor : </p>
                                    <p>Storage : </p>
                                </aside>

                                <aside className='text-blue-500'>
                                    <p>{game.minimum_system_requirements.graphics}</p>
                                    <p>{game.minimum_system_requirements.memory}</p>
                                    <p>{game.minimum_system_requirements.os}</p>
                                    <p>{game.minimum_system_requirements.processor}</p>
                                    <p>{game.minimum_system_requirements.storage}</p>
                                </aside>
                                
                            </section>
                            </div>

                            ) : null}
                        </aside>
                        
                    </div>
                    
                )
            }) : <Spinner />}
        </div>
    )
};  


