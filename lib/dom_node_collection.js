class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(string) {
    if (string) {
      this.arr.forEach( el => {
        el.innerHTML = string;
      });
    } else {
      return this.arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(newElement) {
    this.arr.forEach( innerElement => {
      innerElement.innerHTML += newElement;
    });
  }

  attr(attrName, value) {
    
  }

  addClass() {

  }

  removeClass() {

  }

}

module.exports = DOMNodeCollection;
