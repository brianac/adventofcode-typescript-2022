import day6 from './index';

describe('On Day 6', () =>{
  it(`part1 test1`, ()=>{
    expect(day6.solveForPartOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe('7');
  })

  it(`part1 test2`, ()=>{
    expect(day6.solveForPartOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe('10');
  })

  it(`part1 test3`, ()=>{
    expect(day6.solveForPartOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe('11');
  })

  it(`part2 test1`, ()=>{
    expect(day6.solveForPartTwo('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe('19');
  })

  it(`part2 test2`, ()=>{
    expect(day6.solveForPartTwo('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe('23');
  })

  it(`part2 test3`, ()=>{
    expect(day6.solveForPartTwo('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe('29');
  })
});