import React, {useContext} from 'react'
import { TypeContext } from './context/TypeContext'
import {test} from './utils/index'

interface Props {
    key: string,
    id: number,
    title?: string,
    name?:string,
    poster_path: string,
    backdrop_path: string,
}

export const CardItem: React.FC<Props> = ({id, title, name, backdrop_path, poster_path}) => {

    const type = useContext(TypeContext).contentType
    const link = test.url + type + `/${id}` + test.apiKey

    return <a href={link}>
        <h1>{title ? title: name}</h1>
        <p>{link}</p>
    </a>
}