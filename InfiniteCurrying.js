//Infinite Currying ---> sum(1)(2)(3)(4)(5)...(n)
//Basically the value of the n can vary and your function should adapt to it.
let sum = function(a) {
  return (function (b){
    if(b) return sum(a+b);// if b has any value means we have another argument therefore we do something like sum(a+b)--> a this does sum(a+b)(next)
    return a;// if b is fdalsy means we should exit the recursion and return the current sum -->a 
  });
};
