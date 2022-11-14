function compareArrays(arr1, arr2) {
    let result;
    // Ваш код
    for (let i = 0; i < arr2.length; i++){
        result = arr1.every(element => element === arr2[i]);
        
    }
    return result; // boolean
  }
  
  function advancedFilter(arr) {
    let resultArr;
  
    // Ваш код
    resultArr = arr.filter((number) => number > 0).filter((number) => number % 3 == 0).map((number) => number * 10);
    
    return resultArr; // array
  }