//posh automation
//created 11/21/2019


window.onload = function() {

console.log("hi");




function delay() {
  return new Promise(resolve => setTimeout(resolve, 3200));
}
function delay2() {
  return new Promise(resolve => setTimeout(resolve, 5200));
}

async function delayedLog(item) {
  // notice that we can await a function
  // that returns a promise

  item.click()
  // console.log('the early
  await delay();

  lk = document.getElementsByClassName('pm-followers-share-link grey')[0];
  lk.click();


}

async function processArray(array, i) {
  for (const item of array) {   // for each share button
    await delayedLog(item);
    console.log(item);

  }
  console.log('Done!');
}





// range = (1..num)

async function doFor() {
  // console.log(s + "starting set")
   x = document.getElementsByClassName('party-time')[0];
   myString = x.textContent;
   myStr = myString.replace(/\D/g,'');
   num = parseInt(myStr);
  console.log(num + "listings");


  for (var i = 0; i < num; i += 48) {  // for each share button
    s =  document.querySelectorAll('.share-gray')
    var m = Array.from(s).slice(i)
    await processArray(m);
    window.scrollTo(0,document.body.scrollHeight);
    await delay2();
    console.log("ONTO NEXT SET")
   }
}

doFor();
}
