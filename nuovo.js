console.log('Hello branch');

////////////////////
const btn = document.querySelector("button");

btn.addEventListener("click", togli);

function togli() {
    document.querySelector(".branch-class").innerHTML = "bravo";
}