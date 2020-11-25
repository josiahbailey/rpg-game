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
        let newPosition

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

        // const fixedPositions = {
        //     "n": {
        //         startHeight: 99,
        //         endHeight: 90,
        //         startWidth: direction === "e" ? x - 3 : direction === "w" ? x - 5 : x - 4,
        //         endWidth: direction === "e" ? x + 6 : direction === "w" ? x + 4 : x + 5
        //     },
        //     "ne": {
        //         startHeight: 99,
        //         endHeight: 90,
        //         startWidth: 91,
        //         endWidth: 100
        //     },
        //     "nw": {
        //         startHeight: 99,
        //         endHeight: 90,
        //         startWidth: 0,
        //         endWidth: 9
        //     },
        //     "s": {
        //         startHeight: 9,
        //         endHeight: 0,
        //         startWidth: direction === "e" ? x - 3 : direction === "w" ? x - 5 : x - 4,
        //         endWidth: direction === "e" ? x + 6 : direction === "w" ? x + 4 : x + 5
        //     },
        //     "se": {
        //         startHeight: 9,
        //         endHeight: 0,
        //         startWidth: 91,
        //         endWidth: 100
        //     },
        //     "sw": {
        //         startHeight: 9,
        //         endHeight: 0,
        //         startWidth: 0,
        //         endWidth: 9
        //     },
        //     "e": {
        //         startHeight: direction === "n" ? y + 5 : direction === "s" ? y + 3 : y + 4,
        //         endHeight: direction === "n" ? y - 4 : direction === "s" ? y - 6 : y - 5,
        //         startWidth: 91,
        //         endWidth: 100
        //     },
        //     "w": {
        //         startHeight: direction === "n" ? y + 5 : direction === "s" ? y + 3 : y + 4,
        //         endHeight: direction === "n" ? y - 4 : direction === "s" ? y - 6 : y - 5,
        //         startWidth: 0,
        //         endWidth: 9
        //     },
        // }

        // if (y > 94) {
        //     if (y === 95 && direction === "s") {
        //         console.log("Normal Position")
        //         newPosition = normalPositions[direction]
        //     } else if (x > 94) {
        //         console.log("ne")
        //         newPosition = fixedPositions["ne"]
        //     } else if (x < 5) {
        //         console.log("nw")
        //         newPosition = fixedPositions["nw"]
        //     } else {
        //         console.log("n")
        //         newPosition = fixedPositions["n"]
        //     }
        // } else if (y < 6) {
        //     if (y === 5 && direction === "n") {
        //         console.log("Normal Position")
        //         newPosition = normalPositions[direction]
        //     } else if (x > 94) {
        //         console.log("se")
        //         newPosition = fixedPositions["se"]
        //     } else if (x < 5) {
        //         console.log("sw")
        //         newPosition = fixedPositions["sw"]
        //     } else {
        //         console.log("s")
        //         newPosition = fixedPositions["s"]
        //     }
        // } else if (x > 94) {
        //     if (x === 95 && direction === "w") {
        //         console.log("Normal Position")
        //         newPosition = normalPositions[direction]
        //     } else {
        //         console.log("e")
        //         newPosition = fixedPositions["e"]
        //     }
        // } else if (x < 5) {
        //     if (x === 4 && direction === "e") {
        //         console.log("Normal Position")
        //         newPosition = normalPositions[direction]
        //     } else {
        //         console.log("w")
        //         newPosition = fixedPositions["w"]
        //     }
        // } else {
        //     console.log("Normal Position")
        //     newPosition = normalPositions[direction]
        // }

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