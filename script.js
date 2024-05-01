const numbersEl = document.querySelectorAll('.numbers');
const ratingEl = document.querySelector(".rating-no");
const sectionEl = document.querySelector("section");
const firstSection = document.querySelector(".first");
const buttonEl = document.querySelector("button");



  
  numbersEl.forEach(numbersEl => {
    numbersEl.addEventListener("click", () => {
      numbersEl.style.background = "hsl(25, 97%, 53%)"
      numbersEl.style.color = "hsl(0, 0%, 100%)"
        ratingEl.innerHTML = numbersEl.innerHTML
    })
});

buttonEl.addEventListener("click",function(){
sectionEl.style.display = "block"
firstSection.style.display = "none"
})
