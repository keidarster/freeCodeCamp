function fearNotLetter(str) {
  const alphaBet = "abcdefghijklmnopqrstuvwxyz";
  let alphaBetSplit = alphaBet.split("");
  let strSplit = str.split("");
  let chartStr = [];
  let chartAlphaBet = [];
  let theLetter = "";

  for (let i=0; i<strSplit.length; i++) {
    chartStr.push(strSplit[i].charCodeAt(0));
  }  

  for (let j=0; j<alphaBetSplit.length; j++) {
    chartAlphaBet.push(alphaBetSplit[j].charCodeAt(0));
  }
  
  let strZero = chartStr[0];
  let sliced = [];
  for (let x=0; x<chartAlphaBet.length; x++) {
    if (chartAlphaBet[x] === strZero) {
      sliced = chartAlphaBet.slice(x)
    }
  }

  for (let z=0; z<sliced.length; z++) {
    if (sliced[z] !== chartStr[z]) {
      theLetter = sliced[z];
      break;
    }
  }

  if (str === alphaBet) {
    return undefined;  
  }

  return String.fromCharCode(theLetter);
}
  
  fearNotLetter("abce") // should return "d".
  fearNotLetter("abcdefghjklmno") // should return "i".
  fearNotLetter("stvwx") // should return "u".
  fearNotLetter("bcdf") // should return "e".
  fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.