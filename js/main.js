"use strict";

//This code is used to focus username and password fields
const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
//-------------------------------------------------------
// document.querySelector("btn").addEventListener("click", function () {
//   if (document.querySelector(".input").textContent == "sa") {
//     console.log(`username is ${testContent}`);
//   }
// });

//MSSQLSERVER
