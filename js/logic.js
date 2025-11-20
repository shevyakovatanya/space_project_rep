const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("auth-modal");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
