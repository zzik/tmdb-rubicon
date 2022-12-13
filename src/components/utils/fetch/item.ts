import { environment } from '../index'
import axios from 'axios'
let { url } = environment, { apiKey } = environment, { searchQuery } = environment

interface ItemProps {
    contentType: string,
    id: number,
}

export const fetchItem = async ({ contentType, id }: ItemProps) => {
    let details = url + `${contentType}` + `/${id}` + apiKey
    let request = await axios.get(details)

    return request
}

/*
secure_base_url: "https://image.tmdb.org/t/p/"
backdrop_sizes: ['w300', 'w780', 'w1280', 'original']
poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
*/