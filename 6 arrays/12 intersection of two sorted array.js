const arr1 = [1,2,2,3,3,3,4,5,6]
const arr2 = [2,3,3,5,6,6,7]

const intersection = (arr1,arr2)=>{
    let intersection = []
    let i = 0; let j = 0;
    let n = arr1.length;
    let m = arr2.length
    while(i<n && j<m){
        if(arr1[i]===arr2[j]){
            if(intersection.length === 0 || intersection[intersection.length-1]!== arr1[i]){
                intersection.push(arr1[i])
            }
            i++; j++;
        }else if(arr1[i]<arr2[j]){
            i++
        }else{
            j++
        }
    }
    return intersection
}

console.log(intersection(arr1,arr2))