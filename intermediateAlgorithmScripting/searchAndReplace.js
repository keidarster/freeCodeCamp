// Search and Replace

function myReplace(str, before, after) {
  let splitStr = str.split(" ");
  
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === before) {
      
      if (splitStr[i].charAt(0) === splitStr[i].charAt(0).toLowerCase()) {
        let danach = after.charAt(0).toLowerCase() + after.slice(1);
        console.log(danach);
        splitStr.splice(i, 1, danach);
      }
      
      else if (splitStr[i].charAt(0) === splitStr[i].charAt(0).toUpperCase()) {
        let danach = after.charAt(0).toUpperCase() + after.slice(1);
        console.log(danach);
        splitStr.splice(i, 1, danach);
      }
    }
  }
  console.log(splitStr.join(" "))
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch".

