function car(carname,carowner,date){
    console.log("car")
    this.name=carname
    this.owner=carowner
    this.cardate=date


    console.log(this);
}



car.prototype.getcarinfo=function(){
    console.log("card brand is benz and model is top");
    console.log("honda");
}

car.prototype.getcarlocationdetails=function(location,branch){
    this.located=location
    this.branch=branch
    console.log(this);
}
new car("shift","bhanu","aug 28").getcarinfo();
new car("hydrabad","hydbranch").getcarlocationdetails();
