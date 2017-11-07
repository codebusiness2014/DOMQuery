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
    this.arr.forEach( el => {
      el.setAttribute(attrName, value);
    });
  }

  addClass(className) {
    this.arr.forEach( el => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.arr.forEach( el => {
      el.classList.remove(className);
    });
  }

}

module.exports = DOMNodeCollection;
