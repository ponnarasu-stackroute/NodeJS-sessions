# NodeJS-sessions
## Node JS 
NodeJS gives all the ability of Javascript programing language + Some more to perform server side type of operations. 
What type of operations we usually perform on Server Side ? 
- Reading data from Database or from network.
- Listening for data or requests on a Socket or port
- Reading from File, Writing to a file
- Accessing Message Queues
- Making API requests to other server

## Basics
- parent object:
in browser DOM - we have window object which is parent.
In node environment - process is the root object
- Node never sleeps:
Node never sleep or idle - event loop executes and assigns to c++ job threads
compare to java middle ware - 30% less code lines,20% improved performance in IO operations, optimized cpu resource. 
### ryan dhal creater of node session - must see 
https://www.youtube.com/watch?v=jo_B4LTHi3I
must read - https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1 
functional programming, async programing by event loops/ callback fns, for IO extensive applications.
express js framework for web ie routing resources.
he explains core module http createserver, raw create tcpsockets, then sockets event listener on , sockets emitters, debugger, npm package manager, call backs always to avoid blocking since single threaded - it is actually optimized the resources.  

### week1:
modules  - like packages in java. there are different modularity in js community like amd, commonjs ecma6 modules,etc. node js uses commonjs modules(require)
types - core, third party
module node docs - https://nodejs.org/api/modules.html
lodash - famous lib for collection handling.
we can use yarn also instead of npm install
```
> npm install yarn -g
> yarn
> npm install // we can use any yarn or npm for package json dependencies 
```
mocha - testing framework/ chai- assertion frame
>node_modules/mocha/bin/mocha add.spec.js // to run test

### week 2 Architecture of NodeJS
![Alt text](./pics/node-architecture.JPG "JS+some libraries")
C10M Problem - server to handle concurrent 10 million requests in reasonable time (in milliseconds)

How Node JS achieved the high performance eventhough it is single threaded?


