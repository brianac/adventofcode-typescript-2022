import day2 from './index';

const testData = `A Y
B X
C Z`;

describe('On Day 2', () =>{
    it(`part1 returns the total`, ()=>{
        expect(day2.solveForPartOne(testData)).toBe('15');
    })

    it(`part2 returns the total`, ()=>{
      expect(day2.solveForPartTwo(testData)).toBe('12');
  })
});