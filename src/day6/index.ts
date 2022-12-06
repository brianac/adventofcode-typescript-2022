import { Day } from "../day";

class Day6 extends Day {

  constructor(){
    super(6);
  }

  checkUnique(str: string): boolean {
    for(let i = 0; i<str.length-1; i++){ 
    	for(let j = i+1; j<str.length; j++){ 
        if (str[i] === str[j]) {
          return false; 
        }
      } 
    } 
    return true;
  }

  solveForPartOne(input: string): string {
    for (let i = 4; i < input.length; i++) {
      if (this.checkUnique(input.substring(i-4, i))) {
        return i.toString();
      }
    }

    return 'not found';
  }

  solveForPartTwo(input: string): string {
    for (let i = 14; i < input.length; i++) {
      if (this.checkUnique(input.substring(i-14, i))) {
        return i.toString();
      }
    }

    return 'not found';
  }
}

export default new Day6;