const anagrams = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    let obj = {}
    for(char of s1){
        if(!(char in obj)){
            obj[char] = 1
        }else{
            obj[char]++
        }
    }

    for(char of s2){
        if(char in obj){
            obj[char]--
        }else{
            return false
        }
    }

    for (char in obj){
        if(obj[char] !== 0 ) return false
    }
    return true

  };
    
      
  module.exports = {
    anagrams,
  };
  