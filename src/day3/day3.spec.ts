import day3 from './index';

const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe('On Day 3', () =>{
    it(`part1`, ()=>{
        expect(day3.solveForPartOne(testData)).toBe('157');
    })

    it(`part2`, ()=>{
      expect(day3.solveForPartTwo(testData)).toBe('70');
  })
});