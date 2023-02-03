function hasDuplicate(arr){
    let set =new Set();
    let duplicate= [];
    for (let i=0;i<arr.length;i++){
        if (set.has(arr[i])){
            return true;
        }
        else{
            set.add(arr[i]);
        }
    }
    return false;
}

let a=hasDuplicate([1,1,2,2]);
console.log(a);

