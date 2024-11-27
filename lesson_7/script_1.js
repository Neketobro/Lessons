/*****************
 *  callback
 ****************/



// const array = [1, 2, 3, 4, 5, 6];

// // const newArray = array.map(function(el, i, array) {
// //     return el * 2;
// // });

// function myMap(array, cb) {
//     const newArray =  [];

//     for (let i = 0; i < array.length; i++) {
//         newArray[i] = cb(array[i]);
//     }

//     return newArray;
// }
 
// function cb(el) {
//     return el * 2;
// }

// console.log(array);
// console.log(myMap(array, cb));



/*****************
 *  
 ****************/

// //outer => null
//     // a() => function
//     // x = unitialization
//     // concole => window
// let x; // globl scope x = undfind
// x = 5; // x = 5
// x = 10; // x = 10

// function a() {
//     // y = initialization
//     // x = 10
//     // b () => function
//     let y = 5; // y = 5
//     // y = 5
//     // x = 10
//     // b() => function
//     // concole => window
//     function b() {
//         // x = 10
//         // y = 5
//         // z = initialization
//         // concole => window
//         let z = 1; // z = 1
//         // concole => window
//         console.log(x + y + z); // 10 + 5 + 1
//     }
//     b();
// }

// a(); // 16


/*****************
 *  carrying - карірованіє
 ****************/

// foo(a, b, c) => foo(a)(b)(c)


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 3)); // 4

// ==>

// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }
// console.log(sum(1)(3)); // 4



// function mult(a) {
//     return function (b) {
//         return a * b;
//     }
// }

// console.log(mult(2)(2));

// const double = mult(2);
// const triple = mult(2);

// console.log(double(2));
// console.log(triple(3));


/*****************
 *  closure - замикання
 ****************/

// function foo() {
//     const a = 'example';
    
//     return function () {
//         console.log(a);
//     }
// }

// foo()(); // example


/*****************
 * infinity
 ****************/

function sum(a) {
    let currentSum = a;

    function add(b) {
        currentSum += b;
        return add;
    };

    add.print = function () {
        return currentSum;
    };

    return add;
}

const total = sum(1)(1)(1)(1)(1).print();

console.log(total);