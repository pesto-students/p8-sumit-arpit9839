async function executeTasks() {
  
  await doTask1();
  
  await doTask2();
  
  await doTask3();
}

async function doTask1(){
await new Promise(resolve => setTimeout(resolve, 1000));
  
}
async function doTask2(){
  await new Promise(resolve => setTimeout(resolve, 1000));
}
async function doTask3(){
  await new Promise(resolve => setTimeout(resolve, 1000));
}

function* executeTasksGenerator() {
  yield new Promise(resolve => setTimeout(resolve, 1000));
  yield doTask1();
  yield new Promise(resolve => setTimeout(resolve, 1000));
  yield doTask2();
  yield new Promise(resolve => setTimeout(resolve, 1000));
  yield doTask3();
}
 executeTasks();
 executeTasksGenerator();
  