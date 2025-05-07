const intersection = (a, b) => {
    let obj = {}
    let result = []

    for(let num of a){
        if(!(num in a)){
            obj[num] = 1
        }else{
            obj[num]++
        }
    }

    for(let num of b){
        if(obj[num] && obj[num]>0){
            result.push(num)
            obj[num]--
        }
    }

    return result
};
  
  module.exports = {
    intersection,
  };
 
  
  //using sets

//   const intersection = (a, b) => {
//     let result = []
//     let newset = new Set(a)
//     for(let num of b){
//         if(newset.has(num)){
//             result.push(num)
//         }
//     }
//     return result
// };
  
//   module.exports = {
//     intersection,
//   };