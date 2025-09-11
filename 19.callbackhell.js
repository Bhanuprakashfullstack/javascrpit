
function stepOne(callbackfn) {
    console.log("step-1")
    callbackfn();
}

function stepTwo(callbackfn) {
    console.log("step-2")
    callbackfn();
}

function stepThree() {
    console.log("step-3")
}

stepOne(() => {
    stepTwo(() => {
        stepThree();
    });
})



function studentaname(callback) {
    console.log("my name is bhanu prakash raju");
    callback();
}
function studentcollegename(callbackfn) {
    console.log("my college name is annamacharya institute of technology and sciences");
    callbackfn();
}
function studentlocation() {
    console.log("my college is located in proddatur");
}
studentaname(() => {
    studentcollegename(() => {
        studentlocation();
    });
})


    function executeSkill(location , callbackfun){
     callbackfun("HTML" , "CSS" , "JS"   , location);
}

executeSkill("Bangolore" , (tech1, tech2 , tech3  , locname)=>{
    console.log(`MY skill set is now ${tech1} , ${tech2} & ${tech3}`);
    console.log(`Location is ${locname}` );
});

