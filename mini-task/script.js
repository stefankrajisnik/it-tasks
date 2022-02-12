var myFunc = function(switchEl){
    console.log("<<<<<delay>>>>");
    var div = document.getElementsByClassName('main-wrapper')[0];
    div.style.backgroundColor = switchEl ? "rgba(34,54,32,0.7)" : "rgba(25,545,322,0.7)";
}
var count = 0;

var startIntervalFunction = function(){
     interval = setInterval(function(){
        myFunc(count % 2 ===0)
            count ++;
        
    },1000)
}

var stopIntervalFunction = function(){
    if(interval){
        clearInterval(interval);
        interval = null; 
        count = 0;
    }
    
}




var startIntervalBtn = document.getElementById("start-interval-btn");
startIntervalBtn.onclick = startIntervalFunction;

var stopIntervalBtn = document.getElementById("stop-interval-btn");
stopIntervalBtn.onclick = stopIntervalFunction;


// setTimeout(()=>{
//     myFunc(true);
// },1000)
// setTimeout(()=>{
//     myFunc(false);
// },2000)
// setTimeout(()=>{
//     myFunc(true);
// },3000)
// setTimeout(()=>{
//     myFunc(false);
// },4000)
// setTimeout(()=>{
//     myFunc(true);
// },5000)

//// ***BAD ATTEMPT****

// var count=0;

// while(true){
//     setTimeout(function(){
//         myFunc(count % 2 ===0 )
//     },1000)
//     count++
// }

