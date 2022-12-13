import React, { useContext } from 'react'
import { SearchContext, SearchStatusContext } from './context'

export const SearchBar: React.FC = () => {

    const { setSearchPhrase } = useContext(SearchContext)
    const { setSearchStatus } = useContext(SearchStatusContext)

    const handleSearch = (phrase: string) => {
        setTimeout(() => {
            if (phrase.length > 2) {
                setSearchPhrase(phrase)
                setSearchStatus(true)
            } else {
                setSearchPhrase('')
                setSearchStatus(false)
            }
        }, 1000)
    }

    return (
    <div className='search-bar'>
        <input
        type='text' name='search' id='search' placeholder='Search..'
        onChange={(e) => handleSearch(e.target.value)}/>
    </div>
    )

}