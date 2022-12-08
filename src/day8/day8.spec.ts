import day8 from './index';

const testData = `30373
25512
65332
33549
35390`

describe('On Day 8', () =>{
  it(`part1 is identity function`, ()=>{
    expect(day8.solveForPartOne(testData)).toBe('21');
  })

  it(`part2 is identity function`, ()=>{
    expect(day8.solveForPartTwo(testData)).toBe('8');
  })
});