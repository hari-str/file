function calculateSum() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let sum = Number(a) + Number(b);
    console.log(sum);

    document.getElementById("print_value").innerHTML = sum;
}

