document
  .getElementById("toggleDownMenu")
  .addEventListener("click", function () {
    var downMenu = document.querySelector(".downMenu");
    downMenu.style.display =
      downMenu.style.display === "none" ? "block" : "none";
    downMenu.style.top = downMenu.style.top === "100px" ? "150px" : "100px"; // Eğer downMenu görünürse, 100px aşağıda değilse 150px aşağıda göster
  });
