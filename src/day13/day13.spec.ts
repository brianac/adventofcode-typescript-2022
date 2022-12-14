import day13 from './index';

const testInput = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`

describe('On Day 13', () =>{
  it(`part1 two lists`, ()=>{
    const input = `[1,1,3,1,1]
[1,1,5,1,1]`
    expect(day13.solveForPartOne(input)).toBe('1');
  })

  it(`part1 value vs list`, ()=>{
    const input = `[9]
[[8,7,6]]`
    expect(day13.solveForPartOne(input)).toBe('0');
  })

  it(`part1 multiple list vs list and val`, ()=>{
    const input = `[[1],[2,3,4]]
[[1],4]`
    expect(day13.solveForPartOne(input)).toBe('1');
  })

  it(`part1 length pt 1`, ()=>{
    const input = `[[4,4],4,4]
[[4,4],4,4,4]`
    expect(day13.solveForPartOne(input)).toBe('1');
  })

  it(`part1 length pt 2`, ()=>{
    const input = `[7,7,7,7]
[7,7,7]`
    expect(day13.solveForPartOne(input)).toBe('0');
  })

  it(`part1 empty vals`, ()=>{
    const input = `[]
[3]`
    expect(day13.solveForPartOne(input)).toBe('1');
  })

  it(`part1 empty lists`, ()=>{
    const input = `[[[]]]
[[]]`
    expect(day13.solveForPartOne(input)).toBe('0');
  })

  it(`part1 bigger`, ()=>{
    const input = `[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`
    expect(day13.solveForPartOne(input)).toBe('0');
  })

  it(`part1 all together`, ()=>{
    expect(day13.solveForPartOne(testInput)).toBe('13');
  })

  it(`part2`, ()=>{
    expect(day13.solveForPartTwo(testInput)).toBe('140');
  })
});