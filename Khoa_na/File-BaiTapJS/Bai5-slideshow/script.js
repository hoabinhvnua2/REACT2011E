let slide = document.getElementsByClassName("container__slideShow");
let length = slide.length;
let slideIndex = 0;
let dot = document.querySelectorAll("div.container__dots span");
function showSlide(slideindex) {
  slide[slideindex].style.display = "block";
}
slideDot(slideIndex);

function slidePlus(clickNext) {
  clearInterval(auto);
  for (let i = 0; i < length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex += clickNext;
  if (slideIndex === 4) {
    slideIndex = 0;
  }
  if (slideIndex === -1) {
    slideIndex = 3;
  }
  slideDot(slideIndex);
}

function slideDot(clickDot) {
  for (let i = 0; i < length; i++) {
    slide[i].style.display = "none";
  }
  showSlide(clickDot);
  let leng = dot.length;
  for (let i = 0; i < leng; i++) {
    dot[i].classList.remove("active");
  }
  dot[clickDot].classList.add("active");
}

let auto = setInterval(() => {
  slidePlus(1);
}, 5000);
