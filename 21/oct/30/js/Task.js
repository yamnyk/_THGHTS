/**
 * ДАНО: неизвестной вложеннсти список задач
 * СДЕЛАТЬ: высчитывать сколько процентов корневой задачи выполненно, исходя из выполненности даже самых вложенных пунктов
 */

export default class Task {
  isDone = false
  value = 1
  progress = 0
  
  elements = {
    wrapper: document.createElement('div'),
    checkbox: document.createElement('input'),
    text: document.createElement('p')
  }
  
  constructor({
                title,
                children = [],
                classes = {
                  wrapper: "list-item",
                  checkbox: 'list-item-checkbox',
                  text: 'list-item-text'
                },
                parent = document.getElementById('root')
              }) {
    this.title = title
    this.children = children
    this.classes = classes
    this.elements.parent = parent
    this.calcValue()
    // this.render()
  }
  
  toggleDone() {
    this.isDone = !this.isDone
    this.progress = this.progress < 1 ? 1 : 0
    this.calcValue()
  }
  
  calcValue() {
    if (this.isDone) {
      this.progress = 1
      return
    }
    if (!this.children.length) {
      this.progress = this.isDone ? 1 : 0
      return
    }
    
    this.children.forEach((childTask) => {
      childTask.value = this.value / this.children.length
    })
    
    this.progress = this.children.reduce((acc, curr) => acc + (curr.value * curr.progress), 0)
  }
  
  handleClick() {
    this.toggleDone()
    
    this.elements.checkbox.checked = this.isDone
    this.render()
  }
  
  render() {
    const {parent, wrapper, checkbox, text} = this.elements;
    
    wrapper.classList.add(this.classes.wrapper)
    checkbox.classList.add(this.classes.checkbox)
    text.classList.add(this.classes.text)
    
    text.textContent = this.title
    checkbox.type = 'checkbox'
    
    checkbox.checked = this.isDone
    
    wrapper.addEventListener('click', e => this.handleClick(e))
    
    wrapper.append(checkbox, text)
    
    parent.append(wrapper)
    
    this.children.length && this.children.forEach(item => item.render())
  }
}