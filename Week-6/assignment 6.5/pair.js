function pair(arr,n){
let diff=0;
for (let i =0;i<arr.length;i++){
    for (let j =i+1; j<arr.length;j++){
       
        if (arr[i]>=arr[j]){
            diff = arr[i] - arr[j];
            
        }
        else{
            diff = arr[j] - arr[i];
        }

        if (diff == n){
           return 1;   
        }

    }
    
}
 return 0;

}


const pairw = pair ( [5, 10, 3, 2, 50, 80],7);
console.log(pairw);