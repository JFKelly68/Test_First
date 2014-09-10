function repeat(string, num){
  var result = "";
  if(num <= 0)
    return result;
  for(var i = 0; i < num; i++)
    result+=string;
  return result;
};

/* var fruit = ["apple","banana","cherry"]; */

function join(array, delimiter){
  var result = "";
  for(var j = 0; j < array.length; j++){
    if(delimiter && j != (array.length-1))
      result+=array[j] + delimiter;
    else{
      result+=array[j];
    }
  };
  return result;
};
/*console.log(join(fruit, "/"))*/

function sum(array){
  var sum = 0;
  if(array){
    for(var i = 0; i < array.length; i++){
      sum+=array[i];
    };
  };
  return sum;
};

function paramify(hash){
  var output = [];
  var protoProp = Object.getPrototypeOf(hash);
  if(hash){
    for(key in hash){
      /* hashLength++;
       console.log(hashLength==Object.keys(hash).length);
       if(hashLength == Object.keys(hash).length) */
         if(hash.hasOwnProperty(key)){
           output.push(key + "=" + hash[key]);
           output.sort();
         }else{
           break;
         }
      /* else{
        output.push(key + "=" + hash[key] + "&"); 
      }; */
    }; 
  };
  return output.join("&");
};


function factorial(num){
  var storage = 1;
  if(num){
    for(var i = num; i > 0; i--)
      storage = storage * i;
  };
  return storage;
};

function concat_string(){
  var concatArray = [];
  for(var i=0; i<arguments.length;i++)
    concatArray.push(arguments[i]);
  return concatArray.join("");
};
