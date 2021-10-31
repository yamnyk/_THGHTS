class OneDialog extends HTMLElement {
  static get observedAttributes() {
    return ['open']
  }
  
  constructor() {
    super();
    this.close = this.close.bind(this);
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attrName] = this.hasAttribute(attrName);
    }
  }
  
  connectedCallback() {
    this.appendChild(
      document.importNode(
        document.getElementById('oneDialog').content,
        true
      )
    );
  
    this.querySelector('button').addEventListener('click', this.close);
    this.querySelector('.overlay').addEventListener('click', this.close);
    this.open = this.open;
  }
  
  disconnectedCallback() {
    this.querySelector('button').removeEventListener('click', this.close);
    this.querySelector('.overlay').removeEventListener('click', this.close);
  }
  
  get open() {
    return this.hasAttribute('open');
  }
  
  set open(isOpen) {
    this.querySelector('.wrapper').classList.toggle('open', isOpen);
    this.querySelector('.wrapper').setAttribute('aria-hidden', !isOpen);
    if (isOpen) {
      this._wasFocused = document.activeElement;
      this.setAttribute('open', '');
      document.addEventListener('keydown', this._watchEscape);
      this.focus();
      this.querySelector('button').focus();
    } else {
      this._wasFocused && this._wasFocused.focus && this._wasFocused.focus();
      this.removeAttribute('open');
      document.removeEventListener('keydown', this._watchEscape);
      this.close();
    }
  }
  
  close() {
    if (this.open !== false) {
      this.open = false;
    }
    const closeEvent = new CustomEvent('dialog-closed');
    this.dispatchEvent(closeEvent);
  }
  
  _watchEscape(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}

customElements.define('one-dialog', OneDialog);

const button = document.getElementById('launch-dialog');
button.addEventListener('click', () => {
  document.querySelector('one-dialog').open = true;
});