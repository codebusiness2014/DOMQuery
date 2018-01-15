# DOMQuery

### DOMQuery, was build on JavaScript and inspired by jQuery which manipulates the DOM (Document Object Model).
#### Such manipulations are:
+ Be able to Add/Remove classes
+ Be able to search for Parent/Child relationship.
+ Manipulate the DOM elements.

### How to install DOMQuery.

+ Download folder from github.
+ Add folder to your project.
+ Add "./lib/dom_query.js" to your HTML header.

### Description of the Methods included:

### $l(selector)

#### This method is used as a global wrapper for all methods within DOMQuery. Depending on what is being passed in,
#### the method will return something new. Such as:
+ If it's a string, the method will return a new instance of the DOMNodeCollection passing in an array of HTML collection.
+ If it's a function, the function will be passed into the queue (array) in order to be run once the DOM has been loaded.
+ If it's an HTMLElement, it'll create a new DOMNodeCollection instance.

### html
#### Two things happening depending on the condition. Such as:
+ If the passed in element is a string. It'll make it the innerHTML of each element in the instance array.
+ Else it'll grab the first element in the array and return it's innerHTML.

### empty
