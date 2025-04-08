const inputElement = document.querySelector(".input");
const bodyElement = document.querySelector("body");

// on starting site we look for mode
inputElement.checked = JSON.parse(localStorage.getItem("mode"));
updateBody()

function updateBody() {
  if (inputElement.checked) {
    bodyElement.style.background = "black";
  } else {
    bodyElement.style.background = "white";
  }
}

inputElement.addEventListener("click", (evt) => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}
