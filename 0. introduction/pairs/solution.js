const pairs = (elements) => {
    let result = []
    for(let i = 0; i<elements.length; i++){
        for(let j = i+1; j< elements.length; j++){
            result.push([elements[i],elements[j]])
        }
    }
    return result
  };
  
  module.exports = {
    pairs,
  };
  