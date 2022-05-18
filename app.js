const lightModeBtn = document.getElementById("light-mode-button");
const lightClass = document.getElementById("body");
const checkLocalStoage = localStorage.getItem("light");

if (checkLocalStoage === "light") {
  handleLightMode();
}

function handleLightMode() {
  body.classList.toggle("light");
}

lightModeBtn.addEventListener("click", handleLightMode);

function handleLightToggle() {
  const savedMode = localStorage.getItem("light");
  if (savedMode === null) {
    localStorage.setItem("light", "light");
  } else {
    localStorage.removeItem("light", "light");
  }
}

lightModeBtn.addEventListener("click", handleLightToggle);
