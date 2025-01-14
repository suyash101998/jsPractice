//array.map((arr,index,array) => {}) ==> this returns a new array
Array.prototype.myMap = function (callbackFunction) {
  let newArray = []; //as we have to return new array
  for(let i = 0 ;i < this.length; i++){
    newArray.push(callbackFunction(this[i],i,this)); //since this is normal function we are safe to use 'this'
  }
  return newArray; // as map should return new array.
};
const nums = [1,2,3,4];
const result = nums.myMap((num,i,nums) => {return num*3});
alert(result);
