let countEl = document.querySelector(".count"); 
let inc = document.querySelector(".inc");
let reset = document.querySelector(".reset"); 

let count = 0;

function increment() {
    count += 1; 
    countEl.textContent = count
}

function resetCount() {
    count = 0 
    countEl.textContent = count;
}

inc.addEventListener("click", increment); 
reset.addEventListener("click", resetCount)