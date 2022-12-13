import React, { useContext } from 'react'
import { TypeContext } from './context'

export const TypeControl: React.FC = () => {

    const {contentType, setContentType} = useContext(TypeContext)
    
    const handleType = (type:string) => setContentType(type)

    return (
    <div className='type-control'>
        <button 
        onClick={()=>handleType('movie')}
        className={contentType === 'movie' ? 
        'active' : 'inactive' } >
            Movies</button>
        <button 
        onClick={()=>handleType('tv')}
        className={contentType === 'tv' ? 'active' : 'inactive' } >
            TV Shows</button>
    </div>
    )
}