(function () {
    console.log("hello bhanu");
})();

(function (bookname) {
    console.log(bookname);
})("mahabharatham");

(function () {
    let animal1 = "snake";
    console.log(animal1);
    let animal2 = "elephant";
    console.log(animal2);
})();

let names = () => {
    console.log("hello bhanu");

}
names();

let employe = () => {
    let studentdetails = [
        {
            "name": "bhanu",
            "age": 23,
            "gender": "male"
        }

   , {
            "name": "kala",
            "age": 22,
            "gender": "female"
        }]
    console.log(studentdetails);
    console.log(studentdetails[0].name);
    console.log(studentdetails[0].age);
    console.log(studentdetails);
}
employe();