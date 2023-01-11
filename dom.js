/*

- JavaScript makes webpages interactive with the help of DOM

- What is DOM?

1. D for Document => HTML creates the main structure of a website. This HTML file is a document.
2. O for Object => The HTML document consists of HTML elements. For JavaScript to work with HTML elements, browser converts the elements into JS objects. So, HTML elements are the objects of the document.
3. M for Model => Every HTML document has a tree structure. This tree structure is called the Model.

- Through DOM we can do CRUD operation.

*/

/*
- get title: document.title
- get URL : document.URL
- get domain: document.domain
- get <head> : document.head
- get body : document.body
- set title : document.title = "Play with DOM";
- get all the elements(objects): document.all
- document.all returns HTMLAllCollection object which is not an array but we can do anything like an array.
- document.images - returns HTMLCollection of images.
- document.forms, document.links...
*/

// Get HTML Elements Using Different Methods
/*
1. document.getElementById("id"); // document >> [[prototype]] = HTMLDocument.Prototype >> [[prototype]] = Document.prototype >> getElementById();
2. document.getElementsByClassName("className"); returns an HTML collection object, so we use for of loop to select every element in the collection.
3. You can run get operation not just on document object but on any HTML element object. Because getElementById / getElementsByClassName is in Document.prototype
    - const firstList = document.getElementById("firstList");
    - firstList.getElementsByClassName("className");
4. document.getElementsByTagName("tagName") returns an HTMLCollection object.
// Apply any kind of css selector inside these two methods
5. document.querySelector(".className / #id / tagName"); returns a single element / first element in case of class
6. document.querySelectorAll(".className / tagName"); returns an NodeList (same as HTMLCollection)
   document.querySelectorAll(".className:last-child"); returns all last child of different parents.

7. const parent = document.querySelector("#items");
    const children = parent.children; // alternative to : parent.querySelectorAll(".item");

8. const children = document.querySelector(".item");
    const parent = children.parentElement;

9. const grandChildren = document.querySelector(".item");
    const grandParent = grandChildren.closest(".todo-list"); // returns the closest ancestor

10. const children = document.querySelector(".item");
    const nextSibling = children.nextElementSibling;

11. const children = document.querySelector(".item:last-child");
    const previousSibling = children.previousElementSibling;

*/

// Create operations
/* 

- createElement: const element =  document.createElement("tagName");
- add a class to an element: element.className = "class-name";
- add any attribute to an element: element.setAttribute("attributeName", "attributeValue");
    Example: element.setAttribute("id", "new-id");
- add an element to a particular parent but before a specific child:
        const parent = document.querySelector(".todo-list");
        const h2Element = parent.querySelector("h2");
        parent.insertBefore(element, h2Element);
- add an element to a particular parent:
        parent.append(element);
--------- or ---------------------
        parent.appendChild(element);
- Differences between append() and appendChild() 
    1. append() takes text and anything but appendChild() takes only elements
    2. appendChild() returns the inserted element but append() doesn't
    3. append() takes multiple nodes(childs) but appendChild() takes only one
*/


// Update HTML Elements

/* 
const element = document.getElementById("id");
element.textContent = "New Text";
----------- or -------------------
element.innerText = "New Text";
- Difference between textContent & innerText are:
1. textContent returns the actual text inside HTML tag.
2. innerText returns the text that is the final output displayed in browser.

- element.innerHTML; returns the innerHTML in string.
- element.style.color = "red"; // changes the color the element
- element.style.borderBottom = "2px solid red"; // changes the border
- element.style.fontSize,

- for (const item of itemCollection) {item.style.color = "red"}; // when itemCollection is an output of getElementsByClassName;

*/

// DOM Event Listeners

/* 
const element = document.querySelector("#header");

- element.addEventListener("eventName", (event) => {
    console.log(event); // returns the event object

    console.log(event.target); // returns the element on which the event is fired
    console.log(event.target.value); // returns the value of the element
})

- mouseover vs mouseenter => mouseover fires the event for container & containers children
                          => mouseenter fires the event only for container

- prevent default behaviour of form submission - event.preventDefault();

*/