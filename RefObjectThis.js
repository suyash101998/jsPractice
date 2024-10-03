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
