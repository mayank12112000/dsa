const matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

const setZero=(matrix)=>{
    let n = matrix.length
    let m = matrix[0].length

    let firstRowZero = false;
    let firstColumnZero = false;

    // check if first column has any zero
    for(let i = 0;i<n;i++){
        if(matrix[i][0]===0){
            firstColumnZero = true;
            break
        }
    }

    // check if first row has any zer0
    for(let i = 0;i<m;i++){
        if(matrix[0][i]===0){
            firstRowZero = true
            break
        }
    }

    // iterate through 2nd row and & set first row/column as tracker
    for(let i = 1;i<n;i++){
        for(let j = 1;j<m;j++){
            if(matrix[i][j]===0){
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    
    // set cell to zero based on tracker
    for(let i = 1;i<n;i++){
        for(let j = 1;j<m;j++){
            if(matrix[i][0]===0 || matrix[0][j]===0){
                matrix[i][j] = 0
            }
        }
    }

    // set 1st row and col to zero if it has been flagged zero previously
    if(firstColumnZero){
        for(let i= 0;i<n;i++){
            matrix[i][0] = 0
        }
    }
    if(firstRowZero){
        for(let j =0;j<m;j++){
            matrix[0][j] = 0
        }
    }
    return matrix
}

console.log(setZero(matrix))