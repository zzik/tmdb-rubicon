import React from 'react'
import { SearchBar } from './SearchBar'
import { TypeControl } from './TypeControl'

export const Controls: React.FC = () => {
        return (
            <div className='controls'>
                <TypeControl />
                <SearchBar />
            </div>
        )
}