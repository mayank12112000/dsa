const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const rotate=(matrix)=>{
    let n = matrix.length
    let newMatrix = Array.from({ length: n }, () => Array(n).fill(0));
    console.log(newMatrix)

    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[0].length;j++){
            newMatrix[j][matrix.length-1-i] = matrix[i][j]
        }
    }
    return newMatrix
}

console.log(rotate(matrix))