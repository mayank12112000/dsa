const n = 6
const generateRow=(i)=>{
      let ans = [1] // first element of each row
        for(let j = 1;j<i;j++){
            ans.push(ans[j-1]*(i-j)/j)
        }
    return ans
}
const pascalTriangle=(n)=>{
    const triangle = []
    for(let i = 1;i<=n;i++){ // looping till the nth row
        triangle.push(generateRow(i))
    }
    return triangle
}


console.log(pascalTriangle(6))