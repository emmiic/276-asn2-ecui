// JS variable scope
// global
// function - var
// block - let
// function myfunc(){
//     v = "myfunc_var";
//     let le = "myfunc_let";
//     console.log(v);
//     console.log(le);
//     for (let i = 0; i <10; i++) {
//         console.log(i);
//     }
//     // console.log(i); // exits if i was var

// }

// myfunc()
// console.log(v);

var cb1 = () =>{console.log("cb1");}
var cb2 = () =>{console.log("cb2");}

console.log("Start....");
setTimeout(cb1, 1000);
setTimeout(cb1, 500);
console.log("end....");
