import React from 'react'
import { Controls } from './Controls'
import { Display } from './Display'
import { SearchBar } from './SearchBar'
import { TypeControl } from './TypeControl'

export const Layout: React.FC = () => {
    return (
        <>
            <Controls />
            <Display />
        </>
    )
}