const text = document.getElementById("text");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", () => {
  text.textContent = "Mudassar Quraishi";
});