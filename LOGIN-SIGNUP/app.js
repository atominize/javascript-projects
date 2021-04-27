const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  console.log("clicked");
  container.classList.add("sign-in-mode");
});
signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-in-mode");
});
