import { Day } from "../day";

class Day5 extends Day {

  constructor(){
    super(5);
  }

  generatePiles(): Map<string, string[]> {
    //TODO: Generate this programatically
    return new Map<string, string[]>([
      ['1', ['N', 'R', 'G', 'P']],
      ['2', ['J', 'T', 'B', 'L', 'F', 'G', 'D', 'C']],
      ['3', ['M', 'S', 'V']],
      ['4', ['L', 'S', 'R', 'C', 'Z', 'P']],
      ['5', ['P', 'S', 'L', 'V', 'C', 'W', 'D', 'Q']],
      ['6', ['C', 'T', 'N', 'W', 'D', 'M', 'S']],
      ['7', ['H', 'D', 'G', 'W', 'P']],
      ['8', ['Z', 'L', 'P', 'H', 'S', 'C', 'M', 'V']],
      ['9', ['R', 'P', 'F', 'L', 'W', 'G', 'Z']]
    ])
  }

  solveForPartOne(input: string): string {
    const [_, lines] = input.split('\n\n');
    const steps = lines.split('\n');
    const piles = this.generatePiles();

    steps.forEach((step) => {
      const moves = step.split(' ')
      const amount = Number(moves[1])
      const from = moves[3]
      const to = moves[5]

      for (let i = 0; i < amount; i++) {
        const crate = piles.get(from)?.pop()

        if (crate)
          piles.get(to)?.push(crate)
      }
    })

    const lastOnPile = Array.from(piles).map(([_, p]) => (p[p.length-1]));

    return lastOnPile.toString();
  }

  solveForPartTwo(input: string): string {
    const [_, lines] = input.split('\n\n');
    const steps = lines.split('\n');
    const piles = this.generatePiles();

    steps.forEach((step) => {
      const moves = step.split(' ')
      const amount = Number(moves[1])
      const from = moves[3]
      const to = moves[5]

      let tempPile: string[] = []
      for (let i = 0; i < amount; i++) {
        const crate = piles.get(from)?.pop()

        if (crate)
          tempPile.unshift(crate)
      }

      piles.get(to)?.push(...tempPile)
    })

    const lastOnPile = Array.from(piles).map(([_, p]) => (p[p.length-1]));

    return lastOnPile.toString();
  }
}

export default new Day5;