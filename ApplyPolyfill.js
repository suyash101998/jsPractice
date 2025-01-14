// someFunc.apply(referenceobj,[...args]) returns output of that function with reference of obj.
Function.prototype.myApply = function(context = {} ,args = []){
  if(typeof this !== "function"){
    throw new Error("This is not apply");
  }
  if( !Array.isArray(args)){
    throw new TypeError("Not correct type"); //as the only difference in call and apply the args has to be an array
  }
  context.funct = this;
  context.funct(...args);//same as call , apply is all about calling a function in a given objects scope/context.
};
const person = {
  fullName: function() {
    return alert(this.firstName + " " + this.lastName);
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will alert "Mary Doe":
person.fullName.myApply(person1);
