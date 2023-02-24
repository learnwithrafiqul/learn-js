// // function a() {
// //     console.log(b);
// // }

// // var b = 10;

// // a();

// // console.log(a);

// // let a = 10;
// // // var a = 10;
// // const b=20

// // var p =49;
// // console.log(this.p)

// var c = "ccc";
// {
//   let a = "a";
//   const b = "b";
//   var c = "c";
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// function y(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaster JS");
// }
// y();
// function y(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaster JS");
// }
// y();

function y() {
  for (var i = 1; i <= 5; i++) {
    function close(z) {
      setTimeout(function () {
        console.log(z);
      }, z * 1000);
    }
    close(i);
  }
  console.log("Namaster JS");
}
y();
