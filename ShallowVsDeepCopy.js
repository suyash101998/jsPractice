//When an object has reference to the object from which it is cloned it is called as shallow copy (changing one object can change another object as well)
// 3 popular ways to create a Deep copy are
const obj1 = {name : "Suyash" };
const obj2 = Object.assign({},obj1); //using assign function with empty object
const obj3 = JSON.parse(JSON.stringify(obj1)); //using json methods
const obj4 = {...obj1}; // using spread operation
