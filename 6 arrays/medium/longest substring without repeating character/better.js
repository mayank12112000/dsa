const longestLengthSubString = (s) => {
  let left = 0;
  let right = 0;
  let map = new Map();
  max = 0;
  while (right < s.length) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    max = Math.max(right-left+1, max);
    console.log(max, right, map);

    right++;
}
return max;
};

console.log(longestLengthSubString("tmmzuxt"));
