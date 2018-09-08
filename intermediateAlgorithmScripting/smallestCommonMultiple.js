/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	let range = [];
	let small = null;
	let big = null;
	if (arr[0] > arr[1]) {
		big = arr[0];
		small = arr[1];
	}
	else {
		small = arr[0];
		big = arr[1];
	}
	while (small <= big) {
		range.push(small);
		small++;
	}
	let multiplied = 1;
	for (let i=0; i<range.length; i++) {
		multiplied *= range[i];
	}
	// The following code block with the do while loop is from the solution on FCC because I used just a while loop that didn't work.
	let quot = 0;
  let loop = 1;
  let n;
  // Run code while n is not the same as the array length.
  do {
    quot = range[0] * loop * range[1];
    for (n = 2; n < range.length; n++) {
      if (quot % range[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== range.length);

  return quot;
}

smallestCommons([1,5]); // should return 60
smallestCommons([23,18]); // should return 6056820.
smallestCommons([2,10]); // should return 2520.