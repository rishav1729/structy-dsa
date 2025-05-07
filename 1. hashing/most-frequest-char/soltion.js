const mostFrequentChar = (s) => {
    let obj = {};
    let maxFreq = 0;
    let resultChar = '';
  
    for (let char of s) {
      obj[char] = (obj[char] || 0) + 1;
  
      // Update resultChar immediately if a new max is found
      if (obj[char] > maxFreq) {
        maxFreq = obj[char];
        resultChar = char;
      }
    }
  
    return resultChar;
  };
  
  module.exports = {
    mostFrequentChar,
  };

  

