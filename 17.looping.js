//looping in javascript

//while loop
let i = 0;
while (i < 5) {
    console.log("The value of i is: " + i);
    i++;
}


let rule = 0;
while (rule < 5) {
    console.log("hello", rule);
    rule = rule + 1;
}



let name = 0;
while (name < 5) {
    console.log("hello how are you bhanu ?", name);
    name = name + 1;
}


let j = 0;
while (j < 5) {
    console.log("the value of j is:", j);
    j = j + 1;
}


let name1 = "king";
let name2 = "kala";
let name3 = "prakash";
if (name1) {
    console.log("hello bhanu");

}
else if (name2) {
    console.log("hello kala");
}
else {
    console.log("hello prakash");
}


let age = 0;
while (age < 18) {
    console.log("you are eligible for vote", age);
    age = age + 1;
}



let num = 0;
while (num < 10) {
    console.log("while loop can be run", num);
    num = num + 1;
}

//do while loop

let animal = 0;
do {
    console.log("the animal is lion", animal);
    animal = animal + 1;
}
    while (animal < 7);


    let js=0;
    do{
        console.log("i love you javascript",js);
        js=js+1;
    }
    while(js<5);



    //for in loop

    let person = {
        name: "bhanu",
        age: 24,
        city: "banglore"
    }
    for (let key in person) {
        console.log(key, ":", person[key]);
    }   


    let studentdetails={
        name:"kala",
        college:"Aits",
        branch:"mca"
    }
    for(let kalaa in studentdetails){
        console.log(kalaa,":",studentdetails[kalaa]);
    }


    let employee={
        name:"prakash",
        company:"google",
        position:"developer"
    }
    for(let emp in employee){
        console.log(emp,":",employee[emp]);
    }


    //for of loop

    let colors = ["red", "green", "blue", "yellow"];
    for (let color of colors) {
        console.log(color.toUpperCase());
    }   


    let employees=["bhanu","kala","prakash","raju"];
    for(let emp of employees){
        console.log(emp);
    }


    //for loop
    //syntax
    // for(initialization;condition;increment/decrement){

    for(let i=0;i<5;i++){
        console.log("bhanu",i);
    }


    