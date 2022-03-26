//Rest & Spread OPerator 

//Rest (Combine receve)
const num = (a,b,c,...other) =>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(other);
}
console.log(num(2,3,4,5,6,7,8));
function sum(x, y, z) {
    return x + y + z;
}
const numbersForSum = [1,2,3];
console.log(sum(...numbersForSum));
console.log(sum.apply(null,numbersForSum));


//apply Function
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log("Max Number in Array = " + max);
const min = Math.min.apply(null, numbers);
console.log("Min Number in Array = " + min);


//Spread combine send
const names = ['ali','zeeshan','muneeeb','mudassar'];
const getNames = (...names/*name1,name2,name3,name4*/)=>{
    // console.log(name1,name2,name3,name4);
    console.log(names);
}
getNames(...names);
// console.log(names[0],names[1],names[2],names[3]);


//Rest & Spread in Objects
var student = {
    name : 'ali',
    age :20,
    hobbies :["Cricket","Progrmming"]
}
const {...rest} =student;    //array destructing
console.log(rest);

//Spread 
var newstudent = {
    ...student,
    newage :22,
    // hobbies:["Body Building"]
}
console.log(newstudent);