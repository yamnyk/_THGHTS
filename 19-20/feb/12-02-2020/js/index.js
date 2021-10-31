class MyFirstComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>My own header</h1>`
  }
}

customElements.define('my-component', MyFirstComponent);

/* * * * * * * * * * * * * * * * * * * * */
const shadowNode = document.getElementById('example').attachShadow({mode: 'open'});

shadowNode.innerHTML = `
<style>
button {
  background-color: tomato;
  color: white;
}
</style>
<button id="button">
  <slot></slot>
  TO-MA-TO
</button>
`;

/*******************************/

const fragment = document.getElementById("book-template");
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
  { title: 'Catch 22', author: 'Joseph Heller' }
];

books.forEach(b => {
  const instance = document.importNode(fragment.content, true);
  instance.querySelector('.title').innerText = b.title;
  instance.querySelector('.author').innerText = b.author;
  
  document.getElementById('books').appendChild(instance);
});

/*******************************/

function appendBooks(templateID) {
  const bookList = document.getElementById('books');
  const template = document.getElementById(templateID);
  
  bookList.innerHTML = '';
  
  books.forEach(b => {
    const instance = document.importNode(template.content, true);
    instance.querySelector('.title').innerText = b.title;
    instance.querySelector('.author').innerText = b.author;
    
    document.getElementById('books').appendChild(instance);
  });
  
}
document.getElementById('templates').addEventListener('change', e => {
  appendBooks(event.target.value);
});

appendBooks('book-template');

