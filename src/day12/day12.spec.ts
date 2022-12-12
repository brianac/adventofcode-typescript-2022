import day12 from './index';

const testData = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`

describe('On Day 12', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day12.solveForPartOne(testData)).toBe('31');
    })
});
