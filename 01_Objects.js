//Decleratino

let user1 = new Object();                          // "object constructor" syntax
let user2 = {};                                    // "object literal" syntax


// Declear key after making object
const user3 = {
    name  :"Mudassar Hussain",
    age :20
}
// console.log(user3 ["degree college"]=true);        
user3.degree = "software engineering";              //give value new key
user3.college = "PMAS Arid university";             //giv value new key
console.log(user3.degree);                          //show value  
console.log(user3.college);                         //show value  
console.log(typeof(user3.degree));                  //check type of new key
console.log(user3);



