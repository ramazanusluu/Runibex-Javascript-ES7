// 1.problem - isimlendirme çakışması
// // script.js
// var name = "Asya";
// // app.js
// var name = "Ramazan";
// console.log(name);

//---------------------------------------------------------
// 2.problem - Encapsulation
// var Counter = {
//   number: 0,
//   increment: function () {
//     return ++this.number;
//   },
//   decrement: function () {
//     return --this.number;
//   },
// };

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

//---------------------------------------------------------
// IIFE (Immediately Inkoved Function Expressions)
// //script.js
// (function () {
//   var name = "Ramazan";
//   console.log(name);
// })();
// //app.js
// (function () {
//   var name = "ASYA";
//   console.log(name);
// })();

//---------------------------------------------------------
var Module = (function () {
  //private members
  let number = 0;
  let increment = function () {
    return ++number;
  };
  let decrement = function () {
    return --number;
  };
  return {
    //public members
    increment,
    decrement,
  };
})();

// console.log(number);
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.decrement());

//---------------------------------------------------------

var Module2 = (function () {
  var privateMethod = function () {};
  return {
    publicMethod: function () {},
  };
})();

Module2.publicMethod();
