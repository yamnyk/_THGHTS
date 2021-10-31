import Point from './Point.js'
import {directions} from './utils.js'

export default class Board {
  constructor(size) {
    this.size = size
    this.snakePos = this.getRandomPosition()
    this.foodPos = this.getRandomPosition()
    
    this.cells = new Array(size)
      .fill(null)
      .map((r, rowInd) => new Array(size)
        .fill(null)
        .map((c, colInd) => new Point(rowInd, colInd, '-')))
    
    this.changePositions();
  }
  
  print() {
    console.table(this.cells.map(row => row.map(c => c.value)))
  }
  
  changePositions(newSnakePos) {
    this.cells[this.snakePos.x][this.snakePos.y].value = 0
    this.cells[this.foodPos.x][this.foodPos.y].value = '*'
  }
  
  getRandomPosition() {
    const randNum = () => Math.floor(Math.random() * this.size)
    return {x: randNum(), y: randNum()};
  }
  
  move(dir) {
    switch (dir) {
      case directions.UP:
        this.snakePos.y -= 1;
        break;
      case directions.DOWN:
        this.snakePos.x += 1;
        break;
      case directions.LEFT:
        this.snakePos.x -= 1;
        break;
      case directions.RIGHT:
        this.snakePos.x += 1;
        break;
    }
    this.changePositions();
  }
}