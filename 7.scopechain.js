//scope chain
//block 1
{
    let fruit1="apple";
    console.log("block 1:",fruit1);
    {
        //block 2
        let fruit2="banana";
        console.log("block 1:",fruit1);
        console.log("block 2:",fruit2);
        {
            //block 3
            let fruit3="pineapple";
            console.log("block 1:",fruit1);
            console.log("block 2:",fruit2);
            console.log("block 3:",fruit3); 
        }


    }
}

function numbers(a,b,c,d)
{
    let result=(a-b);
    console.log(result);
    let result2=(c*d);
    console.log(result2);
}
let result= numbers(100,200);
console.log(result);
let result2=numbers(300,400);
console.log(result2);

