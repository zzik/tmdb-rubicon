import { environment } from '../index'
import axios from 'axios'
let { url, apiKey } = environment

interface ItemProps {
    contentType: string | undefined,
    id: string | undefined,
}

export const fetchItem = async ({ contentType, id }: ItemProps) => {
    let details = url + `${contentType}` + `/${id}` + apiKey
    let request = await axios.get(details)

    return request
}
