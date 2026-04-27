const matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

const setZero = (matrix)=>{
    let col = new Array(matrix.length).fill(false)
    let row = new Array(matrix[0]?.length).fill(false)
    console.log(col,row)
    // iterate through the nums

    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                col[j] = true
                row[i] = true
            }
        }
    }
    
    // reiterate and put zero for col,row inx
    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[0].length;j++){
            if(row[i]){
                matrix[i][j]=0
            } 
            if(col[j]){
                matrix[i][j] = 0
            }
        }
    }

}


setZero(matrix)
console.log(matrix)