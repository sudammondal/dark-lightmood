// let newButtoN = document.createElement("button");
// newButtoN.innerText = "Click Me!";

// newButtoN.style.backgroundColor = "red";
// newButtoN.style.color = "#fff";

// document.querySelector("body").prepend(newButtoN);

// let content = document.querySelector("p ");


// content.classList.add("Newcontent");
// content.classList.remove("Newcontent2");


// let butt1 = document.querySelector("#butt1");
// butt1.onclick = () => {
//     console.log("sudam mondal fast javascript");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("hover one mouse active");
// };

// =================================================================

//  var a = 5;
//  var b = 45;
//   z = a+b;
//  function MyFunction() {
//   console.log(z);
//   // return MyFunction();
// }
// MyFunction();

//========== Mood Chenge Js===============//

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});



