import { environment } from '../index'
import axios from 'axios'
let { url } = environment, { apiKey } = environment, { searchQuery } = environment

interface Props {
    type: string,
}

interface VisualProps {
    contentType: string,
    id: string | undefined,
}

export const fetchVideos = async ({ contentType, id }: VisualProps) => {

    let videos = url + `${contentType}` + `/${id}` + `/videos` + apiKey
    let request = await axios.get(videos)

    let data = request.data.results.find((el: Props) => el.type === 'Trailer' || el.type)
    let link, name
    
    if (data) {
        link = 'https://youtube.com/embed/' + data.key
        name= data.name
        return { link, name }
    }
    return null
}

