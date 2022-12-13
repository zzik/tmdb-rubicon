import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { environment } from '../components/utils'
import useDetails from '../components/hooks/useDetails'
import useVideo from '../components/hooks/useVideo'
import { SearchContext, TypeContext } from '../components/context'

export const Details = () => {

    const prms = useParams()
    const deets = useDetails(prms)

    if (deets) {
        return <div>
            <Link to={'/'} className='back-button'>BACK</Link>
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