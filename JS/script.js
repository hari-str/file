// Call, Apply , Bind

let person1 = {
    name: "hari",
    age: 22,

    personInfo: function (city) {
        return this.name + this.age + city;
    }
}

let person2 = {
    name: "muthu",
    age: 21,

}

let person3 = {
    name: "arun",
    age: 23,
}
// call
console.log(person1.personInfo.call(person2, "vnr"));

// apply

console.log(person1.personInfo.apply(person3, ["Tanjore"]));

// bind

let x = person1.personInfo.bind(person3, "CBE");
console.log(x());

//--------------------------------------------------------------------------------------------------

// object Binding

// let pname = {
//     name: "hari",
//     age: 22,

//     personDetails: function () {
//         return this.name + this.age;
//     }

// }

// console.log(pname.personDetails());

//--------------------------------------------------------------------------------------------------
// Strict Method
// function newObject() {
//     return this;
// }

// console.log(newObject());

//--------------------------------------------------------------------------------------------------
// map array()

// const number1 = [1, 2, 3, 4, 5];
// const number2 = number1.map(myFunc);
// console.log(number1)
// console.log(number2);

// function myFunc(value, index, array) {
//     return value + 2;
// }

//--------------------------------------------------------------------------------------------------

// // var

// var a = 10;
// console.log(a);
// {
//     var a = 20;
//     console.log(a);
// }
// var a = 30;
// console.log(a);

//--------------------------------------------------------------------------------------------------
// // let

// let b = 10;

// {
//     let b = 20;
//     console.log(b);
//     {

//         let b = 5;
//         console.log(b);
//     }
//     console.log(b);
// }

// console.log(b);

//--------------------------------------------------------------------------------------------------
// // const

// const c = 10;

// {
//     const c = 20;
//     console.log(c);
//     {

//         const c = 5;
//         console.log(c);
//     }
//     console.log(c);
// }

// console.log(c);

//--------------------------------------------------------------------------------------------------

// // Functions

// function myFunction(g, h) {

//     let e = 30;
//     e = g;
//     let f = 2;
//     let c = e + f;
//     console.log(c);
//     console.log(g + h);
// }
// myFunction(15, 20);

//--------------------------------------------------------------------------------------------------

// // let changable value

// let x = 100;
// let y = 200;

// x = y;
// console.log(x);

//--------------------------------------------------------------------------------------------------


