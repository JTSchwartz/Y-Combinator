function yCombinator(recFunc) {
	function recursion(func) {
		return func(func)
	}
	
	function pseudo(func) {
		return recFunc((...arg) => {
			return func(func)(...arg)
		})
	}
	
	return recursion(pseudo)
}

function factorial(arg) {
	return yCombinator((func) => {
		return (n) => {
			if (n <= 1) return n;
			
			return n * func(--n)
		}
	})(arg)
}

function fibonacci(arg) {
	return yCombinator((func) => {
		return (n) => {
			if (n <= 1) return n;
			
			return func(n - 1) + func(n - 2)
		}
	})(arg)
}

function exponential(coef, exp) {
	return yCombinator((func) => {
		return (x, n) => {
			if (n === 0) {
				return 1
			} else if (x === 0) {
				return 0
			}
			
			return x * func(x, n - 1)
		}
	})(coef, exp)
}