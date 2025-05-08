//1

const intersectionWithDupes = (a, b) => {
    // todo
    let mapA = {}
    let mapB = {}
  
    for (let num of a){
      if(!(num in mapA)){
        mapA[num] = 1
      }else{
        mapA[num]++
      }
    }
  
      for (let num of b){
      if(!(num in mapB)){
        mapB[num] = 1
      }else{
        mapB[num]++
      }
    }
  
    let result = []
  
      for (let val in mapA) {
      if (val in mapB) {
        let count = Math.min(mapA[val], mapB[val]);
        for (let i = 0; i < count; i++) {
          result.push(val);  
        }
      }
    }
  
    return result
    
  };
  
  module.exports = {
    intersectionWithDupes,
  };

  
//   2

// const intersectionWithDupes = (a, b) => {
//     // todo
//       const count1 = eleCount(a);
//     const count2 = eleCount(b);
//     const result = [];
//     for (let ele in count1) {
//       if (ele in count2) {
//         for (let i = 0; i < Math.min(count1[ele], count2[ele]); i += 1) {
//           result.push(ele);
//         }
//       }
//     }
//     return result;
//   };
  
//   const eleCount = (elements) => {
//     const count = {};
//     for (let ele of elements) {
//       if (!(ele in count)) {
//         count[ele] = 0;
//       }
//       count[ele] += 1;
//     }
//     return count;
//   };
  
//   module.exports = {
//     intersectionWithDupes,
//   };
  