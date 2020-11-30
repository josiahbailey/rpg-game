import React, { useState, useEffect } from 'react'
import Block from './Block'
import { v4 } from 'uuid'

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
        const initialLocationId = (Math.floor(h / 2) * w) + Math.floor(w / 2)
        const initialLocation = [Math.floor(w / 2), Math.floor(h / 2)]

        // Creating an object with keys from 0-height
        // Each key has an array of length width
        for (let i = 0; i < h; i++) {
            newGrid[i] = new Array(w)
            for (let x = 0; x < w; x++) {
                newGrid[i][x] = createBlock((i * 100) + x, x)
            }
        }

        // Returning the newly created grid
        // Returning the center point of the grid
        return [newGrid, initialLocation]
    }

    const width = 100
    const height = 100
    const displaySize = 9
    // const [grid, initialLocation] = createGrid(width, height)

    // Initializing grid
    const [grid, setGrid] = useState(createGrid(width, height)[0])
    const [initialLocation, setInitial] = useState(createGrid(width, height)[1])
    // Initializing display
    const [display, setDisplay] = useState([])
    // Initializing player
    const [player, setPlayer] = useState({
        name: "player",
        position: initialLocation,
    })

    const initializeDisplay = () => {
        // Finding the starting dimensions of the initial display
        const startHeight = initialLocation[1] + 4
        const endHeight = initialLocation[1] - 5
        const startWidth = initialLocation[0] - 4
        const endWidth = initialLocation[0] + 5
        let newDisplay = []

        for (let i = startHeight; i > endHeight; i--) {
            // console.log(i)
            let row
            try {
                row = grid[i].slice(startWidth, endWidth)

                if (startWidth < 0) {
                    row = grid[i].slice(0, endWidth)
                    for (let x = startWidth; x < 0; x++) {
                        row.unshift(createBlock())
                    }
                } else if (endWidth >= width) {
                    row = grid[i].slice(startWidth, width)
                    for (let x = endWidth; x > width; x--) {
                        row.push(createBlock())
                    }
                }
            } catch (err) {
                row = new Array(displaySize).fill(createBlock())
            }

            newDisplay = newDisplay.concat(row)
        }

        //updating the display state
        setDisplay(newDisplay)
        console.log(display)
    }


    // Finds starting coordinates for display when player position changes
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
    }

    // Updates grid based on player movement
    const updateDisplay = (direction) => {
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
                    row = grid[i].slice(position.startWidth, width)
                    for (let x = position.endWidth; x > width; x--) {
                        row.push(createBlock())
                    }
                }
            } catch (err) {
                row = new Array(displaySize).fill(createBlock())
            }

            updatedDisplay = updatedDisplay.concat(row)
        }

        setDisplay(updatedDisplay)
        // console.log(display)
    }

    useEffect(() => {
        initializeDisplay()
    }, [])

    // Updates player position and grid based on movement direction
    const changePlayerPosition = (direction) => {
        const [x, y] = player.position

        const updatedPositions = {
            "n": [x, y + 1],
            "s": [x, y - 1],
            "e": [x + 1, y],
            "w": [x - 1, y]
        }

        const newPosition = updatedPositions[direction]

        grid[y][x].entity = null
        grid[newPosition[1]][newPosition[0]].entity = player

        setPlayer({
            ...player,
            position: updatedPositions[direction]
        })

        console.log(player.position)
        updateDisplay(direction)
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