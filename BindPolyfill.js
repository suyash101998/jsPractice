// someFunction.bind(referenceObj, arg) ==>  returns a function -->therefore you a=can give args to the function as well
Function.prototype.myBind = function(context= {}, ...args){
  if(typeof this !== "function"){
    throw new Error("Not bindable");
  }
  context.func = this;
  return function(...newArgs){ //as new function created can also be given args.
    return context.func(...args,newArgs); // combining args provided during bind and during calling.
  }
};
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    alert(this.firstName + " " + this.lastName);
  }
}

let display = person.display.myBind(person);
setTimeout(display, 3000);
