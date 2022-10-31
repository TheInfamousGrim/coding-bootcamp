// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   console.log(startTime);
//   while (new Date().getTime() < startTime + milliSeconds) {
//     console.log(`it's done!`);
//   }; 
// }
setTimeout(() => {
  document.querySelector('form button').classList.remove('display-none');
}, 8000)

// pause(8000);
// console.log('bing bong');