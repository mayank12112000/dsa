const countFrequencies = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i],(map.get(arr[i]) || 0)+1)
  }
  map.forEach((value,key)=>{
    console.log(key,value)
  })
};

countFrequencies([4,5,8,7,5,5])

// using js obj
const count = (arr)=>{
    let frequency = {}
    for(let i = 0;i<arr.length;i++){
        frequency[arr[i]] = (frequency[arr[i]] || 0)+ 1
    }
    return frequency
}
console.log(count([5,2,5,4,8,5,5,5,1]))


// counting chars of str
const countChar = (str)=>{
    let frq = new Map()
    for(let i = 0;i<str.length;i++){
        frq.set(str[i], (frq.get(str[i])||0)+1)
    }
    frq.forEach((value,key)=>{
        console.log( key,value)
    })
}
countChar("mayankkesharis")