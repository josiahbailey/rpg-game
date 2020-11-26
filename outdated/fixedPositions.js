
// let newPosition
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