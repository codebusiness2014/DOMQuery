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

##### This method is used as a global wrapper for all methods within DOMQuery. Depending on what is being passed in, the method will return something new. Such as:
+ If it's a string, the method will return a new instance of the DOMNodeCollection passing in an array of HTML collection.
+ If it's a function, the function will be passed into the queue (array) in order to be run once the DOM has been loaded.
+ If it's an HTMLElement, it'll create a new DOMNodeCollection instance.

### html
#### Two possible conditions. Such as:
+ If the passed in element is a string. It'll make it the innerHTML of each element in the instance array.
+ Else it'll grab the first element in the array and return it's innerHTML.

### empty
+ This method clears out the node innerHTML (in other words the text).

### append
#### It checks for two conditionals before adding something.
+ If the new element is a DOMNodeCollection, it'll iterate the current initialized DOMNodeCollection array with the new element array and assign the new element to the outer array innerHTML.
+ If it's an HTMLElement or a String, it'll just add the new element to each element innerHTML in the array.

### attr
+ If value is undefined, it'll use getAttribute to obtain the value from the first element in the array.
+ If it isn't undefined, it'll use setAttribute to set an attribute to the named attribute.

### addClass
+ Will add a class to the element.

### removeClass
+ Will remove a class to the element selected.

### children
+ Return a collection of children from the parent (can be multiple parents if multiple element in htmlElements).

### parent
+ Return parent of the children (can be multiple parents if multiple element in htmlElements).

### find
+ Iterates the array and returns all the elements matching the selector.

### remove
+ Remove itself (the element) from it's the parent.

### on
+ Add an event listener to an element.

### off
+ Remove an event listener from an element.
