import React, { useContext } from 'react'
import { TypeContext } from '../App'
import { CardItem } from './CardItem'

interface Item {
    id: number,
    title: string,
    name:string,
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
    genre_ids: number[],
    overview?: string
}

// todo improve type checking on line 17, not sure why I had to infer any
export const CardContainer: React.FC<any> = ({data}) => {

    const context = useContext(TypeContext)

    let movies = data.movies.map((item: Item) => {
        return <CardItem 
        backdrop_path={item.backdrop_path} 
        genre_ids={item.genre_ids}
        id={item.id}
        poster_path={item.poster_path}
        title={item.title}
        vote_average={item.vote_average}
        key={item.id}
        overview={item.overview}
        />
    })
    let series = data.series.map((item: Item) => {
        return <CardItem 
        backdrop_path={item.backdrop_path} 
        genre_ids={item.genre_ids}
        id={item.id}
        poster_path={item.poster_path}
        name={item.name}
        vote_average={item.vote_average}
        key={item.id}
        overview={item.overview}
        />
    })
        return (
            <>
                {context?.is==='Movies' ? movies : series}
            </>
        )
}