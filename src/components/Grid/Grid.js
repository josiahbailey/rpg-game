import React, { useState, useEffect } from 'react'
import Block from './Block'
import { v4 } from 'uuid'

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
    const createBlock = (id = -1, position = null, items = null, entity = null, background = null) => {
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
        // const initialLocation = [w / 2, h / 2]
        const initialLocation = [94, 94]

        for (let i = 0; i < h; i++) {
            newGrid[i] = new Array(w)
            for (let x = 0; x < w; x++) {
                newGrid[i][x] = createBlock((i * 100) + x, x)
            }
        }
        return [newGrid, initialLocation]
    }

    const width = 100
    const height = 100
    const displaySize = 9
    const [grid, initialLocation] = createGrid(width, height)
    const [display, setDisplay] = useState([])
    const [player, setPlayer] = useState({
        name: "player",
        position: initialLocation,
    })

    const initializeDisplay = () => {
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
    }

    const getDisplayPosition = (direction) => {
        const [x, y] = player.position

        const normalPositions = {
            "n": {
                startHeight: y + 5,
                endHeight: y - 4,
                startWidth: x - 4,
                endWidth: x + 5
            },
            "s": {
                startHeight: y + 3,
                endHeight: y - 6,
                startWidth: x - 4,
                endWidth: x + 5
            },
            "e": {
                startHeight: y + 4,
                endHeight: y - 5,
                startWidth: x - 3,
                endWidth: x + 6
            },
            "w": {
                startHeight: y + 4,
                endHeight: y - 5,
                startWidth: x - 5,
                endWidth: x + 4
            },
        }

        return normalPositions[direction]


        // return newPosition
    }

    const updateGrid = (direction) => {
        let updatedDisplay = []
        let position = getDisplayPosition(direction)

        for (let i = position.startHeight; i > position.endHeight; i--) {
            // console.log(i)
            let row
            try {
                row = grid[i].slice(position.startWidth, position.endWidth)

                if (position.startWidth < 0) {
                    row = grid[i].slice(0, position.endWidth)
                    for (let x = position.startWidth; x < 0; x++) {
                        row.unshift(createBlock())
                    }
                } else if (position.endWidth >= width) {
                    row = grid[i].slice(position.startWidth, width - 1)
                    for (let x = position.endWidth; x > width - 1; x--) {
                        row.push(createBlock())
                    }
                }
            } catch (err) {
                row = new Array(displaySize).fill(createBlock())
            }

            updatedDisplay = updatedDisplay.concat(row)
        }

        setDisplay(updatedDisplay)
        console.log(display)
    }

    useEffect(() => {
        initializeDisplay()
    }, [])

    const changePlayerPosition = (direction) => {
        const [y, x] = player.position

        const updatedPositions = {
            "n": [player.position[0], player.position[1] + 1],
            "s": [player.position[0], player.position[1] - 1],
            "e": [player.position[0] + 1, player.position[1]],
            "w": [player.position[0] - 1, player.position[1]]
        }

        const newPosition = updatedPositions[direction]

        // grid[player.position[0]][player.position[1]].entity = null
        grid[newPosition[1]][newPosition[0]].entity = player

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
                    <Block key={block.id === -1 ? v4() : block.id} block={block} />
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