let arr1 = [1,1,2,3,4,5,6,6]
let arr2 = [2,2,3,4,5,7,8]

// mathod 1: using map
const union=(arr1,arr2)=>{
    let union = []
    let n = arr1.length
    let m = arr2.length
    let i = 0; let j =0;
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            if(union.length ===0 || union[union.length-1]!==arr1[i]){
                union.push(arr1[i])
            }
            i++
        }
        else if(arr2[j]<arr1[i]){
            if(union.length === 0 || union[union.length-1]!== arr2[j]){
                union.push(arr2[j])
            }
            j++
        }else{
            if(union.length===0 || union[union.length-1]!==arr1[i]){
                union.push(arr1[i])
            }
            i++
            j++
        }
    }

    while(i<n){
        if(union.length ===0 || union[union.length-1]!==arr1[i]){
            union.push(arr1[i])
        }
        i++
    }
    while(j<m){
        if(union.length ===0 || union[union.length-1]!==arr2[i]){
            union.push(arr2[j])
        }
        j++
    }
    return union
}

console.log(union(arr1,arr2))