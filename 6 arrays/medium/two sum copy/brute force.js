const matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

const setColumn=(matrix,n,j,value)=>{
    for(let i= 0;i<n;i++){
        if(matrix[i][j] !== 0){
            matrix[i][j] = value
       }
    }
}

const setRow=(matrix,m,i,value)=>{
    for(let k = 0;k<m;k++){
        if(matrix[i][k] !== 0){
            matrix[i][k]=value
        }
    }
}

const setZero =(matrix)=>{
    let n = matrix.length
    let m = matrix[0].length
    for(let i = 0;i<n;i++){
        for(let j = 0;j<m;j++){
            if(matrix[i][j]===0){
                setColumn(matrix,n,j,-1)
                setRow(matrix,m,i,-1)
            }
        }
    }
    for(let i = 0;i<n;i++){
        for(let j = 0;j<m;j++){
            if(matrix[i][j]=== -1){
                matrix[i][j] =0
            }
        }
    }
}
setZero(matrix)
console.log(matrix)