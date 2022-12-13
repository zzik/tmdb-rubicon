import { environment } from '../index'
import axios from 'axios'
let { url } = environment, { apiKey } = environment, { searchQuery } = environment

// interface Props {
//     type: string,
// }

// interface VisualProps {
//     contentType: string,
//     id: number | undefined,
// }

export const fetchVideos = async ({ contentType, id }: any) => {

    let videos = url + `${contentType}` + `/${id}` + `/videos` + apiKey
    let request = await axios.get(videos)

    let data = request.data.results.find((el: any) => el.type === 'Trailer')

    let link = 'https://youtube.com/embed/' + data.key
    let name = data.name

    return { link, name }
}

