import { Day } from "../day";

const scores = new Map<string, number>([
  ['A Y', 8], //rock paper
  ['A X', 4], //rock rock
  ['A Z', 3], //rock scissors 
  ['B Y', 5], //paper paper
  ['B X', 1], //paper rock
  ['B Z', 9], //paper scissors
  ['C Y', 2], //scissors paper
  ['C X', 7], //scissors rock
  ['C Z', 6] //scissors scissors
]);

const updatedScores = new Map<string, number>([
  ['A Y', 4], //rock draw
  ['A X', 3], //rock lose
  ['A Z', 8], //rock win 
  ['B Y', 5], //paper draw
  ['B X', 1], //paper lose
  ['B Z', 9], //paper win
  ['C Y', 6], //scissors draw
  ['C X', 2], //scissors lose
  ['C Z', 7] //scissors win
]);

class Day2 extends Day {
  constructor(){
    super(2);
  }

  solveForPartOne(input: string): string {
    return input.split('\n').reduce((acc, val) => {
      const score = scores.get(val)

      return acc + (score || 0)
    }, 0).toString();
  }

  solveForPartTwo(input: string): string {
    return input.split('\n').reduce((acc, val) => {
      const score = updatedScores.get(val)

      return acc + (score || 0)
    }, 0).toString();
  }
}

export default new Day2;