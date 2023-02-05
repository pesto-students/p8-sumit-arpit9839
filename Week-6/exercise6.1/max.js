function ar(a){
    let curr_sum=0;
    let max=0;
    for (let i=0;i<a.length;i++){
        curr_sum = curr_sum + a[i];
        if(curr_sum<0){
            curr_sum=0;
        }
       if (curr_sum>max){

        max=curr_sum;
       } 
    }
    return max;
  }

  const s = ar(  [-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  console.log(s);

