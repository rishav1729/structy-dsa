const factorial = (n) => {
    // todo
    if(n === 0 || n===1){
      return 1
    }
  
    return n*factorial(n-1)
    
  };
  
  module.exports = {
    factorial,
  };
  