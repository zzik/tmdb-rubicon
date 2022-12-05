import React, {useContext} from 'react'
import { SearchContext } from "../App"


interface Props {
    searchPhrase: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: React.FC<Props> = ({searchPhrase}) => {

    // todo not sure how to treat "e" parameter on line 12, htmlinput does not seem to fit the interface
        const validate = (e: any) => { 
            setTimeout(() => {
                if (e.target.value.length > 2) {
                    searchPhrase(e)
                }
            }, 1000);
        }

        return (
            <>
                <input 
                type='text'
                name='search'
                id='search'
                onChange={validate}
                />
            </>
        )
}