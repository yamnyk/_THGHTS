export default class Point {
  constructor(row, col, val = '*') {
    this.x = row;
    this.y = col;
    let value = val;
    this.isFood = false;
    this.isSnake = false;
    this.isTail = false;
    this.isHead = false;
    
    if (typeof val === 'object') {
      throw new TypeError("point value can't be object")
    }
    
    Object.defineProperty(this, 'value', {
      get: () => value,
      set: (newValue) => {
        if (typeof newValue === 'object') throw new TypeError("point value can't be object")
        value = newValue
      }
    })
    
  }
  
  valueOf() {
    return this.value
  }
  
  toString() {
    return JSON.stringify(this)
  }
}