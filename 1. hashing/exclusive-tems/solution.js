const exclusiveItems = (a, b) => {
    // todo
    let result = []
    let setA = new Set(a)
    let setB = new Set(b)
  
    for(let num of a){
      if(!setB.has(num)){
        result.push(num)
      }
    }
      for(let num of b){
      if(!setA.has(num)){
        result.push(num)
      }
    }
  
    return result
  };
  
  module.exports = {
    exclusiveItems,
  };
  