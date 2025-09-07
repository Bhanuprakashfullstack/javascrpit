// // Anonymous function
// // A function without a name is called an anonymous function.
// // Anonymous functions are often not accessible after their initial creation, 
// // which means they can only be used once. 
// // They are commonly used in situations where a function is needed temporarily, 
// // such as in event handlers or as arguments to other functions.
// let self= function(param1,param2)
// {
//     console.log(param1);
//     console.log(param2);
// }
// self("hello","hi");
// self("bhanu","prakash");
// self("apple","banana","grapes");



// let bookdetails=function(bookname,authorname,kings,prince1,prince2,prince3,prince4)
// {
//     console.log(bookname);
//     console.log(authorname);
//     console.log(kings);
//     console.log(prince1);
//     console.log(prince2);
//     console.log(prince3);
//     console.log(prince4);
//     console.log(prince5);
// }
// bookdetails("mahabharatham","vedavyamuni","dhritarashtra","duryodhana","dushasana","yudhishthira","bhima","arjuna");

// //iife function
// // Immediately Invoked Function Expression (IIFE)
// //it excutes automatically without neding to call it

// (function()
// {
//     console.log("hello bhanu");
// })();

// // //callback function
// // A callback function is a function that is passed as an argument to another function 
// // and is executed after some operation or event occurs. 
// // Callbacks are commonly used in asynchronous programming to handle tasks that may take some time to complete, 
// // such as fetching data from a server or reading a file.

//     function bhanu(param1)
// {
//     param1(20,30);
    
// }
// bhanu(function(a,b){
//     console.log("king of the enter universe is bhanu");
//     console.log(a+b);
// })

//annmymous function

let details=function(name,age,othername,gender)
{
    console.log(name);
    console.log(age);
    console.log(othername);
    console.log(gender)

}
details("kala",23,"chandrakala","female")


//iife function

// (function()
// {
//     let age=23;
//     console.log(age);
//     let name="kala";
//     console.log(name);
//     let email="chandrakala@gmail.com";
//     console.log(email);
// }
// )();

(function()
{
    console.log("hello bhanu");
}
)();

(function(bookname)
{
    console.log(bookname);
}
)("mahabharatham");