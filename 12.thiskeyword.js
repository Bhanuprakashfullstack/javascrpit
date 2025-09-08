var author="ravindranathtagore";
console.log(this);

var name="bhanu prakash raju";
var books=["html","css","javascript"];
console.log(this.name);


var employee="kala";
this.address="pdtr";
console.log(this);

var obj = {
    studentname:"kalabhanu";
    studentage:23,
    studentaddress=function(){
        this.location="pdtr",
        this.location1="kadapa",
    }
}
obj.studentaddress();


var obj={
    studentname:"kalabhanu",
    studentage:"aug 28,2001",
    studentbooks:["html","css","javascript"],
    studentdetails:function(){
        console.log(this);
        console.log(this.studentname);
        console.log(this.studentbooks);

        
return obj;

    }

}
obj.studentdetails();
 console.log(this.studentbooks);
 obj.studentdetails();
 

 function myfun(){
    return Math.PI;
 }
 let result=myfun();
 console.log(result);


 var obj={
    name:"kalabhanu",
    age:"may 29, 2001",
    sujects:["telgu","hindi","english"],
    getstudentdetails:function(){
            return "bhanuprakash raju";
            console.log(this.sujects);
 }
}
  console.log(obj.getstudentdetails());
console.log(this);



