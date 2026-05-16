/*3. Longest Substring Without Repeating Characters
Attempted
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.*/

var lengthOfLongestSubstring = function (s) {
  let max = 1
  for(let i = 0; i< s.length;i++){
    let sub="";
    let current = 0
    let map = new Map()
    for(let j = i;j < s.length ; j++){
      if(map.has(s[j])){
        break
      }else{
        map.set(s[j],true)
        current++
        sub += s[j]
      }
      max = Math.max(current, max)
      console.log(sub)
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));