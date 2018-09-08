/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let stringedNum = "";
  if (typeof num === "number") {
    stringedNum = num.toString();
  }
  // Input number converted to string and then split into an array
  let arrStringedNum = stringedNum.split("");
  // A loop which converts the stringed numbers into integers
  for (let i = 0; i < arrStringedNum.length; i++) {
    if (typeof arrStringedNum[i] !== "number") {
      arrStringedNum[i] = parseInt(arrStringedNum[i]);
    }
  }
  // arrStringedNum is now an array of integers
  
  let arrLength = arrStringedNum.length;
  
  // This code block deals with converting singal digits into their corresponding roman numerals
  if (arrLength === 1) {
    if (num < 4) {
      let val = "";
      for (let i = 0; i < num; i++) {
        val += "I";
      }
      return val;
    }
    else if (num === 4) {
      return "IV";
    }
    else if (num === 5) {
      return "V";
    }
    else if (num > 5 && num !== 9) {
      let fiver = "V";
      let overFive = "";
      for (let i = 5; i < num; i++) {
        overFive += "I";
      }
      return fiver + overFive;
    }
    else {
      return "IX";
    }
  }
  // END code block
  ////////////////////////////////////
  
  // A helper function for converting the second digit in a double digit number into roman numerals.
  function auxDoubleDigit(intg) {
    if (intg < 4) {
        let val = "";
      for (let i = 0; i < intg; i++) {
          val += "I";
        }
        return val;
      }
    else if (intg === 4) {
        return "IV";
      }
    else if (intg === 5) {
        return "V";
      }
    else if (intg > 5 && intg !== 9) {
        let fiver = "V";
        let overFive = "";
      for (let i = 5; i < intg; i++) {
          overFive += "I";
        }
        return fiver + overFive;
      }
    else {
      return "IX";
    }
  }
  // END helper function
  ////////////////////////////

  // This code block deals with converting double-digit numbers into their corresponding roman numerals
  if (arrLength === 2) {
    if (arrStringedNum[0] < 4) {
      let xVal = "";
      for (let i = 0; i < arrStringedNum[0]; i++) {
        xVal += "X";
      }
      return xVal + auxDoubleDigit(arrStringedNum[1]);
    }
    else if (arrStringedNum[0] === 4) {
      return "XL" + auxDoubleDigit(arrStringedNum[1]);
    }
    else if (arrStringedNum[0] === 5) {
      return "L" + auxDoubleDigit(arrStringedNum[1]);
    }
    else if (arrStringedNum[0] > 5 && arrStringedNum[0] !== 9) {
      let fifty = "L";
      let overFifty = "";
      for (let i = 5; i < arrStringedNum[0]; i++) {
        overFifty +=  "X";
      }
      return fifty + overFifty + auxDoubleDigit(arrStringedNum[1]);
    }
    else {
      return "XC" + auxDoubleDigit(arrStringedNum[1]);
    }
  }
  // END code block
  ////////////////////////////

  // A helper function for a 3 digit case
  function auxThreeDigit(intg) {
    if (intg < 4) {
        let val = "";
      for (let i = 0; i < intg; i++) {
          val += "X";
        }
        return val;
      }
    else if (intg === 4) {
        return "XL";
      }
    else if (intg === 5) {
        return "L";
      }
    else if (intg > 5 && intg !== 9) {
        let fiver = "L";
        let overFive = "";
      for (let i = 5; i < intg; i++) {
          overFive += "X";
        }
        return fiver + overFive;
      }
    else {
      return "XC";
    }
  }
  // END code block
  ////////////////////////////

  // This code block deals with converting three-digit numbers into their corresponding roman numerals
  if (arrLength === 3) {
    if (arrStringedNum[0] < 4) {
      let cVal = "";
      for (let i = 0; i < arrStringedNum[0]; i++) {
        cVal += "C";
      }
      return cVal + auxThreeDigit(arrStringedNum[1]) + auxDoubleDigit(arrStringedNum[2]);
    }
    else if (arrStringedNum[0] === 4) {
      return "CD" + auxThreeDigit(arrStringedNum[1]) + auxDoubleDigit(arrStringedNum[2]);
    }
    else if (arrStringedNum[0] === 5) {
      return "D" + auxThreeDigit(arrStringedNum[1]) + auxDoubleDigit(arrStringedNum[2]);
    }
    else if (arrStringedNum[0] > 5 && arrStringedNum[0] !== 9) {
      let fivehundred = "D";
      let overFifty = "";
      for (let i = 5; i < arrStringedNum[0]; i++) {
        overFifty +=  "C";
      }
      return fivehundred + overFifty + auxThreeDigit(arrStringedNum[1]) + auxDoubleDigit(arrStringedNum[2]);
    }
    else {
      return "CM" + auxThreeDigit(arrStringedNum[1]) + auxDoubleDigit(arrStringedNum[2]);
    }

  }
  // END code block
  ////////////////////////////

  // A helper function for a 4 digit case
function auxFourDigit(intg) {
  if (intg < 4) {
      let val = "";
    for (let i = 0; i < intg; i++) {
        val += "C";
      }
      return val;
    }
  else if (intg === 4) {
      return "CD";
    }
  else if (intg === 5) {
      return "D";
    }
  else if (intg > 5 && intg !== 9) {
      let fiver = "D";
      let overFive = "";
    for (let i = 5; i < intg; i++) {
        overFive += "C";
      }
      return fiver + overFive;
    }
  else {
    return "CM";
  }
}
// END code block
////////////////////////////

// This code block deals with converting four-digit numbers into their corresponding roman numerals
if (arrLength === 4) {
  if (arrStringedNum[0] < 4) {
    let mVal = "";
    for (let i = 0; i < arrStringedNum[0]; i++) {
      mVal += "M";
    }
    return mVal + auxFourDigit(arrStringedNum[1]) + auxThreeDigit(arrStringedNum[2]) + auxDoubleDigit(arrStringedNum[3]);
  }
  else if (arrStringedNum[0] === 4) {
    return "CD" + auxFourDigit(arrStringedNum[1]) + auxThreeDigit(arrStringedNum[2]) + auxDoubleDigit(arrStringedNum[3]);
  }
  else if (arrStringedNum[0] === 5) {
    return "D" + auxFourDigit(arrStringedNum[1]) + auxThreeDigit(arrStringedNum[2]) + auxDoubleDigit(arrStringedNum[3]);
  }
  else if (arrStringedNum[0] > 5 && arrStringedNum[0] !== 9) {
    let fivehundred = "D";
    let overFifty = "";
    for (let i = 5; i < arrStringedNum[0]; i++) {
      overFifty +=  "C";
    }
    return fivehundred + overFifty + auxFourDigit(arrStringedNum[1]) + auxThreeDigit(arrStringedNum[2]) + auxDoubleDigit(arrStringedNum[3]);
  }
  else {
    return "CM" + auxFourDigit(arrStringedNum[1]) + auxThreeDigit(arrStringedNum[2]) + auxDoubleDigit(arrStringedNum[3]);
  }

}
// END code block
////////////////////////////
}

console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"
