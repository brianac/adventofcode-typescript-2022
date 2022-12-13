import day13 from './index';

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
    const input = `[1,1,3,1,1]
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
    expect(day13.solveForPartOne(input)).toBe('13');
  })

  it(`part1 extra`, ()=>{
    const input = `[[],[10,[[6,10,0],1,[4,4,5],[4,9,4]],7,[[4,7]]],[2,[9,2],2,[]],[9,[[1,7,10,8]]]]
[[[[7,8,10,10],3,[6,7,8]],10,[[],2,1,[2,1,1,3],[10,0,8,7,8]],[0]],[5,[[2,1,10,8,6],[7,0,1,2,6],9,[6]],[4],[[4],10,[1,9]],[]],[5,4,[3,8,[2],[3,8],[1,10]],9]]`

    expect(day13.solveForPartOne(input)).toBe('0');
  })
});