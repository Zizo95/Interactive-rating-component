const numbersEl = document.querySelector('.numbers');
const ratingEl = document.querySelector(".rating-no");
const sectionEl = document.querySelector("section");
const firstSection = document.querySelector(".first");
const buttonEl = document.querySelector("button");

numbersEl.addEventListener("click", function(){
  numbersEl.style.background = "hsl(25, 97%, 53%)"
  numbersEl.style.color = "hsl(0, 0%, 100%)"
})

buttonEl.addEventListener("click",function(){
  if (numbersEl == 1){
ratingEl.innerHTML = "1";
  }
sectionEl.style.display = "block"
firstSection.style.display = "none"
})
