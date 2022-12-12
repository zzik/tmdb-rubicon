import React, {useContext} from 'react'
import { TypeContext } from '../App'
import { apiKey, url } from './hooks/Fetch'

interface Item {
    id: number,
    title?: string,
    name?:string,
    poster_path: string,
    backdrop_path: string,
}


export const CardItem: React.FC<Item> = ({ id, backdrop_path, poster_path, title, name }) => {
    const context = useContext(TypeContext)
    let contentType = context?.is==='Movies' ? 'movie/' : 'tv/'
    return (
        <a href={url+contentType+id+apiKey}>
            <h1>{title} {name}</h1>
        </a>
    )
}