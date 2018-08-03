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
