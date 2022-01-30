const forest = document.querySelector("#forest");
const sun = document.querySelector("#sun");
const title = document.querySelector("#title");
const arSection = document.querySelector(".ar-feature");
const storySection = document.querySelector(".story");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  forest.style.top = value * 0.5 + "px";
  sun.style.top = value * 0.5 + "px";
  title.style.left = value * 1 + "px";
});

// window.onload = function () {
//   const effect = document.querySelector(".effect");

//   window.addEventListener("scroll", scrollEffectAppear);

//   function scrollEffectAppear() {
//     if (window.scrollY >= 500) {
//       effect.style.opacity = "1";
//       effect.style.transform = "translateX(0px)";
//       effect.style.transition = "0.7s ease-in-out";
//     } else {
//       effect.style.opacity = "0";
//       effect.style.transform = "translateX(-50px)";
//     }
//   }
// };

////////////////////RESPONSIVE NAVBAR///////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".left-side");
const navLink = document.querySelectorAll(".nav-button");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const readBtn = document.querySelector(".read-more-btn");
const readBtnTwo = document.querySelector(".read-more-btn-2");
const readText = document.querySelector(".read-more-text");
const readTextTwo = document.querySelector(".read-more-text-2");

readBtn.addEventListener("click", function () {
  if (readText.style.display == "none") {
    readText.style.display = "block";
    readBtn.innerHTML = "Read less...";
  } else {
    readText.style.display = "none";
    readBtn.innerHTML = "Read more...";
  }
});

readBtnTwo.addEventListener("click", function () {
  if (readTextTwo.style.display == "none") {
    readTextTwo.style.display = "block";
    readBtnTwo.innerHTML = "Read less...";
  } else {
    readTextTwo.style.display = "none";
    readBtnTwo.innerHTML = "Read more...";
  }
});
