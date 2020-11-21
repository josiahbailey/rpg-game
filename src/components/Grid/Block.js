import React from 'react'
import Player from './Player'
import Entity from './Entity'

const Block = ({ block }) => {
    const { id, position, entity, items, background } = block
    return (
        <div className='Block'>
            <p>{id}</p>
            <p>{position}</p>
            <p>{entity}</p>
        </div>
    )
}

export default Block