//Find the output of the following code
const value = { num : 20}
const multiply =  ( x = {...value}) => {
  console.log((x.num *= 2));
}
multiply();//40  when you use spread you are not getting the reference instead you are getting whole new object itself
multiply();//40
multiply(value);//40 here we are passing the value opbject to the x therefore it has now access to value object and hence can change the value of num
multiply(value);//80 here num = 40
