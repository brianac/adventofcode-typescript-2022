import { Day } from "../day";

class Day16 extends Day {

  constructor(){
    super(16);
  }
  // Solution totally wrong, back to drawing board
  solveForPartOneIncorrect(input: string): string {
    const valves = new Map(input.split('\n').map((el) => {
      const parts = el.split(' ')
      const flow = parts[4].split('=')[1]

      return [parts[1], {
        flowRate: Number(flow.substring(0, flow.length-1)),
        connections: parts.slice(9).map((p) => p.substring(0, 2)), //assumes names are 2 chars
        open: false
      }]
    }))

    let pressureReleased = 0
    let flowPerMinute = 0
    let actions: string[] = []
    let highestValue = 0
    let highestValueMoves: string[] = []
    let currentValve = 'AA'

    const traverseValves = (connection: string, visited: string[], depth: number, moves: string[], timeLeft: number) => {
      //console.log('traverse', depth, connection, visited, highestValue, highestValueMoves)
      if (!visited.includes(connection)) {
        const valve = valves.get(connection)

        visited.push(connection)
        moves.push(connection)
  
        if (valve?.flowRate && valve?.flowRate > 0 && !valve?.open) {
          const value = valve?.flowRate ? (valve.flowRate*(timeLeft-(depth)-1)) : 0
    
          if (value > highestValue) {

            const onTheWay = moves.indexOf(highestValueMoves[highestValueMoves.length-1])

            if (onTheWay !== -1 && value - highestValue > 20) {
              moves = [...moves.splice(0, onTheWay), 'turn', ...moves.splice(onTheWay)]
            }

            highestValue = value
            highestValueMoves = [...moves]
          }
        }
  
        valve?.connections.forEach((con) => {
          traverseValves(con, visited, ++depth, moves, --timeLeft)
        })
      }
    }
    const findNextMoves = (time: number) => {
      const visited = [currentValve]
      const vals = valves.get(currentValve)

      vals?.connections.forEach((con) => {
        traverseValves(con, visited, 1, [], time)
      })
    }
    const processMove = (move: string) => {
      const vals = valves.get(currentValve)

      if (move === 'turn') {
        //console.log('turning valve on:', currentValve)
        if (vals) {
          vals.open = true
          flowPerMinute = flowPerMinute + vals.flowRate
        }
      } else {
        //console.log('moving to valve:', move)
        currentValve = move
      }
    }

    for(let time = 29; time >= 0; time--) {
      pressureReleased += flowPerMinute

      //console.log(pressureReleased, flowPerMinute, actions, highestValue, highestValueMoves, currentValve)

      //console.log(time, actions)
      if (actions.length === 0) {
        findNextMoves(time)
        
        if (highestValueMoves.length > 0) {
          highestValueMoves.push('turn')
          actions = [...highestValueMoves]
          highestValueMoves = []
          highestValue = 0
        }

        processMove(actions.shift() || '')
      } else {
        processMove(actions.shift() || '')
      }
    }

    //console.log(valves);

    return pressureReleased.toString();
  }

  solveForPartOne(input: string): string {
    const valves = input.split('\n').map((el) => {
      const parts = el.split(' ')
      const flow = parts[4].split('=')[1]


      parts.slice(9).map((p) => p.substring(0, 2)).forEach((el) => {
        console.log(parts[1], el)
      })

      return {
        name: parts[1],
        flowRate: Number(flow.substring(0, flow.length-1)),
        connections: parts.slice(9).map((p) => p.substring(0, 2)), //assumes names are 2 chars
      }
    })

    // Made node map out of value above, then manually determines best paths

    //30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02, 01
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, BT, TO, BN, JT, 09, RL, PH, 20, CA, IR, 13, HV, MO, IF, 25
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, BT, TO, BN, JT, 09, ES, KE, 21, FS, XQ, SV, 16, 
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, BT, TO, BN, JT, 09, ES, KE, 21, SQ, IR, 13, CA, PH, 20, IL, YI, IF, 25
    const path1 = 26*19 + 22*22 + 19*8 + 14*9 + 11*20 + 8*13 + 4*25
    const path2 = 26*19 + 22*22 + 19*8 + 14*9 + 11*21 + 7*16
    const path3 = 26*19 + 22*22 + 19*8 + 14*9 + 11*21 + 8*13 + 5*20 + 25

    //console.log(path1, path2, path3)

    //console.log(valves)

    return path3.toString();
  }

  solveForPartTwo(input: string): string {
    //26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02, 01
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, BT, TO, BN, JT, 09, RL, PH, 20, CA, IR, 13
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, BT, TO, BN, JT, 09, RL, PH, 20, IL, YI, IF, 25
    //AA, KS, TO, BN, JT, 09, ES, KE, 21, SQ, IR, 13, CA, PH, 20, IL, YI, IF, 25, MO, HV, IR, MA, SV, 16
    //AA, KS, TO, BN, JT, 09, ES, KE, 21, FS, XQ, SV, 16, MA, IR, 13, CA, PH, 20, IL, YI, IF, 25

    const myPath1 = 22*19 + 18*22 + 15*8 + 10*9 + 7*20 + 4*13
    const myPath2 = 22*19 + 18*22 + 15*8 + 10*9 + 7*20 + 3*25 //wins
    //other path gets first nodes
    const myPath3 = 21*9 + 18*21 + 15*13 + 12*20 + 8*25 + 2*16 // wins
    const myPath4 = 21*9 + 18*21 + 14*16 + 11*13 + 8*20 + 4*24

    //26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02, 01
    //AA, JG, JL, OY, 11, ZH, CP, 19, FU, 14, BF, RM, NN, 23, RM, BF, FU, CP, ZH, OY, EH, GS, PT, 18
    //AA, JG, JL, OY, 11, EH, GS, PT, 18, GS, EH, ZH, CP, FU, 14, BF, RM, NN, 23 
    //AA, RN, YQ, UV, 19, YB, TG, FC, 22, EU, EZ, 08, HX, OY, 11, ZH, CP, FU, 14, BF, RM, NN, 23
    const otherPath1 = 22*11 + 19*19 + 17*14 + 13*23 + 3*18 // wins
    const otherPath2 = 22*11 + 18*18 + 13*19 + 11*14 + 7*23
    //get first few nodes
    const otherPath3 = 22*19 + 18*22 + 15*8 + 12*11 + 8*14 + 4*23

    //console.log(myPath2+otherPath1, myPath3+otherPath3)

    return (myPath3+otherPath3).toString();
  }
}

export default new Day16;