import { Day } from "../day";

class Directory {
  dirs: Dir[]
  current: Dir

  constructor() {
    const root = new Dir('/', null)
    this.dirs = [root]
    this.current = root
  }

  moveToParent() {
    if (this.current.parent) {
      this.current = this.current.parent
    }
  }

  moveToRoot() {
    this.current = this.dirs[0]
  }

  getCurrent() {
    return this.current
  }

  addDir(name: string) {
    const newDir = new Dir(name, this.current)

    this.current = newDir
    this.dirs.push(newDir)
  }

  updateDirSize(dir: Dir, size: number) {
    dir.size = dir.size + size

    if (dir.parent) {
      this.updateDirSize(dir.parent, size)
    }
  }

  getDirs() {
    return this.dirs
  }
}

class Dir {
  name: string
  parent: Dir | null
  size: number

  constructor(name: string, parent: Dir | null) {
    this.name = name;
    this.parent = parent;
    this.size = 0;
  }
}

class Day7 extends Day {

  constructor(){
    super(7);
  }

  generateDirectory(lines: string[]) {
    const directory = new Directory()

    lines.forEach((line) => {
      if (line[0] === '$') {
        if (line[2] === 'c') {
          if (line[5] === '.') {
            directory.moveToParent()
          } else if (line[5] === '/') {
            directory.moveToRoot()
          } else {
            directory.addDir(line.split(' ')[2])
          }
        } 
      } else {
        if (line[0] !== 'd') {
          directory.updateDirSize(directory.getCurrent(), Number(line.split(' ')[0]))
        }
      }
    })

    return directory
  }

  solveForPartOne(input: string): string {
    const directory = this.generateDirectory(input.split('\n'));

    const finalNum = directory.getDirs().reduce((acc: number, dir: Dir): number => {
      if (dir.size <= 100000) {
        return acc += dir.size
      }
      return acc
    }, 0)

    return finalNum.toString();
  }

  solveForPartTwo(input: string): string {
    const directory = this.generateDirectory(input.split('\n'));
    const dirs = directory.getDirs()
    const spaceToSave = Math.abs(70000000 - 30000000 - dirs[0].size)

    let bestOption = 70000000

    dirs.forEach((dir) => {
      if (dir.size > spaceToSave && dir.size < bestOption) {
        bestOption = dir.size
      }
    })

    return bestOption.toString();
  }
}

export default new Day7;