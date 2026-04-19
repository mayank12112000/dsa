let n = 36;
const getDivisorsBruteForce = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i)
    }
  }
};
// getDivisorsBruteForce(n)

const getEfficientDivisors = (n)=>{
    let result = []
    for(let i = 1;i<Math.sqrt(n);i++){
        if(n%i== 0){
            result.push(i)
            if(n%i != i){
                result.push(n/i)
            }
        }
    }
    return result.sort()
}

console.log(getEfficientDivisors(76))