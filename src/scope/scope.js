/**
 * let is block scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// let x = 1;

// if (x === 1) {
//   let x = 2;

//   console.log(x);
// }

// console.log(x);


/**
 * const is block scope as well
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
// const number = 42;

// try {
//   number = 99;
// } catch (err) {
//   console.log(err);
// }

// console.log(number);

// =========================================
/**
 * var is functional scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x); // 2
// }

// console.log(x); // 2



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
//         // has access to all variables outside, this is scope chain
//     }
//     inner()
// }
// outer()

/**
 * =======================================
 * closure
 */
// function createCounter() {
//     let number = 0;

//     // a,b,c...
//     return function counter() {
//         number++;

//         // has access to a, b , c
//         return number;
//     }
// }

// const response = createCounter()
// console.log(response)
// console.log(response())


// const result = createCounter()
// console.log(result())

// function makeFuncs() {
//     const funcs = [];
//     for (let i = 0; i < 3; i++) {
//         funcs[i] = function() {
//             console.log(`func ${i}: ${i}`);
//         };
//     }
//     return funcs;
// }
// const functions = makeFuncs();

// /**
//  * functions = [
//     * function() { console.log(`func ${i}: ${i}`)},
//     * function() { console.log(`func ${i}: ${i}`)},
//     * function() { console.log(`func ${i}: ${i}`)},
//  * ]
//  */

// for (var j = 0; j < 3; j++) {
//     functions[j](); 
// }


/**
 * =====================
 * practice
 */

function makePistol() {
    let bullets = 6;
    return {
        log: function() {
            console.log(bullets)
        },
        shoot: function() {
            if (bullets === 0) {
                console.log('No bullets left!');
                return;
            }
            bullets--;
            console.log(`Bang! Bullets left: ${bullets}`);
        },
        reload: function() {
            bullets = 6;
            console.log(`Reloaded! Bullets left: ${bullets}`);
        }
    }
}

const pistol = makePistol()
pistol.log()
pistol.shoot()
pistol.log()
pistol.shoot()
pistol.log()