/*Input:
 arr[] = 1 2 3 4 5, num = 3  
Output:
 2  `
Explanation:
 3 is present at the 2nd index of the array.

Example 2:
Input:
 arr[] = 5 4 3 2 1, num = 5  
Output:
 0  
Explanation:
 5 is present at the 0th index of the array.*/
 let arr = [1,2,3,4,5]
 let num = 3
 const linearSearch =(arr,num)=>{
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===num) return i 
    }
    return -1
 }

 console.log(linearSearch(arr,num))