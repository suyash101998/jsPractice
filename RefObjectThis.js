//what is the output for the following code:
function makeUser() {
  return {
    name : "Suyash",
    ref : this
  };
}
const myUser = makeUser();
console.log(myUser.ref.name); 

//Solution : the output will be empty as myUser will be --> {name : "Suyash" , ref : Window object}
//Why because when you call the makeUser what is the parent object the p[arent object is global object i.e window
//A follow up can be how to fix this to Print Suyash
function makeUser() {
  return {
    name : "Suyash",
    ref() {
      return this;
    }
  };
}
const myUser = makeUser();
console.log(myUser.ref().name); // Since we have wrapped the this keyword inside a function and now the parent object is the first return object whose property value for name is Suyash it is fixed.
