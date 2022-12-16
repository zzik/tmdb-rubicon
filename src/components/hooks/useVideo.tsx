import React, { SetStateAction, useEffect, useState } from "react"
import { fetchVideos } from "../utils/fetch"

interface Props {
    link:string | undefined,
    name:string | undefined
}

const useVideo = (contentType:string, id:string | undefined) => {

    const [data, setData] = useState<Props | null>(null)

    const handleData = (props:Props | null) => {
        setData(props)
    }

    useEffect(() => {
        fetchVideos({contentType, id}).then(el => handleData(el))
    }, [])

    return data

}

export default useVideo