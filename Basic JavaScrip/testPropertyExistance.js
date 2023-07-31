function checkObj(obj, checkProp) {
    // Only change code below this line
    console.log(obj[checkProp])
    console.log(obj.checkObj)
    if(obj.hasOwnProperty(checkProp))
    
    return obj[checkProp];
  
    else
    return "Not Found";
   
    // Only change code above this line
  }

  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") 