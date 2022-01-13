import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../Components/Card'
import { Spinner } from '../Components/Spinner/Spinner'

const Home = () => {

    const [data, setData] = useState([])
    const [numberOfCard, setCard] = useState<number>(9);
    

    useEffect(() => {
        axios.get('https://www.freetogame.com/api/games') //https://www.freetogame.com/api/games
        .then(res => {
            // console.log(res.data)
            setData(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    const increaseCardValue = (): void => {

        setCard((prevValueCard): number => {
            return prevValueCard + 9
        })
    }

    return (
        <div className='w-full flex flex-col justify-items-center items-center bg-[#141c2f] text-white'>
            {/* {* this is to load spinner} */}
            { console.log(data)}
            { data.length > 0 ? <Card data={data} numberOfCard={numberOfCard} /> : <Spinner />  }

            <button className=' text-blue-400 border-2 border-blue-400 rounded-xl px-10 py-3 my-10  hover:bg-blue-400 hover:text-white' onClick={increaseCardValue}>Add More</button>
           
        </div>
    )
}

export default Home