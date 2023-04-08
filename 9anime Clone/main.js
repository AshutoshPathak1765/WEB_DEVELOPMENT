const closeBtn = document.getElementById("close-btn");
const btn = document.getElementById("btn");
const card = document.getElementById("card-1");

btn.addEventListener("click", (e) => {
    card.style.display = "block";
})

closeBtn.addEventListener("click", (e) => {
    card.style.display = "none";
})