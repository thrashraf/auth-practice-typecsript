import React from 'react'

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
}

export const Card = (props: Props) => {

    


    return (
        <div className=' grid grid-cols-3 m-auto gap-7 max-w-4xl mt-10'>
            {props.data.slice().map(games => {
                console.log(games);
                return (
                    <div key={games.id}>
                        <img src={games.thumbnail} alt={games.title}/>
                        <h1>{games.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}
