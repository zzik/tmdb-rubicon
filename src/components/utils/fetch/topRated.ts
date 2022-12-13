import { environment } from '../index'
import axios from 'axios'


interface CollectionProps {
    contentType: string,
    query?: string
}

export const fetchTopRated = async ({ contentType, query }: CollectionProps) => {
    let { url } = environment, { apiKey } = environment, { searchQuery } = environment

    let link = query ?
        url + 'search/' + contentType + apiKey + `${searchQuery + query}` :
        url + contentType + '/top_rated' + apiKey

    let first = await axios.get(link)
    let { data } = first
    let final = data.results.slice(0, 10)

    return final
}

