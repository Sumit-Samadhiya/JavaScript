1.
//What is JavaScript?
//JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for client-side.


/* 2.
--------------------------------------------------------------------------------------------------------------------
 What are the data types in JavaScript?
 JavaScript supports multiple data types, which are devided into primitive and non-primitive types. The primitive data types include:Number,String,Boolean,Null,Undefined,Symbol.
  The non-primitive data types include:Array,Object.
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
let isOld = false;    // no

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

--------------------------------------------------------------------------------------------------------------------
 */


/*3.
--------------------------------------------------------------------------------------------------------------------
What is the difference between null and undefined?
Undefined
undefined is a type that represents an uninitialized or non-existent variable. It is the default value of a variable that has not been assigned a value.
let x;
console.log(x); // undefined

Null
null, on the other hand, is a value that represents the absence of any object value. It is a deliberate assignment of "no value" to a variable.
let x = null;
console.log(x); // null
--------------------------------------------------------------------------------------------------------------------
*/

/*4.
--------------------------------------------------------------------------------------------------------------------
What is the DOM in JavaScript?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. in easy language by the help of dom javascript access the values and properties of html and xml and also can manupilate.
By understanding the DOM, developers can create dynamic, interactive web pages that respond to user input and provide a rich user experience.


const myElement = document.getElementById('myElement');
myElement.innerHTML = 'New text content!';
--------------------------------------------------------------------------------------------------------------------
*/

/* 5.
--------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------
*/


/* 6.
--------------------------------------------------------------------------------------------------------------------
What is an anonymous function in JavaScript?

Anonymous Functions in JavaScript

In simple terms, an anonymous function in JavaScript is a function that doesn't have a name. Yeah, you read that right - no name!

What's the purpose of an anonymous function?

Anonymous functions are used when you need to create a function that's only used once or temporarily. They're like a one-time-use function that's not meant to be reused.

How do you create an anonymous function?

You create an anonymous function by defining a function without giving it a name. Here's an example:
function() {
  console.log('Hello, world!');
}

How do you use an anonymous function?

Anonymous functions are often used as:

Event handlers: You can pass an anonymous function as an event handler to respond to an event, like a button click.
Callback functions: You can pass an anonymous function as a callback to a function that needs to execute some code after completing a task.
Immediately Invoked Function Expressions (IIFE): You can use an anonymous function as an IIFE, which is a function that runs immediately after it's defined.

Example code

Here's an example of using an anonymous function as an event handler:
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});

In this example, the anonymous function is defined inline and passed as an event handler to the addEventListener method.

Why use anonymous functions?

Anonymous functions are useful when:

You need a one-time-use function: You don't need to reuse the function, so there's no need to give it a name.
You want to keep code concise: Anonymous functions can make your code more concise and easier to read.
You need to create a closure: Anonymous functions can create a closure, which is a function that has access to its own scope and the outer scope.

--------------------------------------------------------------------------------------------------------------------
*/




/* 7.
  ------------------------------------------------------------------------------------------------------------------
  What is the difference between == and === in JavaScript?
  In JavaScript, there are two types of equality operators: == (loose equality) and === (strict equality). Understanding the difference between them is crucial for writing accurate and reliable code.

  Loose Equality (==)

  The == operator checks if the values of two variables are equal, but it doesn't care about the data type. It's like comparing apples and oranges - if they look similar, it's good enough!

  Strict Equality (===)

  The === operator checks if the values and data types of two variables are identical. It's like comparing apples to apples - they must be exactly the same!
  ------------------------------------------------------------------------------------------------------------------
*/

/* 8.
-------------------------------------------------------------------------------------------------------------------- What is hoisting in JavaScript?
  Hoisting is a mechanism in JavaScript where variables and functions are moved to the top of their scope, regardless of where they're actually declared.

  Variables Hoisting-

  When you declare a variable using var, JavaScript "hoists" it to the top of its scope, but only the declaration, not the assignment. This means that the variable is moved to the top, but its value is still undefined until the assignment is reached.
  console.log(x); // Output: undefined
  var x = 10;


  Functions Hoisting-

  Functions, on the other hand, are hoisted entirely, including their declarations and definitions. This means that you can call a function before it's actually declared.

  Here's an example:
  hello(); // Output: "Hello, World!"

  function hello() {
    console.log("Hello, World!");
  }
--------------------------------------------------------------------------------------------------------------------
  */

/* 9.
--------------------------------------------------------------------------------------------------------------------What are closures in JavaScript?
A closure is a special type of function in JavaScript that has access to its own scope and the scope of its parent functions.

here is an example of it.
function outer() {
  let secret = "I'm a secret!"; // Parent scope variable

  function inner() { // Closure function
    console.log(secret); // Access parent scope variable
  }

  return inner;
}

const myClosure = outer();
myClosure(); // Output: I'm a secret!
--------------------------------------------------------------------------------------------------------------------
*/

     