const DOMNodeCollection = require('./dom_node_collection');

function $l(selector) {
  let NodeList = document.querySelectorAll(selector);

  if (selector instanceof HTMLElement) {
    arr = Array.from(NodeList);
    return new DOMNodeCollection(arr);
  }
}

window.$l = $l;
