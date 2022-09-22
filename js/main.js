//========selecting element=========//
toTopBtn = document.querySelector(".toTop");
const dots = document.querySelectorAll(".dot");
const infoForDots = document.querySelectorAll(".dot__info");
const gallaryHolder = document.querySelector(".gallary__holder");
const gallaryPhoto = document.querySelectorAll(".gallary__item .pic");
//======given dots data index
infoForDots.forEach(function (infoBox, i) {
  infoBox.setAttribute("data-index", i);
});
//===== Real function for work
dots.forEach(function (dot, i) {
  dot.setAttribute("data-index", i);
  //=======make info show up when hover on dots
  dot.addEventListener("click", function () {
    const dotNumber = event.target.dataset.index;
    infoForDots.forEach(function (info, i) {
      if (dotNumber === info.dataset.index) {
        info.classList.add("dot__info--active");
      }
    });
  });

  //make info hidden when Mouse OUT

  dot.addEventListener("mouseout", function () {
    infoForDots.forEach((el) => el.classList.remove("dot__info--active"));
  });
});

//===== gallarys Show up
gallaryHolder.addEventListener("click", function (e) {
  //make all image back to normal state
  gallaryPhoto.forEach((sora) => {
    sora.style.height = "200px";
    sora.style.width = "250px";
    sora.querySelector("img").style.filter = "brightness(.5)";
    sora.previousElementSibling.style.opacity = 0.3;
  });
  //make target photo show up
  if (e.target.classList.contains("sora")) {
    e.target.parentElement.style.height = "100%";
    e.target.parentElement.style.width = "100%";
    e.target.style.filter = "brightness(1)";
    e.target.parentElement.previousElementSibling.style.opacity = 1;
  }
});

//========to Top
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 160) {
    toTopBtn.style.bottom = "40px";
    toTopBtn.style.opacity = 100;
  } else {
    toTopBtn.style.bottom = "-50px";
    toTopBtn.style.opacity = 0;
  }
});
//Prepare Canvas
// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");

// //Give Canvas same Res for container
// const exploreContainerScale = document
//   .querySelector(".explore .container")
//   .getBoundingClientRect();
// c.setAttribute("height", exploreContainerScale.height);
// c.setAttribute("width", exploreContainerScale.width);

// //Give path for each dot
// dots.forEach(function (el) {
//   dotPlace = el.getBoundingClientRect();
//   console.log(dotPlace);
//   // ctx.beginPath();
//   // ctx.moveTo(dotPlace.x, dotPlace.y);
//   // ctx.lineTo(550, 50);
//   // ctx.stroke();
//   // ctx.closePath();
// });
