function convertHTML(str) {
  let splittedStr = str.split("");
  for (let i=0; i<splittedStr.length; i++) {
    if (splittedStr[i] === "&") {
      splittedStr.splice(i, 1,"&amp;")
    }
    if (splittedStr[i] === "<") {
      splittedStr.splice(i, 1,"&lt;")
    }
    if (splittedStr[i] === ">") {
      splittedStr.splice(i, 1,"&gt;")
    }
    if (splittedStr[i] === '"') {
      splittedStr.splice(i, 1, "&quot;")
    }
    if (splittedStr[i] === "'") {
      splittedStr.splice(i, 1,"&apos;")
    }
  }
  
  let joinedStr = splittedStr.join("");
  
  console.log(joinedStr);
}

convertHTML("Schindler's List") // should return Schindler & ​apos; s List