1.
//What is JavaScript?
//JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for client-side.


/* 2.
 What are the data types in JavaScript?
 JavaScript supports multiple data types, which are devided into primitive and non-primitive types. The primitive data types include:Number,String,Boolean,Null,Undefined,Symbol.

1. Number
The number type in JavaScript contains both integer and floating-point numbers. Besides regular numbers, there are also some special numbers: Infinity, -Infinity, and NaN. Infinity represents the mathematical infinity, NaN denotes a computational error.

let num = 2; // Integer
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN

2. String
A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript: single quotes, double quotes, and backticks. Backticks provide extra functionality, allowing you to embed variables inside them.

let str = "Hello There";
let str2 = 'Single quotes works fine';
let phrase = can embed ${someVariable};


3. Boolean
The boolean type has only two values: true and false. This data type is used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let isCoding = true; // yes
let isOld = false;      // no

4. Null
A special value that represent the absence of any object value.

let age = null;

5. Undefined
Undefined makes its own type. The meaning of undefined is ‘value is not assigned’.

let x;
console.log(x);  // undefined

6. Symbol
In JavaScript, a Symbol is a primitive data type introduced in ECMAScript 2015 (ES6). It is a unique and immutable value that can be used as a property key in an object.

The non-primitive types include Object, Array, and Function.

Note that BigInt is also a primitive type in JavaScript, which is used to represent big integers more accurately.

 */


/*3.
What is the difference between null and undefined?
Undefined
undefined is a type that represents an uninitialized or non-existent variable. It is the default value of a variable that has not been assigned a value.
let x;
console.log(x); // undefined

Null
null, on the other hand, is a value that represents the absence of any object value. It is a deliberate assignment of "no value" to a variable.
let x = null;
console.log(x); // null

*/

/*4.
What is the DOM in JavaScript?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. in easy language by the help of dom javascript access the values and properties of html and xml and also can manupilate.
By understanding the DOM, developers can create dynamic, interactive web pages that respond to user input and provide a rich user experience.


const myElement = document.getElementById('myElement');
myElement.innerHTML = 'New text content!';

*/

/* 5.
What is an event in JavaScript?

Events in JavaScript

In simple terms, an event in JavaScript is like a notification that something has happened on a web page. It's like a message that says, "Hey, something just happened! Do something about it!"

What triggers an event?

Events are triggered by user interactions, such as:

Clicking a button: When you click a button, an event is triggered.
Typing in a form: When you type something in a form field, an event is triggered.
Hovering over an image: When you move your mouse over an image, an event is triggered.
Loading a page: When a web page finishes loading, an event is triggered.
What happens when an event is triggered?

When an event is triggered, JavaScript code can be executed in response to that event. This code is called an event handler or event listener.

Think of it like a recipe:

Event: Something happens on the web page (e.g., a button is clicked).
Event handler: JavaScript code is executed in response to the event (e.g., a message is displayed).
Example code

Here's an example of an event handler that displays a message when a button is clicked:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

Common events

Here are some common events in JavaScript:

click: Triggered when an element is clicked.
hover: Triggered when an element is hovered over.
submit: Triggered when a form is submitted.
load: Triggered when a page finishes loading.
scroll: Triggered when a page is scrolled.
Conclusion

In summary, events in JavaScript are like notifications that something has happened on a web page. By using event handlers, you can write code that responds to these events and creates interactive web pages.


*/