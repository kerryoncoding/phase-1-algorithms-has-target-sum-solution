function hasTargetSum(array, target) {
  // Write your algorithm here
  // Add your pseudocode here
  // create empty object
  const checkedObjects = {}
  // for each item in array...
  //   determine complement of target ()
  for (let i=0; i<array.length; i++){
    let complement = target - array[i]
    //   check object for complement
     //  if complement = target,  return true
    if (checkedObjects[complement]) {return true}
    //   add item to object
    else {checkedObjects[array[i]] = true};
  }
  // return false
  return false  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create empty object
  for each item in array...
    determine complement of target ()
    add item to object
    check object for complement
      if complement = target return true
  
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
