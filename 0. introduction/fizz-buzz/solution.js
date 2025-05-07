//usinf if else
const fizzBuzz = (n) => {
    let result =[]
    let i = 0
    while(i<=n){
        if(i%3 === 0 && i%5 === 0) result.push("fizzbuzz")
        else if (i%3 === 0) result.push("fizz")
        else if (i%5 === 0) result.push("buzz")
        else result.push(i)
    i++
    }
    return result
  };
  
  module.exports = {
    fizzBuzz,
  };

// usning switch
// const fizzBuzz = (n) => {
//     // todo
//     let arr = []
//     for (let i=1; i<=n ; i++){
  
//       switch (true){
//         case (i%3 === 0 && i%5 === 0):
//           arr.push('fizzbuzz')
//           break;
//         case (i%3 === 0):
//           arr.push('fizz')
//           break;
//         case (i%5 === 0 ):
//           arr.push('buzz')
//           break;
        
//         default:
//           arr.push(i)
//       }
//     }
//     return arr;
//   };
  
//   module.exports = {
//     fizzBuzz,
//   };
  
  