var outPut = document.querySelector("input");
var btns = document.querySelectorAll(".numbers");
var clearBtn = document.querySelector(".clear");
var equalBtn = document.querySelector(".equal");
var delBtn = document.querySelector(".delete");
for (var x = 0; x < btns.length; x++) {
    btns[x].addEventListener("click", (m) => {
        outPut.value += m.target.dataset.number; 
    });
}
equalBtn.addEventListener("click", () => {
    outPut.value === "" 
    ? outPut.value = ""
    : outPut.value = eval(outPut.value);
});
clearBtn.addEventListener("click", () => {
    outPut.value = "";
});
delBtn.addEventListener("click" , () => {
    outPut.value = outPut.value.slice(0 , -1);
})