let saveEle = document.getElementById("save-el")
let countEle = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEle.textContent = count;
}

function save() {
   let savedCount = count + " - ";
   saveEle.textContent  +=  savedCount;
   countEle.textContent = 0;
   count = 0;
}