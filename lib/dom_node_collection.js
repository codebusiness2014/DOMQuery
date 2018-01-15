class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string) {
      this.htmlElements.forEach(htmlElement => {
        htmlElement.innerHTML = string;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.htmlElements.forEach(htmlElement => {
      htmlElement.innerHTML = "";
    });
  }

  append(newElement) {
    const isHTMLElement = newElement instanceof HTMLElement;
    const isString = typeof newElement === "string";

    // Check if the instance is an initialized DOMNodeCollection
    if (newElement instanceof DOMNodeCollection) {
      // Iterate the array of this instance
      this.htmlElements.forEach(outerElement => {
        // Iterate the array within the passed object
        newElement.htmlElements.forEach(innerElement => {
            // Assign each outerElement as parent to each innerElement
          outerElement.innerHTML += innerElement.outerHTML;
        });
      });
      // Check if it's an instance of HTMLElement
    } else if (isHTMLElement || isString) {
      //  Iterate htmlElement
      this.htmlElements.forEach(outerElement => {
        //  Add newElement to the innerHTML of each htmlElement
        outerElement.innerHTML += newElement;
      });
    }
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

  children() {
    let allChildren = [];
    this.arr.forEach( el => {
      allChildren = allChildren.concat(el.children);
    });

    return new DOMNodeCollection(allChildren);
  }

  parent() {
    let allParents = [];
    this.arr.forEach( el => {
      allParents = allParents.concat(el.parentNode);
    });

    return new DOMNodeCollection(allParents);
  }

  find(selector) {
    let allSelectors = [];
    this.arr.forEach( el => {
      allSelectors = allSelectors.concat(el.querySelectorAll(selector));
    });

    return new DOMNodeCollection(allSelectors);
  }

  remove(selector) {
    if (!selector) {
      this.arr.forEach( el => {
        el.parentNode.removeChild(el);
      });
    } else {
      this.find(selector).remove();
    }
  }

  on(type, listener) {
    this.arr.forEach( el => {
      el.addEventListener(type, listener);
      el.func = listener;
    });
  }

  off(type) {
    this.arr.forEach( el => {
      el.removeEventListener(type, el.func);
    });
  }

}

module.exports = DOMNodeCollection;
