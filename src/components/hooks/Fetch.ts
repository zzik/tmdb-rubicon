import { useState } from "react";
import axios from 'axios'

interface Props {
    contentType: string,
    contentId?: number,
}

export const url = 'https://api.themoviedb.org/3/'
export const apiKey = '?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28'

export const getTopRated = async ({}) => {
    let moviePath = url+'movie/top_rated'+apiKey
    let seriePath = url+'tv/top_rated'+apiKey
    
    let requestMovies = await axios.get(moviePath)
    let requestSeries = await axios.get(seriePath)

    let data = {
        movies: (requestMovies.data).results.slice(0, 10),
        series: (requestSeries.data).results.slice(0, 10)
    }

    return data
}