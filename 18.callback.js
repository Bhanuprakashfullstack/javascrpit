//callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function myname(){
    console.log("A.Bhanu prakash raju");
}


function othername(callback){
    callback();

}
othername(myname);



function add(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum);
}   
add(5,5,function(result){
    console.log("the sum is " + result);
});




function employee(){
    console.log("In misard employee"); 
}
function employeeDetails(callback,gender){
    console.log("Employee details");
    //callback();
    console.log("Name: Raju");
    console.log("Age: 24");
    console.log("Address: Mumbai");
    console.log(gender);
    callback();
}
employeeDetails(employee,"male");



function z00(){
    console.log("lions in the zoo");

}
function zooDetails(callback,param1,param2){
    console.log("elephants");
    console.log("tigers");
    callback();
}
zooDetails(z00,"elephants","tigers");


function movies(callbackfn){
        callbackfn();

}
movies(function(){
    console.log("bhanu prakash raju ia an movie lover");
});


function sports(callbackfn){
    callbackfn();
}
sports(function(){
    console.log("bhanu prakash raju is an sports lover");
}); 

