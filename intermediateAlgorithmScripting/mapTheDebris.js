/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number ( Math.round() ). The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Math.round((Math.PI*2)*(Math.sqrt(Math.pow((earthRadius + avgAlt),3) / GM)))
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
	var earthRadius = 6367.4447;
	arr.forEach((obj) => {
		let orbital = Math.round((Math.PI * 2)*(Math.sqrt(Math.pow((earthRadius + obj.avgAlt),3) / GM)));
		delete obj.avgAlt;
		obj.orbitalPeriod = orbital;
	})
	return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); // should return [{name: "sputnik", orbitalPeriod: 86400}]


