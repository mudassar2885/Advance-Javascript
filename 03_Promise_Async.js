//Promises
//Async , await

//promise
const  prom = (condition)=>{
    //waiting stage
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(condition){
                resolve('condition is true');
            }
            else
            {
                reject("condition is false");
            }
        },2000)
    })
}
prom(true).then((res)=>console.log(res)).catch((err)=>console.log(err));


//Async
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  