<script>
function createInc(){
 let count= 0;
  function incr(){
  count++;
  }
  let message =`count is ${count}`;
  function log(){
   console.log(message);
  }
  return[incr,log];
}
const [incr,log]=createInc();
incr();
incr();
incr();
log();
</script>

output will be: count is 0
in this example the createInc function have two methods incr and log ,the incr method increments the value of count and the log print the count in message variable,
and at last returns the incr and log funcion output,output in screen will be "count is 0" because log will have access over global count which is initiaed as zero,
where as incr is increments the count ,if in incr function if we try to put console.log(count),then the output if going to be "123".

clousre is a function that retains access to the variable of itss enclosing lexcal enviroment even after it have been closed,this means that we can use clousre to create private vairiable
that cannot be accessed from the outside.
