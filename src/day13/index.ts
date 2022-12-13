import { Day } from "../day";

class Day13 extends Day {

  constructor(){
    super(13);
  }

  solveForPartOne(input: string): string {
    const pairs = input.split('\n\n')

    let indices = 0

    const parse = (str: string) => {
      return JSON.parse(str)
    }

    const compare = (left: any, right: any): any => {
      let isLeftNum = typeof left == "number"
      let isRightNum = typeof right == "number"

      if (isLeftNum && isRightNum) {
        return left === right ? 0 : left < right ? -1 : +1;
      } else if (!isLeftNum && !isRightNum) {
        const n = Math.min(left.length, right.length)

        for (let i = 0; i < n; i++) {
          const val = compare(left[i], right[i])
          if (val !== 0) return val
        }
        
        return left.length - right.length
      } else if (isLeftNum) {
        return compare([left], right)
      } else if (isRightNum) {          
        return compare(left, [right])
      }
    }

    pairs.forEach((pair, index) => {
      const sides = pair.split('\n')

      const left = parse(sides[0])
      const right = parse(sides[1])

      if (compare(left, right) < 0) {
        indices+= index+1
      }
    })

    return indices.toString();
  }

  solveForPartTwo(input: string): string {
    return 'input';
  }
}

export default new Day13;