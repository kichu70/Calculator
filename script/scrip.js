const display =document.getElementById("display");
let dislay =document.getElementById("display")
function perentage() {
  let value = parseFloat(dislay.value);
  if (!isNaN(value)) {
    dislay.value = value / 100;
  }
}
function epual() {
 if (["//"].includes(dislay.value)) {
    console.log("error")
    location.reload(dislay.value);
 }


  try {
    const result = eval(dislay.value); 
    console.log("runing")
    dislay.value = result;
    console.log(result)
  } catch {
    alert("invalid sintax")
    console.log("error")
    location.reload(dislay.value);
  }
}










// SPdisplay//
const spFunction =document.getElementById("spfunction")
function openSpeacial(){
    spFunction.style.display ="block" ;
}
// window.addEventListener("mouseup", function (event) {
//      var arr = document.getElementById("spfunction");
//     if (event.target != arr && event.target.parentNode != arr) {
//       arr.style.display = "none";
//     }
//   }
// );