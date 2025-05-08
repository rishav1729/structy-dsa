const allUnique = (items) => {
    // todo  
    let set = new Set(items)
    if (items.length !== set.size) return false
    else return true
  };
  
  module.exports = {
    allUnique,
  };

  

  //2md
//   const allUnique = (items) => {
//     const uniqueItems = new Set(items);
//     return uniqueItems.size === items.length;
//   };