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
    return 'input';
  }

  solveForPartTwo(input: string): string {
    return 'input';
  }
}

export default new Day16;