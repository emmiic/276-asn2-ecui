// var a = window.prompt("Tell me your name", "Name");
// window.alert("Hello " + a);

// func1(1,2,3);
// func2(); // will say func2 is not a function as it is defined as a var below

//defined at the beginning
// function func1(a,b,c){
//     console.log(a+b+c);
// }

// var func2 = function(){
//     console.log("hello world");
// }

// func2();

// -- sorting arrays
// function asc(a,b){
//     return a-b;
// }

// function dsc(a,b){
//     return b-a;
// }

// var arr =[10,22,13,54,5,69];

// arr.sort(asc);  // example of a call-back function
// arr.sort(dsc);

// // for (i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// // for (item in arr) {
// //     console.log(arr[item]);
// // }

// var x = arr.every(function(val) {
//     return val >3;
// });

// console.log(x);

// -- objects
// var person = { 
//     firstname: "Bob",
//     lastname: "Smith",
//     id: 5555,
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// function Person(f,l,i,a) {
//     this.firstname = f;
//     this.lastname = l;
//     this.age = a;
//     this.id = i;
// }


// -- event handlers
function runcommand() {
    document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS";
}
document.getElementById("button").onclick = runcommand;
document.getElementById("button").onclick = (evt) => {evt.preventDefault(); console.log("hello");};
// -- event listeners

