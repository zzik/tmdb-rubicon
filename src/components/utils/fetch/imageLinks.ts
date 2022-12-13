import { environment } from '../index'
import axios from 'axios'
let { url } = environment, { apiKey } = environment, { imageUrl } = environment

interface VisualProps {
    contentType: string,
    id: number
}

export const fetchImageLinks = async ({ contentType, id}: VisualProps) => {
    
    let link = url + `${contentType}` + `/${id}` + '/images' + apiKey
    let {data} = await axios.get(link)

    let path = `${imageUrl}w780/`
    path += data.backdrops.length ? data.backdrops[0].file_path : data.posters[0]?.file_path

    return path
}