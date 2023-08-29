//let count =0
//function increment(){
// console.log("this button is clicked");
//  document.getElementById(count-el).innerHTML=count;
//}
let count = 0;
//arow function
let countel = document.getElementById("count-el"); //paragraph
let saveEl = document.getElementById("save-el"); //butoom id
function increment() {
  count += 1;
  countel.innerHTML = count;
}
// 2. Create a variable th at contains both the count and the dash separator, i.e. "12 - "

// NB: Make sure to not delete the existing content of the paragraph
function save() {
  let countdash = count + "-";
  saveEl.textContent += countdash;
  countel.textContent = 0;
  count = 0;
}

