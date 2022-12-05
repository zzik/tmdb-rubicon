import React, {useContext} from 'react'
import { TypeContext } from '../App'
import { apiKey, url } from './hooks/Fetch'

interface Item {
    id: number,
    title?: string,
    name?:string,
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
    genre_ids: number[],
    overview?: string
}


export const CardItem: React.FC<Item> = ({ id, backdrop_path, genre_ids, poster_path, title, vote_average, overview, name }) => {
    const context = useContext(TypeContext)
    let contentType = context?.is==='Movies' ? 'movie/' : 'tv/'
    return (
        <a href={url+contentType+id+apiKey}>
            <h1>{title} {name}</h1>
            <h1>{vote_average}</h1>
            <p>{overview}</p>
        </a>
    )
}