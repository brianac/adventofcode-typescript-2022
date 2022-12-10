import { privateEncrypt } from "crypto";
import { Day } from "../day";

class Day10 extends Day {

  constructor(){
    super(10);
  }

  solveForPartOne(input: string): string {
    const lines = input.split('\n')

    let cycle = 0
    let x = 1
    let total = 0

    const checkCycle = () => {
      const cyclesToAdd = [20, 60, 100, 140, 180, 220]

      cycle++
      if (cyclesToAdd.includes(cycle)) {
        total = cycle*x + total
      }
    }

    lines.forEach((command => {
      if (command[0] === 'n') {
        checkCycle()
      } else {
        checkCycle()
        checkCycle()

        x = x + Number(command.split(' ')[1])
      }
    }))

    return total.toString();
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n')

    let x = 1
    let spritePosition = 0
    const grid: string[][] = new Array(6).fill(' ').map(() => new Array(40).fill(' '))

    const drawSprite = () => {
      const xPos = spritePosition % 40
      const ypos = Math.floor(spritePosition/40)

      if ([x-1, x, x+1].includes(xPos)) {
        grid[ypos][xPos] = '#'
      } else {
        grid[ypos][xPos] = '.'
      }
      spritePosition++
    }

    lines.forEach((command) => {
      if (command[0] === 'n') {
        drawSprite()
      } else {
        drawSprite()
        drawSprite()

        x = x + Number(command.split(' ')[1])
      }
    })

    return grid.map(row => row.join("")).join("\n");
  }
}

export default new Day10;