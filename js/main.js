let fac = document.getElementById("fac");
let fib = document.getElementById("fib");
let expCoef = document.getElementById("expCoef");
let expPow = document.getElementById("expPow");

fac.addEventListener("keyup", function() {
	document.getElementById("fac-result").innerText = factorial(fac.value)
});

fib.addEventListener("keyup", function() {
	document.getElementById("fib-result").innerText = fibonacci(fib.value)
});

expCoef.addEventListener("keyup", exp);
expPow.addEventListener("keyup", exp);

function exp() {
	document.getElementById("exp-result").innerText = exponential(expCoef.value, expPow.value)
}