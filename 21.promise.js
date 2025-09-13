


let mypromise = new Promise((successfn,rejectfn)=>{
    
    let isTrue = false;
    if(isTrue){
    successfn();
    }
    else{
      rejectfn();
    }
});



mypromise.then(function(){
     console.log("success");
}).catch(function(){
     console.log("some error occured")
})




let name= new Promise((resolve,reject)=>{
    let isname=true;
    if(isname){
        resolve();
    }
    else{
        reject();
    }
});

name.then(function(){
    console.log("name is bhanu prakash");
}).catch(function(){
    console.log("name is not found")
})



let age= new Promise((sucess,fail)=>{
    let isage=true;
    if(isage){
        sucess();
    }else{
        fail();
    }
});
age.then(function(){
    console.log("age is 22");
}).catch(function(){
    console.log("age is not found");
});



let animal=new Promise((animal1,animal2)=>{
    let isanimal=true;
    if(isanimal){
        animal1();
    }else{
        animal2();
    }
});
animal.then(function(){
    console.log("animal is dog");
}).catch(function(){
    console.log("animal is not found");
});