/**
 * @param val {any}
 * @param prev {ListNode}
 * @param next {ListNode}
 * @constructor
 */
function ListNode(val, prev, next) {
  this.val = val
  this.prev = prev
  this.next = next
}


class LinkedList {
  /**
   * @param head {ListNode}
   * @constructor
   */
  constructor(head) {
    this.head = head;
  }
  
  /**
   * @param newHead {ListNode}
   */
  addHead(newHead) {
    newHead.next = this.head
    this.head.prev = newHead
    
    this.head = newHead;
  }
  
  removeHead() {
    const newHead = this.head.next
    newHead.prev = undefined
    
    this.head = newHead
  }
  
  /**
   *
   * @param cb {Function}
   * @returns {{ListNode}|null}
   */
  find(cb) {
    let curr = this.head
    
    while (curr.next) {
      if (cb(curr)) return curr
      curr = curr.next
    }
    return null
  }
  
  /**
   * @param node {ListNode}
   */
  remove(node) {
    const target = this.find(n => n === node)
    
    const parent = target.prev
    const child = target.next
    
    parent.next = child
    child.prev = parent
  }
  
  toString() {
    let str = '['
    let curr = this.head
    
    while (curr.next) {
      str += JSON.stringify(curr.val) + ','
      curr = curr.next
    }
    
    return str + JSON.stringify(curr.val) + ']'
  }
}

const list = new LinkedList(new ListNode(10))

list.addHead(new ListNode(11))
list.addHead(new ListNode(12))

console.log(list.toString());

