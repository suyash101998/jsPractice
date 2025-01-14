// array.reduce((acc,curr,i,array)=>{},initialValue) ==> this returns acc
Array.prototype.myReduce = function(callBackFunction,initialValue) {
  if(initialValue === undefined){ initialValue = this[0]} // checking if initial value was given , if not then assign first value of array
  for(let i = 0 ; i<this.length; i++) {
      acc = callBackFunction(acc, this[i] , i , this);
  }
  return acc;
};
const nums = [1,2,3,4];
const sum = nums.reduce((acc,cur,i,nums) => { return acc + cur}, 0);
alert(sum);
