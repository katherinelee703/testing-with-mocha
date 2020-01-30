const twoSum = (arr, targetNum) => {
  let resultArr = [];
  if (arr.length < 2) {
    return resultArr;
  } else {
    let indexArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetNum && arr[i] !== arr[j]) {
          indexArr.push(i, j);
          return indexArr;
        }
      }
    }
  }
};

module.exports = twoSum;

// if (arr[i] === arr[j]) {
// 	//console.log("this is i: " + i, "this is j: " + j);
// 	continue;
// } else {
// 	indexArr.push(i, j);
// 	return indexArr;
// }
// }
