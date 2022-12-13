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

const useDetails = (prms: any) => {

    const [data, setData] = useState<Props>()

    const handleData = (some:Props) => {
        setData(some)
    }

    useEffect(() => {
        fetchItem({contentType: prms.contype, id: prms.id}).then(el => handleData(el.data))
    }, [])

    return data

}

export default useDetails