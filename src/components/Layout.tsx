import React from 'react'
import { Controls } from './Controls'
import { Display } from './Display'

export const Layout: React.FC = () => {
    return (
        <>
            <Controls />
            <Display />
        </>
    )
}