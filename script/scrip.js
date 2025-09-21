const display =document.getElementById("display");
let dislay =document.getElementById("display")

let a =[];
let maxLength = 5;
let b;


function perentage() {
  let value = parseFloat(dislay.value);
  if (!isNaN(value)) {
    dislay.value = value / 100;
  }
}
function epual() {
  try {
    const result = eval(dislay.value); 
    dislay.value = result;
    console.log(result,"test result")
        if(a.length >= maxLength){
      a.shift(); // remove oldest if max reached
    }
    a.push(result)
    updateP()



    console.log(a ,"result store in a")  
    

    if(result== undefined ){
    location.reload(dislay.value);
    }
  } catch {
    alert("invalid sintax")
    console.log("error")
    location.reload(dislay.value);
  }
}
// -----------try--------
function updateP(){
  const pElement =[".p1",".p2",".p3",".p4",".p5"]
  for( let i=0; i<5; i++){
    let p = document.querySelector(pElement[i])
    p.innerHTML = a [i] !== undefined ? a[i]: "";
  }
}

function showInDisplay(index) {
  if(a[index] !== undefined){
    display.value += "+" + a[index];
  }
}

// ----------------------
function openPrev(){
  const hidden =document.querySelector(".hidden");
    hidden.style.display="block"
  
}
window.addEventListener("mouseup", function (event) {
     var arr = document.querySelector(".hidden");
    if (event.target != arr && event.target.parentNode != arr) {
      arr.style.display = "none";
    }
  }
);






















//----------------------------------------------------

    // if(a.length >=maxLength){
    //   a.shift();
    // }
    //  a.push(result)




//data1();
    // data2();
    // data3();
    // data4();
    // data5();
// // 1
// function data1(){
// const p1 = document.querySelector(".p1");
//   p1.textContent = a[0];
//   console.log(Number(p1.textContent),"p1 in function")
// }

// // 2
// function data2(){
// const p2 = document.querySelector(".p2");
//   p2.textContent = a[1];
//   console.log(Number(p2.textContent),"p2 in function")
// }

// // 3
// function data3(){
// const p3 = document.querySelector(".p3");
//   p3.textContent = a[2];
//   console.log(Number(p3.textContent),"p3 in function")
// }

// // 4
// function data4(){
// const p4 = document.querySelector(".p4");
//   p4.textContent = a[3];
//   console.log(Number(p4.textContent),"p4 in function")
// }

// // 5
// function data5(){
// const p5 = document.querySelector(".p5");
//   p5.textContent = a[4];
//   console.log(Number(p5.textContent),"p5 in function")
// }

