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
document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');

    select.addEventListener('click', function() {
      dropdown.classList.toggle('open');
    });

    menu.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const selectedText = e.target.textContent;
        dropdown.querySelector('.selected').textContent = selectedText;
        dropdown.classList.remove('open');
      }
    });

    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });
});
