import day9 from './index';

const testInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const testInput2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`

describe('On Day 9', () =>{
  it(`part1 is identity function`, ()=>{
    expect(day9.solveForPartOne(testInput)).toBe('13');
  })

  it(`part2 is identity function`, ()=>{
    expect(day9.solveForPartTwo(testInput2)).toBe('36');
  })
});