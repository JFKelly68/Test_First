function Calculator(){
  var numStack = [];
  this.value = function(){
    return numStack[numStack.length-1];
  };
  this.push = function(num){
    numStack.push(num);
  };
  
  this.plus = function(){
    if(numStack.length >= 2){
      var hold = [];
      hold[0] = numStack.pop();
      hold[1] = numStack.pop();
      numStack.push(hold[0] + hold[1]);
    }else{
      throw new Exception("calculator is empty");
    }
  };
  
  this.minus = function(){
    if(numStack.length >= 2){
      var hold = [];
      hold[0] = numStack.pop();
      hold[1] = numStack.pop();
      numStack.push(hold[1] - hold[0]);
    }else{
      throw new Exception("calculator is empty");
    }
  };
  
  this.times = function() {
    if(numStack.length >= 2){
      var hold = [];
      hold[0] = numStack.pop();
      hold[1] = numStack.pop();
      numStack.push(hold[0] * hold[1]);
    }else{
      throw new Exception("calculator is empty");
    }
  };
  
  this.divide = function() {
    if(numStack.length >= 2){
      var hold = [];
      hold[0] = numStack.pop();
      hold[1] = numStack.pop();
      numStack.push(hold[1] / hold[0]);
    }else{
      throw new Exception("calculator is empty");
    }
  };
  
  function Exception(message) {
    this.message = message;
    this.name = "ValuesException";
  };
}

