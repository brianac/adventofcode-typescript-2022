import day1 from './index';

const testData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe('On Day 1', () =>{
    it(`part1 returns highest group`, ()=>{
        expect(day1.solveForPartOne(testData)).toBe('24000');
    })
});