document
  .getElementById("toggleDownMenu")
  .addEventListener("click", function () {
    var downMenu = document.querySelector(".downMenu");
    downMenu.style.display =
      downMenu.style.display === "none" ? "block" : "none";
  });



  // slider

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
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

document.getElementById("playButton").addEventListener("click", function() {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  modal.style.display = "block";
  videoPlayer.play();
});

document.querySelector(".close").addEventListener("click", function() {
  var modal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.pause();
  modal.style.display = "none";
});





