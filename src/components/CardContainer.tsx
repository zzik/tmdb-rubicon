import React, { useContext } from 'react'
import { TypeContext } from './context/TypeContext'
import { CardItem } from './CardItem'

<<<<<<< HEAD

interface Props {
    data: {
        movies: Array<object>,
        series: Array<object>
    },

=======
interface Item {
    id: number,
    title?: string,
    name?:string,
    poster_path: string,
    backdrop_path: string,
>>>>>>> 976146daed03388b2e0de120dcec971fd42f525e
}

export const CardContainer:React.FC<Props> = ({data}) => {

<<<<<<< HEAD
    return (
        <>
            {}
        </>
    )
=======
    const context = useContext(TypeContext)

    let movies = data.movies.map((item: Item) => {
        return <CardItem 
        backdrop_path={item.backdrop_path} 
        id={item.id}
        poster_path={item.poster_path}
        title={item.title}
        key={item.id}
        />
    })
    let series = data.series.map((item: Item) => {
        return <CardItem 
        backdrop_path={item.backdrop_path} 
        id={item.id}
        poster_path={item.poster_path}
        name={item.name}
        key={item.id}
        />
    })
        return (
            <>
                {context?.is==='Movies' ? movies : series}
            </>
        )
>>>>>>> 976146daed03388b2e0de120dcec971fd42f525e
}