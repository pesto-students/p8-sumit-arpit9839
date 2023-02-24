class Stack{
    constructor(){
        this.item=[];
    }

    push(Element){
        return this.item.push(Element)
    }

    pop(){
            if(this.item.length == 0){
                return;
            }
            else{
                return this.item.pop();
            }
    }

    peek(){
        return this.item[this.item.length -1]; 
    }

    isEmpty(){
        return this.item.length == 0;
    }

    print(){
        let result=[];
        for (let i=0;i<this.item.length; i++){
            result +=this.item[i]+ " ";
            
        }
        return result;
    }

    bracketsMatch(exp){
        let opening =[];
        let closing ={
            '{': '}',
            '[': ']',
            '(': ')'
        };
        for(let char of exp){ 
            if (char ==='{' || char ==='[' || char ==='('){
                opening.push(char);
            }
            if (char === '}' || char === ']' || char === ')') {
               let close = opening.pop();
               if(closing[close] == char){
                return true;
               }
               else{
                return false;
               }
              
            }
           
        }
       
        
    }

}


var stack = new Stack();
const exp1 = '[(])';


console.log(stack.bracketsMatch(exp1));
