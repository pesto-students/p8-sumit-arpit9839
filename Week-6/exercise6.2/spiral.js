function spiral(arr,m,n){
    let row=0;
    let lrow=m-1;
    let lcolumn=n-1;
    let column=0;
    let result =[];
    let d=0
    while(row<=lrow && column<=lcolumn){
      if (d==0){
        for (let i=column;i<=lcolumn;i++){
            result.push(arr[row][i]);
            
            
        }
    }
        d=1;
        row++;
        if (d==1){
            for (let i=row;i<=lrow;i++){
                result.push(arr[i][lcolumn]);
                
            
            }
            lcolumn--;
            d=2;
        }

            if (d==2){
                for (let i=lcolumn;i>=column;i--){
                    result.push(arr[lrow][i]);
                    
                    
                }
                lrow--;
                d=3;
            }
            if(d==3){
                for(i=lrow;i>=row;i--)
                result.push(arr[i][column]);
                
                d=0;
            }
            column++
      
    }
    return result;
}


const a = spiral( [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],3,3);
console.log(a);