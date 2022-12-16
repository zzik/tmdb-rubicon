import React, { useEffect, useState } from "react"
import { fetchItem } from "../utils/fetch"

interface Props {
    title?: string,
    name?: string,
    overview: string,
    id: number,
    backdrop_path: string,
    poster_path: string
}

interface Params {
    contype:string | undefined,
    id: string | undefined
}

const useDetails = (params: Params) => {

    const [data, setData] = useState<Props | null>(null)

    const handleData = (props:Props) => {
        setData(props)
    }

    useEffect(() => {
        fetchItem({contentType: params.contype, id: params.id}).then((el) => handleData(el.data))
    }, [])

    return data

}

export default useDetails