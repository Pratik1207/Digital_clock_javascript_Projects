const clock = document.querySelector("#clock");

// const date = new Date();
// console.log(date.toLocaleTimeString()); // it gives time but not continuous

// there is a event known as set interval

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
