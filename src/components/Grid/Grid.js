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
    const [player, setPlayer] = useState({
        name: "player",
        position: [0, 0],
    })


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
        const initialLocationId = (h / 2 * w) + (w / 2)
        const initialLocation = [w / 2, h / 2]

        for (let i = 0; i < h; i++) {
            newGrid[i] = new Array(w)
            for (let x = 0; x < w; x++) {
                newGrid[i][x] = createBlock((i * 100) + x, x)

                // if (newGrid[i][x].id === initialLocationId) {
                //     newGrid[i][x].entity = player
                // }
            }
        }

        return [newGrid, initialLocation]
    }

    const width = 100
    const height = 100
    const [grid, initialLocation] = createGrid(width, height)
    const [display, setDisplay] = useState([])

    const initializeDisplay = () => {
        // const startHeight = player.position[1] + 4
        // const endHeight = player.position[1] - 5
        // const startWidth = player.position[0] - 4
        // const endWidth = player.position[0] + 5
        const startHeight = initialLocation[1] + 4
        const endHeight = initialLocation[1] - 5
        const startWidth = initialLocation[0] - 4
        const endWidth = initialLocation[0] + 5
        let updatedDisplay = []

        for (let i = startHeight; i > endHeight; i--) {
            const row = grid[i].slice(startWidth, endWidth)
            updatedDisplay = updatedDisplay.concat(row)
        }

        setDisplay(updatedDisplay)
        console.log(grid)
        setPlayer({
            ...player,
            position: initialLocation
        })
    }

    const updateGrid = (direction) => {
        const startingPositions = {
            "n": {
                startHeight: player.position[1] + 5,
                endHeight: player.position[1] - 4,
                startWidth: player.position[0] - 4,
                endWidth: player.position[0] + 5
            },
            "s": {
                startHeight: player.position[1] + 3,
                endHeight: player.position[1] - 6,
                startWidth: player.position[0] - 4,
                endWidth: player.position[0] + 5
            },
            "e": {
                startHeight: player.position[1] + 4,
                endHeight: player.position[1] - 5,
                startWidth: player.position[0] - 3,
                endWidth: player.position[0] + 6
            },
            "w": {
                startHeight: player.position[1] + 4,
                endHeight: player.position[1] - 5,
                startWidth: player.position[0] - 5,
                endWidth: player.position[0] + 4
            },
        }
        let updatedDisplay = []
        let position = startingPositions[direction]

        for (let i = position.startHeight; i > position.endHeight; i--) {
            const row = grid[i].slice(position.startWidth, position.endWidth)
            updatedDisplay = updatedDisplay.concat(row)
        }

        setDisplay(updatedDisplay)
        console.log(display)
    }

    useEffect(() => {
        initializeDisplay()
    }, [])

    const changePlayerPosition = (direction) => {
        const updatedPositions = {
            "n": [player.position[0], player.position[1] + 1],
            "s": [player.position[0], player.position[1] - 1],
            "e": [player.position[0] + 1, player.position[1]],
            "w": [player.position[0] - 1, player.position[1]]
        }

        grid[player.position[0]][player.position[1]].entity = null
        grid[updatedPositions[direction][1]][updatedPositions[direction][0]].entity = player

        setPlayer({
            ...player,
            position: updatedPositions[direction]
        })

        updateGrid(direction)
    }


    return (
        <div>
            <div className='Grid'>
                {display.map(block => (
                    <Block key={block.id} block={block} />
                ))}
            </div>

            <div className='Menu'>
                <button onClick={() => changePlayerPosition("n")}>Up</button>
                <div>
                    <button onClick={() => changePlayerPosition("w")}>Left</button>
                    <button onClick={() => changePlayerPosition("e")}>Right</button>
                </div>
                <button onClick={() => changePlayerPosition("s")}>Down</button>
            </div>
        </div>
    )
}

export default Grid