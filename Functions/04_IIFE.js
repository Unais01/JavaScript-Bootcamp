(function multiply(){
    console.log("IIFE");
})();
(function multiply(n,m){
    console.log(n*m);
})(2,3);
// (function multiply(){
//     console.log("IIFE");
// })()
(()=>{
    console.log("morning");
})()