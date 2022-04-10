//Closure

var func1 =(a)=>{
    console.log('value passed ' + a);

    return function(b){
        console.log(`value passad ${b}`);
        
        return function(c){
            console.log(`value passed ${c}`);
            
            return function(d) {
                console.log(`value passed ${d}`);

                var x = a+b+c+d;
                console.log(`sum of all arguments is =  ${x}`);
            }
        } 
    }
}

var store1 = func1(1);
var store2 = store1(2);
var store3 =store2(3);
store3(4);


var a1 =(a,b,c)=>{
    console.log(`Values are ${1,2,3}`);

    return {
        gettwosum: function() {
            return a+b;
        },
        getthreesum:function(){
            return a+b+c;
        }
    }
}

var store4 =a1(1,2,3);
console.log(store4.gettwosum());
console.log(store4.getthreesum());




// var a=[1,2,3,4,5];
// const [...other] =a;  //array destructing with spread operator

// var a1=(...other)=>{
//     console.log(`values are ${other}`);
// }
// a1(...other);




// //extra
// var fun1 =()=>{
//     var a=10;
//     var b=11;
//     var c=12;
//     const func=()=> {
//       console.log(a+b);
//          const func2 =()=>{
//             console.log(a+b+c);
//         }
//     func2();
//     }
//     func();
// }
// fun1();