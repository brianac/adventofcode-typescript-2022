import { Day } from "../day";

class Day4 extends Day {

  constructor(){
    super(4);
  }

  solveForPartOne(input: string): string {
    const lines: string[] = input.split('\n')
    let containsCount: number = 0

    lines.forEach((line => {
      const [first, second] = line.split(',')
      const [firstLow, firstHigh] = first.split('-').map(Number);
      const [secondLow, secondHigh] = second.split('-').map(Number);

      if ((secondLow >= firstLow && secondHigh <= firstHigh) || 
        (firstLow >= secondLow && firstHigh <= secondHigh)) {
        containsCount++
      }
    }))

    return containsCount.toString();
  }

  solveForPartTwo(input: string): string {
    const lines: string[] = input.split('\n')
    let overlapCount: number = 0

    lines.forEach((line => {
      const [first, second] = line.split(',')
      const [firstLow, firstHigh] = first.split('-').map(Number);
      const [secondLow, secondHigh] = second.split('-').map(Number);

      if ((firstHigh >= secondLow) && (firstLow <= secondHigh)) {
        overlapCount++
      }
    }))

    return overlapCount.toString();
  }
}

export default new Day4;