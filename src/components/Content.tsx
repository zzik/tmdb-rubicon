import React, { useContext, useEffect, useState } from 'react'
import { TypeContext } from '../App'
import { CardContainer } from './CardContainer'
import {getTopRated} from './hooks/Fetch'

interface Props {
    payload?: string
}

export const Content: React.FC<Props> = ({payload}) => {
    const context = useContext(TypeContext)
    let contentType = context?.is==='Movies' ? 'movie/' : 'tv/'
    
    const [data, setData] = useState({movies:[], series: []})
    
    const handleData = () => {
        let stuff = getTopRated({})
        stuff.then(res => {
            let {movies, series} = res
            
            setData({movies, series})
        })
    }

    useEffect(() => {
      handleData()
    }, [contentType])

        return (
            <CardContainer data={data} />
        )
}