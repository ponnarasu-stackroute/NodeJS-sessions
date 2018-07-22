const lodash = require('lodash'); 

function add(a,b){
    return a+b;
}
function updateArray(name,upname){
    console.log(name);
    lodash.fill(name,upname);
    console.log(name);
}

module.exports = {
    add,
    updateArray
};