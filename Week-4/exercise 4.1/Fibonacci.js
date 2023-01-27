class fabonacci{
    constructor(){
        this.first = 0;
        this.second = 1;
    }
    [Symbol.iterator](){

        return {
            next: ()=>{
                let fib = this.first;
                if(fib>100){
                    return{done: true};
                }
                this.first = this.second;
                this.second = fib +this.second;

                return{value:fib, done: false};
            }
        }
    }
}

const fib = new fabonacci();
for (let i of fib){
    console.log(i);
}