function getNumber(){
 return new Promise(function(resolve,reject){
 const num= Math.floor(Math.random()*100);
 if (num %5 === 0){
    reject(`the number divisible by 5`);
 }
 else{
    resolve(num);
 }

 });
}
getNumber().then(function(num){console.log(`the number is ${num}`);})
         .catch(function(error){console.log(error);});