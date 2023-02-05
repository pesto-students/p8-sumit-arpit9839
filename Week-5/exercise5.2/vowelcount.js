function vowelCount(str){
    let vowel='aeiouAEIOU';
    let map = {};
    for (const stri of str){
        let char = stri;
        if (vowel.includes (char)){
            if (!map[char]){
                map[char]=1;
            }
            else{
                map[char]++;
            }
        }
    }
    return map;
}

let count=vowelCount('arpityiuyyiuy');
console.log(count);

