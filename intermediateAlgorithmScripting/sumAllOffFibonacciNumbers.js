/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
// This code uses recursion and "fails" one test on the FCC site, but the code is correct and returns the correct results when tested with nodemon

// Fn = F(n-1) + F(n-2) 
function fibo(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return fibo(n-1) + fibo(n-2);
  }
  
  function sumFibs(num) {
    let sum = 0;
    for (let i=0; fibo(i)<= num; i++) {
      if (fibo(i) % 2 === 1) {
        sum+=fibo(i);
      }
    }
    return sum;
  }
  
  console.log(sumFibs(4000000)) //4613732