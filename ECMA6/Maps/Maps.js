var myObj = new Map();
var a = {value: 1},
    b = {value: 2};

myObj.set( a, 5);
myObj.set( b, 10);
console.log(myObj.get(a), myObj.get(b));
