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

    return (
        <div className='w-full flex justify-items-center items-center'>
            {/* {* this is to load spinner} */}
            { console.log(data)}
            { data.length > 0 ? <Card data={data} /> : <Spinner />  }
           
        </div>
    )
}

export default Home
