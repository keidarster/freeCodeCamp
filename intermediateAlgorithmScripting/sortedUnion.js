function uniteUnique(arr) {
	let arrOfArrs = []; 
	let arrOfVals = [];
	let result = [];
	for (let i=0; i<arguments.length; i++) {
		arrOfArrs.push(arguments[i]);
	}
	// arrOfArrs = [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
	for (let i=0; i<arrOfArrs.length; i++) {
		for (let j=0; j<arrOfArrs[i].length; j++) {
			arrOfVals.push(arrOfArrs[i][j]);
		}
	}
	// arrOfVals = [ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
	for (let i=0; i<arrOfVals.length; i++) {
		if (result.indexOf(arrOfVals[i]) === -1) {
			result.push(arrOfVals[i])
		}
	}
	console.log(result)
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4]