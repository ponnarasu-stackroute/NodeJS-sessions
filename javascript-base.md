## Javascript

### frontend broser js engine : 
chrome - V8 engine
mozilla - spider monkey
IE - chakra
opera - blink(formarly presto)

### backend js engine: 
Node JS - runs in V8 engine

## JS tutorial
for browser - window object is parent.
for Node JS - Process object is parent.

### use strict
to turn our js engine work only in modern way
```
"use strict";
alert(123);
```
### variable and declaration and datatypes
To create a variable in JavaScript, we need to use the let keyword. var is used earlier in older versions.
case sensitive. only letters, digits, symbols $ and _ allowed. number should not the starting of name.
```
let message; // variable declaration
const myBirthday = '18.04.1982'; //constant
message = 'Hello';

//null
let age = null; //in JS null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. it is simply empty

//undefined - The special value undefined stands apart. It makes a type of its own, just like null.
//The meaning of undefined is “value is not assigned”.
//If a variable is declared, but not assigned, then its value is exactly undefined.
let x;
alert(x); // shows "undefined"

//number
let n = 123;
alert( 1 / 0 ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous

//strings
let name = "John";//no difference bw '' & "" in js

alert( `Hello, ${name}!` ); // Hello, John! `` is extended fn in js

//logical operator
let nameFieldChecked = true; 
alert(true||false);//true  - &&/||/! operators
alert(10<3);

//typeof operator - typeof(x) functional form or typeof x
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof Math // "object"  (1)Math is a built-in object that provides mathematical operations.
typeof null // "object"  (2) The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility.
typeof alert // "function"  (3)

//strict equality
A strict equality operator === checks the equality without type conversion.
alert( 0 === false ); // false, because the types are different
alert( '' == false ); // true
```

### objects
//Objects - primitives store single thing. objects can store multiple elements of different datatypes.
```
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
alert( user.name );
delete user.age;

// similarly instead of dot operator, sq brackets can also be used
let key = prompt("What do you want to know about the user?", "name");
alert( user[key] ); // John (if enter "name") user.key is similar

//__reserved are not allowed
let obj = {};
obj.__proto__ = 5; // wont accept the value. historical reasons __proto__ is still used.

//existence check
There exists a special operator "in" to check for the existence of a property.
let user = { age: 30 };
let key = "age";
alert( key in user ); // true,

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for(let key in user) {*******************
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```
### Functions
recommended that A function should do exactly what is suggested by its name, no more.
function names -the jQuery framework defines a function $. The LoDash library has its core function named _.

```
//two ways of creating functions
1.Function Declaration
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

// empty return- If a function does not return a value, it is the same as if it returns undefined
A function with an empty return or without it returns undefined
function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true

//In JavaScript, a function is a value, so we can deal with it as a value. So we can work with it like with other kinds of values.
2. Function Expression // note there is semi-colon at the end
let sayHi = function() {
  alert( "Hello" );
};
let func = sayHi;    //  copy the fn. think fn as other values

```
### call back functions
refer: https://javascript.info/function-expressions-arrows
passing functions as values and using function expressions called callbacks actually.
```
eg1:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
In our case, showOk becomes the callback for the “yes” answer, and showCancel for the “no” answer.
Regular values like strings or numbers represent the data.A function can be perceived as an action.

eg2: shorter format of earlier code
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

eg3: causes error
let age = 16; // take 16 as an example
if (age < 18) {
  welcome();               // \   (runs                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared                         //  |
  welcome();               // /   (runs)
} else {
  function welcome() {     //  for age = 16, this "welcome" is never created
    alert("Greetings!");
  }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

Remedy:
let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // ok now

remedy- simpler way:
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };
welcome(); // ok now

3. ARROW FUNCTIONS:
The arrow function is a shorter form of functional expressions
JavaScript is full of situations where we need to write a small function, that’s executed somewhere else.
eg:
arr.forEach(func) – func is executed by forEach for every array item.
setTimeout(func) – func is executed by the built-in scheduler.
As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is taken from the outside.
let sum = (a, b) =>{ a + b;};//curly brace is when multiline fn used

```
