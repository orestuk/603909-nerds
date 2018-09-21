var link = document.querySelector(".footer-contacts-button");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var userName = popup.querySelector("[name=userName]");
var form = popup.querySelector("form");
var userEmail = popup.querySelector("[name=userEmail]");
var userText = popup.querySelector("[name=userText]");

var removeValidationErrors = function () {
  userName.classList.remove("modal-validation-error");
  userEmail.classList.remove("modal-validation-error");
  userText.classList.remove("modal-validation-error");
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  removeValidationErrors();
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value)
  {
    evt.preventDefault();
    popup.classList.add("modal-error");
    if (!userName.value)
    {
      userName.classList.add("modal-validation-error");
    }
    else {
      userName.classList.remove("modal-validation-error");
    }
    if (!userEmail.value)
    {
      userEmail.classList.add("modal-validation-error");
    }
    else {
      userEmail.classList.remove("modal-validation-error");
    }
    if (!userText.value)
    {
      userText.classList.add("modal-validation-error");
    }
    else {
      userText.classList.remove("modal-validation-error");
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    removeValidationErrors()
  }
});
