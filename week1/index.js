const adddtion = require('./add.js');


function add (){
let sum = adddtion.add(3,5);
console.log(sum);
}
function updateNames(){
    adddtion.updateArray(['a','b'],'ponn');
}

add();
updateNames();