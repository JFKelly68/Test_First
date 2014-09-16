function countWords(sentence) {
  sentArray = sentence.split(" ");
  return sentArray.length;
}

function makeAdder(num){
  return function(input){return input+num;};
}

function forEach(array, action) {
  for(var i = 0; i<array.length; i++){
    action(array[i]);
  }
}

function map(array, action){
  var newArray = [];
  /* **This was my first solution; after I moved on, I figured out how to incorporate forEach(). Just wanted to keep it for my own reference **
  
  for(var i = 0; i<array.length; i++){
    newArray.push(action(array[i]));
  }
  */
  
  forEach(array, function(input){
      newArray.push(action(input));
  });
  return newArray;
}

function filter(array, action){
   /* **Closest I could get to using map() was:
  
  var filtered = map(array, function(input){
    if(action(input))
      return input;
  });
  return filtered;
      **but this returned an array that had the correct values surrounded by "undefined" elements.
  
  */
  var newArray = []
  forEach(array, function(input){
    if(action(input))
      newArray.push(input);
  });
  return newArray;
}

function contains(array, value){
  //var count = 0;
  for(var key in array){
    if(array[key] === value)
      return true;
  }
  return false;
}

function reduce(array, start, func){
  var one, two, temp;
  for(var i=start, len=array.length;i<len;i++) {
    one = array.pop();
    two = array.pop();
    temp = func(one,two);
    array.push(temp);
    len--;
  }
  return array.pop(); 
}

function countWordsInReduce(input) {
  
}

function sum(array) {
  return reduce(array, 0, function(a,b){
    return a+b;
  });
}

function every(array, func) {
  var bool = true;
  for(var i=0, len = array.length;i<len;i++){
    if(func(array[i]) === false){
      bool = false;
    }
  }
  return bool;
}

function any(array, func) {
  var bool = false;
  for(var i=0;i<array.length;i++){
    if(arguments.length>1){
      if((func(array[i])) === true){
        bool = true;
      }
    }else{
      if(array[i] === true){
        bool = true;
      }
    }
  }
  return bool;
}


function once(func) {
  var bool = false;
  return function() {
    if(bool === false){
      func();
      bool = true;
    }
  }
}

function wrapper(input, func) {
  
}





