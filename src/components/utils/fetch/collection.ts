import { environment } from '../index'
import axios from 'axios'


interface CollectionProps {
    contentType: string,
    query?: string
}

export const fetchCollection = async ({ contentType, query }: CollectionProps) => {
    let { url } = environment, { apiKey } = environment, { searchQuery } = environment

    let link = query ?
        url + 'search/' + contentType + apiKey + `${searchQuery + query}` :
        url + contentType + '/top_rated' + apiKey

    let first = await axios.get(link)
    let { data } = first

    return data.results
}

