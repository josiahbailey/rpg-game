import React, { useState, useEffect } from 'react'
import Block from './Block'


const test = [
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null },
    { id: null, items: null, entity: null, background: null }
]

const Grid = () => {
    const createBlock = (id = 0, position = 0, items = null, entity = null, background = null) => {
        return {
            id: id,
            position: position,
            items: items,
            entity: entity,
            background: background
        }
    }

    const createGrid = (w, h) => {
        const newGrid = {}
        // const initialLocation = [(h / 2 * w) + (w / 2), h / 2]
        const initialLocation = (h / 2 * w) + (w / 2)

        for (let i = 0; i < h; i++) {
            // newGrid[i] = new Array(w).fill(createBlock())
            newGrid[i] = new Array(w)
            for (let x = 0; x < w; x++) {
                // console.log(x)
                newGrid[i][x] = createBlock((i * 100) + x, x)

                if (newGrid[i][x].id === initialLocation) {
                    newGrid[i][x].entity = "player"
                }
            }
        }

        // console.log(newGrid)
        return newGrid
    }

    const width = 100
    const height = 100
    const grid = createGrid(width, height)
    const [display, setDisplay] = useState([])
    const [playerPointer, setPointer] = useState([width / 2, height / 2])
    const [player, setPlayer] = useState({
        name: "player",
        position: null,
    })

    const updateGrid = () => {
        const startHeight = playerPointer[1] + 4
        const endHeight = playerPointer[1] - 5
        const startWidth = playerPointer[0] - 4
        const endWidth = playerPointer[0] + 5
        let updatedDisplay = []

        for (let i = startHeight; i > endHeight; i--) {
            const row = grid[i].slice(startWidth, endWidth)
            updatedDisplay = updatedDisplay.concat(row)
        }

        setDisplay(updatedDisplay)
        console.log(display)
    }

    useEffect(() => {
        updateGrid()
    }, [])


    return (
        <div>
            <div className='Grid'>
                {display.map(block => (
                    <Block key={block.id} block={block} />
                ))}
            </div>

            <div className='Menu'>
                <button>Up</button>
                <div>
                    <button>Left</button>
                    <button>Right</button>
                </div>
                <button>Down</button>
            </div>
        </div>
    )
}

export default Grid