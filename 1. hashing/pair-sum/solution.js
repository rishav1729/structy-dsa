const pairSum = (numbers, targetSum) => {
    let obj = {}
    for (let i=0; i<numbers.length; i++){
        let diff = targetSum - numbers[1]
        if(diff in obj){
            return [i,obj[diff]]
        }
        obj[numbers[i]] = i
    }
    };
  
  module.exports = {
    pairSum,
  };


//   //pair product
//   const pairProduct = (numbers, targetProduct) => {
//     let obj = {}
//     for (let i=0; i<numbers.length; i++){
//         let complement = targetProduct / numbers[1]
//         if(complement in obj){
//             return [i,obj[complement]]
//         }
//         obj[numbers[i]] = i
//     }
//     };
  
//   module.exports = {
//     pairProduct,
//   };
