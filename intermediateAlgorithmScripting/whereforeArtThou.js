function whatIsInAName(collection, source) {
  var arr = [];
  function isSubset(obj1, obj2) {
    for (let j=0; j<Object.keys(obj1).length; j++) {
      if (obj1[Object.keys(obj1)[j]] !== obj2[Object.keys(obj1)[j]]) {
        return false;
      }
    }
    return true;
  }
  
  for (let i=0; i<collection.length; i++) {
    if (isSubset(source, collection[i])) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
 
let thirdTest = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

let fourthTest = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

let fifthtest = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

console.log(fifthtest);
