var myObj = new Map();

var a = { value: 10 }, b = { value: 8 }

myObj.set(a, 19);
myObj.set(b, 15);
console.log(myObj.get(a), myObj.get(b));

var myObj2 = new WeakMap();
var t = { value: 15 }, d = { value: 16 };

myObj2.set(t, 33);
myObj2.set(d, 55);