/**
 * let is block scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// let x = 1;

// if (x === 1) {
//   let x = 2;

//   console.log(x);
//   // expected output: 2
// }

// console.log(x);
// // expected output: 1

/**
 * const is block scope as well
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
// const number = 42;

// // error handling
// try {
//   number = 99;
// } catch (err) {
//   console.log(err); // TypeError: Assignment to constant variable
// }

// console.log(number);

// =========================================
/**
 * var is functional scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 *
 * hoisting
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting
 *
 * declaration will be hoisted, not initialization
 *
 * Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
 * An exception will be thrown if a variable declared with let or const is read before it is initialized
 */

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x); // 2
}

console.log(x); // 2

// An IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("-------");
// })();

/**
 * =======================================
 * scope chain
 */
// const globalVar = 'globalVar';
// function outer() {
//     const outerVar = 'outerVar';
//     console.log(`outer: ${globalVar}`);
//     function inner() {
//         console.log(`inner: ${outerVar}, ${globalVar}`);
//         // inner has access to all variables outside, this is scope chain
//     }
//     inner()
// }
// outer()

/**
 * =======================================
 * closure
 */
// function createCounter(a) {
//   let number = 0;

//   // a,b,c...
//   return function counter(b) {
//     number++;

//     // has access to a, b , c
//     return number + a + b;
//   };
// }

// const response = createCounter("a");
// console.log(response);
// console.log(response("b"));

function makeFuncs() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    console.log("inside block scope of for loop", i);
    funcs[i] = function () {
      console.log(`func ${i}: ${i}`);
    };
  }
  // console.log(i);
  // i = 3 when var, and i is the same outside for loop and inside for loop
  // i is not defined when let, and there are 2 variables(one inside the for loop, the other is outside the for loop)
  return funcs;
}
const functions = makeFuncs();

/**
 * functions = [
 * function() { console.log(`func ${i}: ${i}`)},
 * function() { console.log(`func ${i}: ${i}`)},
 * function() { console.log(`func ${i}: ${i}`)},
 * ]
 */

for (var j = 0; j < 3; j++) {
  functions[j]();
}

/**
 * =====================
 * practice
 */

function makePistol() {
  let bullets = 6;
  return {
    log: function () {
      console.log(bullets);
    },
    shoot: function () {
      if (bullets === 0) {
        console.log("No bullets left!");
        return;
      }
      bullets--;
      console.log(`Bang! Bullets left: ${bullets}`);
    },
    reload: function () {
      bullets = 6;
      console.log(`Reloaded! Bullets left: ${bullets}`);
    },
  };
}

// const variable = 1, '1', true, fucntion
// const variable1 = {}
// variable1.name = 'asdf'
// variable1.age = 'asdf'

// // console.log(makePistol())
// const pistol1 = makePistol()
// makePistol().shoot() // 5
// makePistol().shoot() // 5

// const pistol = makePistol()
// pistol.shoot()
// pistol.shoot()

// const pistol = makePistol()
// pistol.log()
// pistol.shoot()
// pistol.log()
// pistol.shoot()
// pistol.log()

// makePistol().shoot()
// makePistol().shoot()
