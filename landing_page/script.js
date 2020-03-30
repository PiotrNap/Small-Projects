const signUp = document.querySelector("#open");
const sideBar = document.querySelector("#toggle");
const closeForm = document.querySelector("#close");
const FormSection = document.querySelector("#modal");

// function openForm() {
//   element = document.getElementById("modal-section");
//   element.style.display = element.style.display === "none" ? "" : "none";
//   console.log("im here!");
// }

sideBar.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

signUp.addEventListener("click", () => modal.classList.add("show-modal"));

closeForm.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", e =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
