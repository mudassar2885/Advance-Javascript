//callbacks


const fun1 = (name) =>{
    console.log("Name = " + name);
  }
  const fun2 = (callback) =>{
    var name = "Mudassar Hussain";
    callback(name);
  }
  fun2(fun1);
  
  //Problem funB call first as compair to funA.
  // const funA =()=>{
  //   setTimeout(()=>{
  //   console.log("This is function A.");
  //   //funB();              //solution but not good
  //   },2000)
  // }
  // const funB =()=>{
  //   console.log("This is function B");
  // }
  // funA();
  // funB();
  
  
  const funX = (name,callback) =>{
    console.log(`My name is ${name}`);
    callback();
  }
  const funY =()=>{
    console.log('This is call back function');
  }
  funX("Mudassar Hussain",funY);
  