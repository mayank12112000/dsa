let matrix =[[1,1,1],[1,0,1],[1,1,1]]

const setZero=(matrix)=>{

    let m = matrix.length
    let n = matrix[0].length
    for(let i = 0;i<m;i++){
        for(let j = 0; j< n ; j++){
            if(matrix[i][j] ===0){
                // mark col
                for(let row = 0;row<m; row++){
                    if(matrix[row][j] !==0){
                        matrix[row][j] = -1
                    }
                }

                // mark row 
                for(let col = 0; col< n; col++){
                    if(matrix[i][col] !==0){
                        matrix[i][col] = -1
                    }
                }
            }
        }
    }
    for(let i = 0;i<m;i++){
        for(let j = 0; j< n ; j++){
            if(matrix[i][j] === -1){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

console.log(setZero(matrix))