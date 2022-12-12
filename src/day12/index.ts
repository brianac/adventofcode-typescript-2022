import { Day } from "../day";

class Day12 extends Day {

  constructor(){
    super(12);
  }

  solveForPartOne(input: string): string {
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
    }


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
      const stepValue = findSetValue(step)

      //console.log(step, y, x)

      if (step === 'E') {
        console.log(count, 'I made it!!!!!')
      }

      path.push(`${x},${y},${step}`)


      if (x < grid[y].length-1 && !path.find((p) => p === `${x+1},${y},${grid[y][x+1]}`) && stepValue+1 >= findSetValue(grid[y][x+1])) {
        findNextStep([x+1, y], ++count, path)
      }
      if (y < grid.length-1 && !path.find((p) => p === `${x},${y+1},${grid[y+1][x]}`) && stepValue+1 >= findSetValue(grid[y+1][x])) {
        findNextStep([x, y+1], ++count, path)
      }
      if (y > 0 && !path.find((p) => p === `${x},${y-1},${grid[y-1][x]}`) && stepValue+1 >= findSetValue(grid[y-1][x])) {
        findNextStep([x, y-1], ++count, path)
      }
      if (x > 0 && !path.find((p) => p === `${x-1},${y},${grid[y][x-1]}`) && stepValue+1 >= findSetValue(grid[y][x-1])) {
        findNextStep([x-1, y], ++count, path)
      }
    }

    findNextStep(pos, 0, [])

    return 'input';
  }

  solveForPartTwo(input: string): string {
    return 'input';
  }
}

export default new Day12;
