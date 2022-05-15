const lightModeBtn = document.getElementById("light-mode-button");
const lightClass = document.getElementById("body");

function handleLightMode() {
  body.classList.toggle("light");
}

lightModeBtn.addEventListener("click", handleLightMode);
