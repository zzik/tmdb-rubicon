import React, { useEffect, useState } from "react"
import { fetchVideos } from "../utils/fetch"

// interface Proppies {
//     contentType: string ,
//     id:number | string | undefined
// }

const useVideo = (contentType:any, id: any) => {

    const [data, setData] = useState<any>()

    const handleData = (some:any) => {
        setData(some)
    }

    useEffect(() => {
        fetchVideos({contentType, id}).then(el => handleData(el))
    }, [])

    return data

}

export default useVideo