import { Day } from "../day";

class Day1 extends Day {

  constructor(){
    super(1);
  }

  getSortedList = (input: string): number[] => {
    const groups: string[] = input.split('\n\n')

    return groups.map((val) => 
      val.split('\n').reduce((acc, next) => acc + parseInt(next), 0)
    ).sort((a,b) => b - a)
  }

  solveForPartOne(input: string): string {
    const sortedList = this.getSortedList(input)
    
    return sortedList[0].toString();
  }

  solveForPartTwo(input: string): string {
    const sortedList = this.getSortedList(input)
    
    return (sortedList[0] + sortedList[1] + sortedList[2]).toString();
  }
}

export default new Day1;