const sumNumbersRecursive = (numbers) => {
    // todo
    if(numbers.lengfth === 0 ){
      return 0;
    }
    return numbers[0] + sumNumbersRecursive(numbers.slice(1));
  };
  
  module.exports = {
    sumNumbersRecursive,
  };
  