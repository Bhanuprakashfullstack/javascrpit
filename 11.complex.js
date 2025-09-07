//complex datatypes=>objects , arrays , functions
var studentdetails ={
    studentname:"bhanu",
    studetage  :23,
    studrollno:11,
    subjects:["html","javascript","css"],
    collegename:function(address){
                  console.log("king");
                  console.log(address)
                  }
}
console.log(studentdetails.studentname);
console.log(studentdetails);
console.log(studentdetails.subjects[0]);
console.log(studentdetails.subjects);
studentdetails.collegename("rajampet")



var name="Bhanu prakash raju";
var fullname=name.length
console.log(fullname);

let rollno="1 66  2356"
let  numbers=rollno.length
console.log(numbers);


var name1="javascript";
var uppercase=name1.toLocaleUpperCase()
console.log(uppercase)


function sayhello(bhanu){
    bhanu();

}
sayhello(function(){
    console.log("hi bhanu prakash raju you are the king")
})



function employe(empdetails){

    empdetails();

}
employe(function(){
    console.log("employeid")
    console.log("employename")
    
})
