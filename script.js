'use strict';
// 004.1
// to String
console.log("String() " + typeof(String(null))); // old
console.log("string+ " + typeof("sdf" + 345));

// to Number
console.log("Number()" + typeof(Number("5"))); // old
console.log("+ " + typeof(+"5"));
console.log("+ " + typeof(5 - +"5"));
console.log("parseInt() " + typeof(parseInt("15px", 10)));

// Boolean
console.log("Boolean " + typeof(Boolean("5")));
console.log("!! " + typeof(!!"5"));

// 005