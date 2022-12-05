import React, {useContext} from 'react'
import { TypeContext } from "../App"


interface Props {
    toggleContentType: () => void
}

export const TypeControl: React.FC<Props> = ({toggleContentType}) => {
    const context = useContext(TypeContext)
        return (
            <>
                <button onClick={toggleContentType} disabled={context?.is==='Movies' ? true : false} >Movies</button>
                <button onClick={toggleContentType} disabled={context?.is==='TV Series' ? true : false} >TV Series</button>
            </>
        )
}