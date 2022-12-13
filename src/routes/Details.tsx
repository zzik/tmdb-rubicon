import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DetailsCard } from '../components/DetailsCard'
import { environment } from '../components/utils'
import useDetails from '../components/hooks/useDetails'
import useVideo from '../components/hooks/useVideo'



export const Details = () => {

    let base = environment.imageUrl
    const navigate = useNavigate()
    const prms = useParams()
    const deets = useDetails(prms)
    let trailer = useVideo(prms.contype, prms.id)

    if (deets) {
        // let link = deets.backdrop_path ? deets.backdrop_path : deets.poster_path
        // console.log(link)

        return <div>
            <button onClick={() => navigate(-1)}>YES</button>
            <div className='visual-content'>
                {/* {trailer.link ? <iframe src={trailer.link} title={trailer.name} ></iframe> : <img src={link ? base + 'w1280' + link : 'null'} />} */}

            </div>

            <h1>{deets.name ? deets.name : deets.title}</h1>
            <p>{deets.overview}</p>
        </div>
    } else {
        return <div>a</div>
    }

}