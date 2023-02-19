function sort(arr){
   let result1=[];
   let result2=[];
   let result3=[];
   let result_final=[];
    for(let i=0; i<arr.length;i++){
        if (arr[i]==0){
            result1+=arr[i];
            
        }
    }
    for (let j=0;j<arr.length;j++){
        if (arr[j]==1){
            result2+=arr[j];
            
        }
    }
    for (let k=0;k<arr.length;k++){
        if (arr[k]==2){
            result3+=arr[k];
            
        }
    }
    return result_final =result1+result2+result3;
    }
   
    



let a =sort([0,2,1,2,0]);
console.log(a);