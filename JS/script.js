// var

var a = 10;
console.log(a);
{
    var a = 20;
    console.log(a);
}
var a = 30;
console.log(a);


// let

let b = 10;

{
    let b = 20;
    console.log(b);
    {

        let b = 5;
        console.log(b);
    }
    console.log(b);
}

console.log(b);


// const

const c = 10;

{
    const c = 20;
    console.log(c);
    {

        const c = 5;
        console.log(c);
    }
    console.log(c);
}

console.log(c);


// Functions

function myFunction(g, h) {

    let e = 30;
    e = g;
    let f = 2;
    let c = e + f;
    console.log(c);
    console.log(g + h);
}
myFunction(15, 20);


// let changable value

let x = 100;
let y = 200;

x = y;
console.log(x);



