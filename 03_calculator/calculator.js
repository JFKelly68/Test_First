function Calculator() {
  this.number = 0;
  this.value = function(){
    return this.number;
  };
  this.add = function(num){
    return this.number+=num;
  };
  this.subtract = function(num){
    return this.number-=num;
  }
};

console.log(Calculator.value())