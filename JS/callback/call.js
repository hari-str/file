// synchronous
// function sync() {
//     console.log("hello");
//     console.log("this is synchronous");

// }
// sync();


// asynchronous

// function asyn() {
//     console.log("first Idly")

//     setTimeout(() => {
//         console.log("second dosa");
//     }, 5000);

//     console.log("third porata");
// }
// asyn();


// function with another funtion arguments passed

// function callback() {
//     console.log("callback is working...");
// }

// function myfunction(fn) {
//     console.log("first");
//     fn();
//     console.log("second");
// }

// myfunction(callback);


// function newfunc(c, d) {
//     console.log("hari", c);
//     d(5, 6);
// }

// function secFun(a, b) {
//     console.log(a + b);
// }

// newfunc("hello", secFun);

// another method -ananymous function

// function newfunc(c, d) {
//     console.log("hari", c);
//     d(5, 6);
// }

// newfunc("hello", function secFun(a, b) {
//     console.log(a + b);

// });



// promise

var p1 = new Promise(function (resolve, reject) {
    resolve([1, 2, 3, 4, 5]);
    reject("Error");
});
p1.then(function (a) {
    console.log(a);

}).catch(function abbc(r) {
    console.log(r);
});


// async function f() {

//     var p1 = new Promise(function () {
//         setTimeout(() => {

//             var r = document.createTextNode("welcome");
//             document.body.appendChild(r)
//             console.log(r);
//         }, 5000);
//     })
//     var result = await Promise;
//     alert("this is await", result);
// }
// f();

