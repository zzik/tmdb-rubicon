import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TypeContext } from './context'
import { fetchImageLinks } from './utils/fetch'
import { environment } from './utils/index'

interface Props {
    key: string,
    id: number,
    title?: string,
    name?: string,
    overview: string,
}

export const CardItem: React.FC<Props> = ({ id, title, name, overview }) => {

    const { contentType } = useContext(TypeContext)
    const [imageLink, setImageLink] = useState('')

    const handleImage = (payload: string) => {
        payload.includes('undefined') ? setImageLink('undefined') : setImageLink(payload)
    }

    useEffect(() => {
        fetchImageLinks({ contentType, id }).then(res => handleImage(res))
    }, [])

    const overviewText = overview.length ? <p>{`${overview}`}</p> : <h2>Description not available.</h2>

    return (
        // <a href={environment.url + contentType + "/" + id + environment.apiKey} className='card-item'>
        <Link to={ contentType + "/" + id + environment.apiKey} className='card-item'>
            <div className='card-item-image'>
                {imageLink.includes('undefined') ?
                    <div className='card-item-image-lost'>
                        {overviewText}
                        <h1>Image not found</h1>
                    </div> :
                    <div className='card-item-image-found'>
                        {overviewText}
                        <img src={imageLink} />
                    </div>}
            </div>
            <div className='card-item-title'>
                <h1>{title ? title : name}</h1>
            </div>
        </Link>
    )
}