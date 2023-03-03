function stock(arr,i){
    let buy =arr[i];
    let temp = buy;
    let sell;
    let count=0;
    
 while (i!=arr.length){

    if ( temp < arr[i]){
        sell = arr[i];
        temp=sell;
        count++
    }
    i++;
    
    
 }
 if (count==0){
    return 0
 }
 else{
    return sell-buy
 }

 


return profit;
}

let print=stock ([7,6,4,9,1],1);
console.log(print);