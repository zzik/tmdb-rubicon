import React, { useContext } from 'react'
import { SearchContext, SearchStatusContext } from './context'

export const SearchBar: React.FC = () => {

    const { searchPhrase, setSearchPhrase } = useContext(SearchContext)
    const { searchStatus, setSearchStatus } = useContext(SearchStatusContext)

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

    const corners = searchStatus ? 'active-search' : 'inactive-search'
    return (
    <div className='search-bar'>
        <input className={corners}
        type='text' name='search' id='search' placeholder='Search..' defaultValue={searchPhrase}
        onChange={(e) => {
            handleSearch(e.target.value)
            }} />
    </div>
    )

}