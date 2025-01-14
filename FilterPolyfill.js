// array.filter((arr,index,array) => {}) returns a new array with only filtered condition
Array.prototype.myFilter = function(callBackFunction) {
  let filteredArray = [];
  for(let i =0 ;i<this.length;i++){
    if(callBackFunction(this[i],i,this)){ //check if condition satisfies
      filteredArray.push(this[i]);
    }
  }
    return filteredArray; //return the filtered output
};
const nums = [1,2,3,4];
const resutGreaterThanTwo = nums.myFilter((num,i,nums) => {
  return num>2;
});
alert(resutGreaterThanTwo);
