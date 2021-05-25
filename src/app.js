const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const actlink = document.querySelectorAll(".nav-links a");

const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo img");
const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");

const clc1 = document.querySelector(".cancel1");
const arr1 = document.querySelector(".arr_container1");

const clc2 = document.querySelector(".cancel2");
const arr2 = document.querySelector(".arr_container2");

const left_container = document.querySelector(".left_container");
const left_container1 = document.querySelector(".left_container1");
const left_container2 = document.querySelector(".left_container2");

arr.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (left_container.classList.contains("off")) {
    left_container.classList.remove("off");
    left_container.classList.add("active");
  }
});
clc.addEventListener("click", () => {
  arr.classList.remove("active_arr");
  if (left_container.classList.contains("active")) {
    left_container.classList.remove("active");
    left_container.classList.add("off");
  }
});

arr1.addEventListener("click", () => {
  arr1.classList.add("active_arr");
  if (left_container1.classList.contains("off")) {
    left_container1.classList.remove("off");
    left_container1.classList.add("active");
  }
});
clc1.addEventListener("click", () => {
  arr1.classList.remove("active_arr");
  if (left_container1.classList.contains("active")) {
    left_container1.classList.remove("active");
    left_container1.classList.add("off");
  }
});

arr2.addEventListener("click", () => {
  arr2.classList.add("active_arr");
  if (left_container2.classList.contains("off")) {
    left_container2.classList.remove("off");
    left_container2.classList.add("active");
  }
});
clc2.addEventListener("click", () => {
  arr2.classList.remove("active_arr");
  if (left_container2.classList.contains("active")) {
    left_container2.classList.remove("active");
    left_container2.classList.add("off");
  }
});

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    nav.classList.add("navshadow");
  } else {
    nav.classList.remove("navshadow");
  }
};

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("toggle");
  links.forEach((link) => {
    link.classList.add("fade");
  });
  actlink.forEach((li) => {
    li.addEventListener("click", () => {
      navlinks.classList.remove("open");
      burger.classList.remove("toggle");
      links.forEach((link) => {
        link.classList.remove("fade");
      });
    });
  });
});
