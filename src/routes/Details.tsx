import { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchImageLinks } from '../components/utils/fetch'
import useDetails from '../components/hooks/useDetails'
import useVideo from '../components/hooks/useVideo'
import { TypeContext } from '../components/context'

export const Details = () => {

    const typeContext = useContext(TypeContext)

    const prms = useParams()
    const deets = useDetails({contype:prms.contype, id:prms.id})
    const trailer = useVideo(typeContext.contentType, prms.id)

    const [imageLink, setImageLink] = useState<string | null>(null)

    const handleImage = (payload: string) => {
        payload.includes('undefined') ? setImageLink(null) : setImageLink(payload.replace('w780/', 'original'))
    }

    useEffect(() => {
        fetchImageLinks({ contentType:prms.contype, id: prms.id }).then(res => handleImage(res))
    }, [])
    
    if (deets) {

        const overviewText = deets.overview.length ? <p>Movie Overview:<br/>{`${deets.overview}`}</p> : <p><strong>Description not available.</strong></p>

        let imageCheck = imageLink ? <img src={imageLink} /> : <h1>Visual content not available</h1>
        let trailerCheck = trailer ? <iframe src={trailer.link} title={trailer.name} ></iframe> : imageCheck

        return <div className='card-details'>
            <Link to={'/'} className='back-button'>&lt; Back</Link>
            <div className='visual-content'>
                {trailerCheck ? trailerCheck : imageCheck}
            </div>

            <h1>{deets.name ? deets.name : deets.title}</h1>

            {overviewText}
        </div>
    } else {
        return <div>Loading...</div>
    }

}