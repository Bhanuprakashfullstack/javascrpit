// Synchronous programming
// In synchronous programming, tasks are performed one after another. Each task must complete before the next one begins.
// This can lead to delays if a task takes a long time to complete, as subsequent tasks must wait.
function Step1() {
    console.log("Step 1");
}
function step2() {
    console.log("Step 2");
}
function step3() {
    console.log("Step 3");
}
Step1();
step2();
step3();


// Asynchronous programming
// In asynchronous programming, tasks can be initiated and then allowed to complete in the background while other tasks continue to run.
// This allows for more efficient use of time, as tasks that take a long time to complete do not block the execution of other tasks.

function stepA() {
    setTimeout(() => {
        console.log("Step A");
    }, 3000);
}
function stepB() {
    setTimeout(() => {
        console.log("step B");
    }, 5000);
}
function stepC() {
    setTimeout(() => {
        console.log("Step C");
    }, 8000);
}
stepA();
stepB();
stepC();

