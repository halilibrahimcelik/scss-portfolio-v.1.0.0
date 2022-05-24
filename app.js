const collapsible = document.querySelector(".navBar");
const toggleBtn = document.querySelector(".button");

toggleBtn.addEventListener("click", () => {
  collapsible.classList.toggle("collapsible--expanded");
});
