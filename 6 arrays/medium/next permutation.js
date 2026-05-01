const arr = [1,3,2]

const nextPermutation = (arr)=>{
    let breakpoint = arr.length-1
    for(let i = arr.length-2;i>=0;i--){
        if(arr[i+1]>arr[i]){
            breakpoint = i;
            break
        }
    }
    if(breakpoint === arr.length-1){
        return arr.reverse()
    }
    // find next biggest to breakpoint, after breakpoint
    for(let i = arr.length-1;i>breakpoint;i--){
       if(arr[i]>arr[breakpoint]){
        [arr[i],arr[breakpoint]] = [arr[breakpoint],arr[i]]
        break;
       }
    }
// now we have descending order array after the breakpoint, we will sort it by reversing it
    let left = breakpoint+1; let right = arr.length-1
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++; right--;
    }
    return arr
}
console.log(nextPermutation(arr))