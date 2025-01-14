// someFunction.call(referenceObject,params); // return the function output using reference object.
Function.prototype.myCall = function(context = {} , ...args){
  if(typeof this !== 'function'){
    throw new Error("Not Callable");
  }
  context.func = this; //Shift the reference for this to the context object i.e the reference object
  context.func(...args); // now once we call func it is the function called with reference of context obj and args
};

const person = {
  fullName: function() {
    return alert(this.firstName + " " + this.lastName);
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will alert "John Doe":
person.fullName.myCall(person1);
person.fullName.myCall(person2);//"Mary Doe"
