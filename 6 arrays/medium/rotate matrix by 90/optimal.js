const matrix = [[1, 2, 3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]]

const rotate = (matrix)=>{
    const n = matrix.length
    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    
    for(let i = 0;i<n;i++){
        for(let j =0;j<n/2;j++){
            [matrix[i][j],matrix[i][n-j-1]] = [matrix[i][n-j-1],matrix[i][j]]
        }
    }
    return matrix
}
console.log(rotate(matrix))
