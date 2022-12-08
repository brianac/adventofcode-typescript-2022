import { Day } from "../day";

class Day8 extends Day {

  constructor(){
    super(8);
  }

  solveForPartOne(input: string): string {
    const lines: string[] = input.split('\n')
    const grid: number[][] = lines.map((el) => el.split('').map((n) => Number(n)))

    let count = 0

    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {

        if (x === 0 || x === grid[y].length-1 || y === 0 || y === grid.length-1) {
          count++
        } else {
          const current = grid[y][x]
          let pass = [true, true, true, true]

          for (let i = y+1; i < grid.length; i++) {
            if (grid[i][x] >= current) {
              pass[0] = false
              break;
            }
          }

          for (let i = y-1; i >= 0; i--) {
            if (grid[i][x] >= current) {
              pass[1] = false
              break;
            }
          }

          for (let i = x+1; i < grid[y].length; i++) {
            if (grid[y][i] >= current) {
              pass[2] = false
              break;
            }
          }

          for (let i = x-1; i >= 0; i--) {
            if (grid[y][i] >= current) {
              pass[3] = false
              break;
            }
          }

          if (pass.includes(true)) count++
        }
      }
    }

    return count.toString();
  }

  solveForPartTwo(input: string): string {
    const lines: string[] = input.split('\n')
    const grid: number[][] = lines.map((el) => el.split('').map((n) => Number(n)))

    let bestVal = 0

    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {

        const current = grid[y][x]
        let totals = [0, 0, 0, 0]

        for (let i = y+1; i < grid.length; i++) {
          if (grid[i][x] >= current) {
            totals[0] = totals[0]+1
            break;
          } else {
            totals[0] = totals[0]+1
          }
        }

        for (let i = y-1; i >= 0; i--) {
          if (grid[i][x] >= current) {
            totals[1] = totals[1]+1
            break;
          } else {
            totals[1] = totals[1]+1
          }
        }

        for (let i = x+1; i < grid[y].length; i++) {
          if (grid[y][i] >= current) {
            totals[2] = totals[2]+1
            break;
          } else {
            totals[2] = totals[2]+1
          }
        }

        for (let i = x-1; i >= 0; i--) {
          if (grid[y][i] >= current) {
            totals[3] = totals[3]+1
            break;
          } else {
            totals[3] = totals[3]+1
          }
        }

        const value = totals.reduce((acc, val) => acc*val, 1)

        if (value > bestVal) bestVal = value
      }
    }

    return bestVal.toString();
  }
}

export default new Day8;