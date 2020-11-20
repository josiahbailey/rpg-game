import React from 'react'
import Player from './Player'
import Monster from './Monster'

const Field = () => {
    const createBlock = () => {
        return {
            items: null,
            entity: null
        }
    }
    const createGrid = (w, h) => {
        const newGrid = {}
        for (let i = 0; i < h; i++) {
            newGrid[i] = new Array(w).fill(createBlock())
        }
        return newGrid
    }
    console.log(createGrid(10, 10))
    return (
        <div className='Field'>

        </div>
    )
}

export default Field