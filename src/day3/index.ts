import { getPriority } from "os";
import { Day } from "../day";

class Day3 extends Day {

  constructor(){
    super(3);
  }

  getPriority(char: string): number {
    const charCode = char.charCodeAt(0)

    if(charCode >= 97) {
      return 1 + char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    return 27 + char.charCodeAt(0) - 'A'.charCodeAt(0); 
  }

  solveForPartOne(input: string): string {
    const lines: string[] = input.split('\n');

    const totalPriority = lines.reduce((acc, line) => {
      const splitPoint = line.length/2
      const [first, second] = [line.slice(0, splitPoint), line.slice(splitPoint)];
      const same = first.split('').filter((val) => second.indexOf(val) !== -1)

      return acc + this.getPriority(same[0])
    }, 0)
  
    return totalPriority.toString();
  }

  solveForPartTwo(input: string): string {
    const lines: string[] = input.split('\n');
    const groups: string[][] = []

    lines.forEach((_, index) => {
      if ((index+1) % 3 === 0) {
        groups.push([lines[index-2], lines[index-1], lines[index]])
      }
    })

    const totalPriority = groups.reduce((acc, group) => {
      const same = group[0].split('').filter((val) => 
        group[1].indexOf(val) !== -1 && group[2].indexOf(val) !== -1)

      return acc + this.getPriority(same[0])
    }, 0)
      
    return totalPriority.toString();
  }
}

export default new Day3;