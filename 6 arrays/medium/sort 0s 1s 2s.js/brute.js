const arr = [1, 0, 2, 0, 1, 1, 2, 0];

const sort012 = (arr) => {
  let zeroFreq = 0;
  let oneFreq = 0;
  let twoFreq = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroFreq++;
    } else if (arr[i] === 1) {
      oneFreq++;
    } else if (arr[i] === 2) {
      twoFreq++;
    }
  }
    while(zeroFreq--){
    arr[idx++] = 0;
  }
  while(oneFreq--){
    arr[idx++] = 1;
  }
  while(twoFreq--){
    arr[idx++] = 2;
  }

  return arr;
};

console.log(sort012(arr));
