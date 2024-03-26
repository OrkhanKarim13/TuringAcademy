document
  .getElementById("toggleDownMenu")
  .addEventListener("click", function () {
    var downMenu = document.querySelector(".downMenu");
    downMenu.style.display =
      downMenu.style.display === "none" ? "block" : "none";
  });

// slider

var swiper = new Swiper(".mySwiper", {
  effect: "drag",
  grabCursor: false,
  centeredSlides: false,
  slidesPerView: "auto",
  freeMode: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1000,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// footer select

// sidebar

function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// home video

document.getElementById("playButton").addEventListener("click", function () {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  modal.style.display = "block";
  videoPlayer.play();
});

document.querySelector(".close").addEventListener("click", function () {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.pause();
  modal.style.display = "none";
});

// select options
document.addEventListener("DOMContentLoaded", function () {
  const select1 = document.getElementById("custom-select1");
  const selectedOption1 = select1.querySelector(".selected-option");
  const options1 = select1.querySelector(".options");

  select1.addEventListener("click", function () {
    options1.style.display =
      options1.style.display === "none" ? "block" : "none";
  });

  options1.addEventListener("click", function (e) {
    const clickedOption = e.target.dataset.value;
    if (clickedOption) {
      selectedOption1.textContent = clickedOption;
      options1.style.display = "none";
      const allOptions = options1.querySelectorAll("li");
      allOptions.forEach((option) => {
        if (option.dataset.value !== clickedOption) {
          option.style.display = "block";
        }
      });
    }
  });

  const select2 = document.getElementById("custom-select2");
  const selectedOption2 = select2.querySelector(".selected-option");
  const options2 = select2.querySelector(".options");

  select2.addEventListener("click", function () {
    options2.style.display =
      options2.style.display === "none" ? "block" : "none";
  });

  options2.addEventListener("click", function (e) {
    const clickedOption = e.target.dataset.value;
    if (clickedOption) {
      selectedOption2.textContent = clickedOption;
      options2.style.display = "none";
      const allOptions = options2.querySelectorAll("li");
      allOptions.forEach((option) => {
        if (option.dataset.value !== clickedOption) {
          option.style.display = "block";
        }
      });
    }
  });

  document.addEventListener("click", function (e) {
    if (!select1.contains(e.target)) {
      options1.style.display = "none";
    }
    if (!select2.contains(e.target)) {
      options2.style.display = "none";
    }
  });
});
