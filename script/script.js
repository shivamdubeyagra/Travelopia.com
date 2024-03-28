let ToggleMenu = document.getElementById("toggle-menu");
let NavMenu = document.querySelector("ul");


ToggleMenu.addEventListener("click", () => {
  NavMenu.classList.toggle("showMenu");
});


function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("click-button").addEventListener("click", openPopup);
