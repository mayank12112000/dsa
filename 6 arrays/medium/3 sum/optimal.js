let nums = [-2, 0, 1, 1, 2];

const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  const result = new Array();
  while (i < arr.length) {
    // duplicate for first element
    if (i > 0 && arr[i] === arr[i - 1]) {
      i++;
      continue;
    }
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] === 0) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
    i++;
  }
  return result;
};

console.log(threeSum(nums));
