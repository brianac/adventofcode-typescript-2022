import { Day } from "../day";

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

class Day13 extends Day {

  constructor(){
    super(13);
  }

  parse(str: string) {
    return JSON.parse(str)
  }

  solveForPartOne(input: string): string {
    const pairs = input.split('\n\n')

    let indices = 0

    pairs.forEach((pair, index) => {
      const sides = pair.split('\n')

      const left = this.parse(sides[0])
      const right = this.parse(sides[1])

      if (compare(left, right) < 0) {
        indices+= index+1
      }
    })

    return indices.toString();
  }

  solveForPartTwo(input: string): string {
    const lines = input.split('\n\n').map((a) => a.split('\n').map((b) => this.parse(b))).flat()

    lines.push([[2]])
    lines.push([[6]])

    const sortedLines = lines.sort(compare)

    const indexOne = sortedLines.findIndex((val) => {
      return val.length === 1 && val[0].length === 1 && val[0][0] === 2
    })
    const indexTwo = sortedLines.findIndex((val) => {
      return val.length === 1 && val[0].length === 1 && val[0][0] === 6
    })

    return ((indexOne + 1) * (indexTwo + 1)).toString();
  }
}

export default new Day13;