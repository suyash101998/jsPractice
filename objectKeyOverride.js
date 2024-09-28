//What will be the output of the following code
const a = {};
const b = {key : 'b'};
const c = {key : 'c'};
a[b] = "Suyash";
a[c] = "Coder";
console.log(a[b]);

//Output will be Coder
//explanation :
//When we use object as a key inside another object it gets converted to  string --> [object Object]
//in this case a[[object Object]] = "Suyash" and again a[[object Object]] = "Coder" --> Since both the keys are same and as the property of object states if key is repeated it takes the final value .
