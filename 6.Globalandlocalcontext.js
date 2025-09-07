//global context
var zoo="lion";
//local block 1
function animal(animal4,animal5,animal6)
{
    let animal1="pig";
    console.log("block 1animal:",animal1);
    console.log("global block:",zoo);
    console.log(animal4);
    console.log(animal5);
    console.log(animal6);
    
}
//local block 2
function animal2()
{
    let animal2="tiger";
    console.log("block 2 animal:",animal2);
    console.log("global block:",zoo);
}
animal("horse","elephant","giraffe");
animal2();

var num=10;
//local block 1
function number1(name,age,gender)
{
    let num1=45;
    console.log("local block 1:",num1);
    console.log("global block:",num);
    console.log(name);
    console.log(age);
    console.log(gender);
}
//local block 2
function number2()
{
    let num2=100;
    console.log("local block2:",num2);
    console.log("blobal block:",num);
}
number1("bhanu",23,"male");
number2();
