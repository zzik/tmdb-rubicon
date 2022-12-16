import { environment } from '../index'
import axios from 'axios'


interface CollectionProps {
    contentType: string,
}

export const fetchTopRated = async ({ contentType }: CollectionProps) => {
    let { url } = environment, { apiKey } = environment

    let link = url + contentType + '/top_rated' + apiKey

    let first = await axios.get(link)
    let { data } = first
    let final = data.results.slice(0, 10)

    return final
}
