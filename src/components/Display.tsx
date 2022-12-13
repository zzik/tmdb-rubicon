import React, { useContext, useEffect, useState } from 'react'
import { CardItem } from './CardItem'

import { SearchContext, TypeContext, SearchStatusContext } from './context'

import { fetchCollection, fetchTopRated } from './utils/fetch'

export const Display: React.FC = () => {
    const { contentType } = useContext(TypeContext), { searchStatus } = useContext(SearchStatusContext), { searchPhrase } = useContext(SearchContext)
    const [content, setContent] = useState<any[]>([])

    useEffect(() => {
        searchStatus ?
            fetchCollection({ contentType, query: searchPhrase }).then(el => {
                setContent(el)
            }) :
            fetchTopRated({ contentType }).then(el => setContent(el))
    }, [contentType, searchStatus, searchPhrase])

    const items = content.map(item =>
        <CardItem
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.title}
            overview={item.overview}
        />)

    return (
        <div className='display'>
            {items}
        </div>
    )
}