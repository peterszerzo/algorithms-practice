// λf.(λx.f(xx))(λx.f(xx))

const Y = f => (x => x(x))(x => f(y => x(x)(y)))
// Naive implementation, not understanding the notation yet :)
const Ynaive = f => (x => f(x(x)))(x => f(x(x)))

// Generate factorial implementation without self-reference
const factorialGen = f => x => (x === 0 ? 1 : x * f(x - 1))

// Use the Y-combinator to create a factorial function
const factorial = Y(factorialGen)

// Test
console.log(factorial(3))
