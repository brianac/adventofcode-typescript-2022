import { Day } from "../day";

class Day9 extends Day {

  constructor(){
    super(9);
  }

  solveForPartOne(input: string): string {
    const lines = input.split('\n')

    let [headX, headY, tailX, tailY] = [0, 0, 0, 0]
    const tailCoords = ['0,0']

    const isAdjacent = (hX: number, hY: number, tX: number, tY: number) => {
      const validX = hX === tX || Math.abs(hX - tX) === 1
      const validY = hY === tY || Math.abs(hY - tY) === 1
      
      if (validX && validY) {
        return true
      } 
    }
    const trackTailCoords = (tX: number, tY: number, tracker: string[]) => {
      const coords = `${tX},${tY}`

      if (!tailCoords.find((el) => el === coords)) {
        tracker.push(coords) // TODO: do this without mutating the array inside the function
      }
    }

    lines.forEach((line) => {
      const [dir, move] = line.split(' ')

      for(let i = 1; i <= Number(move); i++) {
        switch(dir) {
          case 'R':
            headX += 1
            if (!isAdjacent(headX, headY, tailX, tailY)) {
              tailX += 1
              tailY = headY
              trackTailCoords(tailX, tailY, tailCoords)
            }
            break
          case 'L':
            headX -= 1
            if (!isAdjacent(headX, headY, tailX, tailY)) {
              tailX -= 1
              tailY = headY
            }
            trackTailCoords(tailX, tailY, tailCoords)
            break
          case 'U':
            headY += 1
            if (!isAdjacent(headX, headY, tailX, tailY)) {
              tailY += 1
              tailX = headX
            }
            trackTailCoords(tailX, tailY, tailCoords)
            break
          case 'D':
            headY -= 1
            if (!isAdjacent(headX, headY, tailX, tailY)) {
              tailY -= 1
              tailX = headX
            }
            trackTailCoords(tailX, tailY, tailCoords)
            break
        }
      }
    })

    return tailCoords.length.toString();
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n')

    let [headX, headY] = [0, 0]
    let tailX = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let tailY = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    const tailCoords = ['0,0']

    const isAdjacent = (hX: number, hY: number, tX: number, tY: number) => {
      const validX = hX === tX || Math.abs(hX - tX) === 1
      const validY = hY === tY || Math.abs(hY - tY) === 1
      
      if (validX && validY) {
        return true
      } 
    }
    const trackTailCoords = (tX: number, tY: number, tracker: string[]) => {
      const coords = `${tX},${tY}`

      if (!tailCoords.find((el) => el === coords)) {
        tracker.push(coords)
      }
    }
    const moveTail = (j: number) => { // I no longer care about mutating arrays globally
      if (tailX[j] !== tailX[j-1]) {
        if (tailX[j-1] > tailX[j]) {
          tailX[j]++
        } else if (tailX[j-1] < tailX[j]) {
          tailX[j]--
        }
      }
      if (tailY[j-1] !== tailY[j]) {
        if (tailY[j-1] > tailY[j]) {
          tailY[j]++
        } else if (tailY[j-1] < tailY[j]) {
          tailY[j]--
        }
      }
    }

    lines.forEach((line) => {
      const [dir, move] = line.split(' ')

      for(let i = 1; i <= Number(move); i++) {
        switch(dir) {
          case 'R':
            headX += 1
            if (!isAdjacent(headX, headY, tailX[0], tailY[0])) {
              tailX[0] += 1
              tailY[0] = headY
            }
            for (let j = 1; j < tailX.length; j++) {
              if (!isAdjacent(tailX[j-1], tailY[j-1], tailX[j], tailY[j])) {
                moveTail(j)
              }
            }
            break
          case 'L':
            headX -= 1
            if (!isAdjacent(headX, headY, tailX[0], tailY[0])) {
              tailX[0] -= 1
              tailY[0] = headY
            }
            for (let j = 1; j < tailX.length; j++) {
              if (!isAdjacent(tailX[j-1], tailY[j-1], tailX[j], tailY[j])) {
                moveTail(j)
              }
            }

            break
          case 'U':
            headY += 1
            if (!isAdjacent(headX, headY, tailX[0], tailY[0])) {
              tailY[0] += 1
              tailX[0] = headX
            }
            for (let j = 1; j < tailY.length; j++) {
              if (!isAdjacent(tailX[j-1], tailY[j-1], tailX[j], tailY[j])) {
                moveTail(j)
              }
            }
            
            break
          case 'D':
            headY -= 1
            if (!isAdjacent(headX, headY, tailX[0], tailY[0])) {
              tailY[0] -= 1
              tailX[0] = headX
            }
            for (let j = 1; j < tailY.length; j++) {
              if (!isAdjacent(tailX[j-1], tailY[j-1], tailX[j], tailY[j])) {
                moveTail(j)
              }
            }
            break
        }
        trackTailCoords(tailX[8], tailY[8], tailCoords)
      }
    })

    return tailCoords.length.toString();
  }
}

export default new Day9;