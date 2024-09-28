//Write a function that converts any function into a curry function: 
// sum(a,b,c) ===> sum(a)(b)(c)|
let curryConverter = (func) => {
   return function curriedFunc(...args) {
       console.log(args.length, func.length);// Length property of function tells the number of parameters that function accepts
     if(args.length >= func.length) {// If we have to do currying then the number of args should be exual to the number of functions
       return func(...args);// once numbers are equal means we reached the end
     }
     return function(...next) {
       return curriedFunc(...args,...next);// recursion to go again in loop to accept next args with current value
     };
   }
}
var sum22 = (a,b,c) => a+b+c;
let sum3 = curryConverter(sum22);
sum3(1)(2)(3);
