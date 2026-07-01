function checkPrime(n) {
    if (n <= 1) {
        return "not prime";
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "not prime";
        }
    }

    return "prime";
}

console.log(checkPrime(2));   // prime
console.log(checkPrime(7));   // prime
console.log(checkPrime(25));  // not prime
console.log(checkPrime(49));  // not prime
console.log(checkPrime(67));  // prime