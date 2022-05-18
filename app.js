const lightModeBtn = document.getElementById("light-mode-button");
const lightClass = document.getElementById("body");

function handleLightMode() {
  body.classList.toggle("light");
}

lightModeBtn.addEventListener("click", handleLightMode);

/*
const lightModeBtn = document.getElementById("light-mode-button");
const lightClass = document.getElementById("body");
const modeInStorage = localStorage.getItem("light");



function enableLight() {
  body.classList.remove("light");
    localStorage.setItem("light", "hello");
  }

function disableLight() {
  body.classList.add("light");
  localStorage.removeItem("light", null);
}
if (modeInStorage !== null) {
  enableLight();
}
function handleTheLightBtn(){
  if (modeInStorage === null) {
    enableLight();
    console.log("enabled");
  } else {
    disableLight();
    console.log("disabled");

  }
}

lightModeBtn.addEventListener("click", handleTheLightBtn);
*/