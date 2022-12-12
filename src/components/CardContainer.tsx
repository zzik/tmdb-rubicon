import React, { useContext } from 'react'
import { TypeContext } from './context/TypeContext'
import { CardItem } from './CardItem'


interface Props {
    data: {
        movies: Array<object>,
        series: Array<object>
    },

}

export const CardContainer:React.FC<Props> = ({data}) => {

    return (
        <>
            {}
        </>
    )
}