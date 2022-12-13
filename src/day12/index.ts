import { Day } from "../day";

type queueItem = {
  pos: number[],
  count: number,
  path: string[]
}

class Day12 extends Day {

  constructor(){
    super(12);
  }

  solveForPartOne(input: string): string {
    /*
    const grid = input.split('\n').map((line) => line.split(''))

    //let pos = grid.find((el) => el.indexOf(('S')))
    //console.log(pos)
    let pos = [0, 0]
    let end = [0, 0]

    for(let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 'S') {
          pos = [i, j]
        }
        if (grid[i][j] === 'E') {
          end = [i, j]
        }
      }
    }*/

    let pos: number[]
    let end: number[]
    let queue: queueItem[] = []
    let itr = 0

    let grid = input.split("\n").map((line, y) => line.split('').map((v, x) => {
      if (v == 'S') {
          pos = [ x, y ]
          v = 'a'
      } else if (v == 'E') {
          end = [ x, y ]
          v = 'z'
      }
      return v.charCodeAt(0) - 'a'.charCodeAt(0)
     }))
  
    let shortestPath = Infinity

    const findSetValue = (step: string) => {
      if (step === 'E') {
        return 'z'.charCodeAt(0) - 'a'.charCodeAt(0)
      }
      return step === 'S' ? 0 : step.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    const findNextStep = (position: number[], count: number, path: string[]) => {
      const x = position[0]
      const y = position[1]
      const step = grid[y][x]
      const stepValue = step

      if (x === end[0] && y === end[1]) {
        if (count < shortestPath) shortestPath = count 
      } 

      path.push(`${x},${y},${step}`)

      const neighbours: queueItem[] = []

      if (x < grid[y].length-1 && !path.find((p) => p === `${x+1},${y},${grid[y][x+1]}`) && stepValue+1 >= grid[y][x+1]) {
        neighbours.push({pos: [x+1, y], count: ++count, path})
      }
      if (y < grid.length-1 && !path.find((p) => p === `${x},${y+1},${grid[y+1][x]}`) && stepValue+1 >= grid[y+1][x]) {
        neighbours.push({pos: [x, y+1], count: ++count, path})
      }
      if (y > 0 && !path.find((p) => p === `${x},${y-1},${grid[y-1][x]}`) && stepValue+1 >= grid[y-1][x]) {
        neighbours.push({pos: [x, y-1], count: ++count, path})
      }
      if (x > 0 && !path.find((p) => p === `${x-1},${y},${grid[y][x-1]}`) && stepValue+1 >= grid[y][x-1]) {
        neighbours.push({pos: [x-1, y], count: ++count, path})
      }

      return neighbours
    }

    const runQueue = () => {
      queue.push({ pos: pos, count: 0, path: [] })

      while (queue.length > 0) {
        const next = queue.shift()
  
        if (!next) {
          continue
        }
  
        if (itr % 10000 === 0) {
          console.log(queue.length)
        }
  
        itr++
  
        const others = findNextStep(next.pos, next.count, next.path)
        queue = [ ...queue, ...others]
      }
    }

    runQueue()

    return shortestPath.toString();
  }

  solveForPartTwo(input: string): string {
    return 'input';
  }
}

export default new Day12;
