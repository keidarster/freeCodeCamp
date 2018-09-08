// DNA Pairing
// Base pairs are a pair of AT and CG
function pairElement(str) {
	let mainArr = [];
	let subArr = [];	
	let splitted = str.split("");
  for (let i=0; i<splitted.length; i++) {
			if (splitted[i] === "A") {
				subArr.push(splitted[i]);
				subArr.push("T");
				mainArr.push(subArr);
				subArr = [];
			}
			else if (splitted[i] === "T") {
				subArr.push(splitted[i]);
				subArr.push("A");
				mainArr.push(subArr);
				subArr = [];
			}
			else if (splitted[i] === "C") {
				subArr.push(splitted[i]);
				subArr.push("G");
				mainArr.push(subArr);
				subArr = [];
			}
			else if (splitted[i] === "G") {
				subArr.push(splitted[i]);
				subArr.push("C");
				mainArr.push(subArr);
				subArr = [];
			}
		}
		return mainArr;
  }
  
  pairElement("ATCGA") // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
	
	pairElement("GCG"); // should return [["G", "C"], ["C","G"],["G", "C"]].
  
  // pairElement("TTGAG") // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

  // pairElement("CTCTA") // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].