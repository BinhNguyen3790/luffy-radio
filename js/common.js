var data = {};
var resultNameElm = document.querySelector(".result-name");
var resultEmailElm = document.querySelector(".result-email");
var resultFormElm = document.querySelector(".result-form");
var resultImgElm = document.querySelector(".result-img");
var popupElm = document.querySelector(".resultBox");
var bgPopupElm = document.querySelector(".bgPopup");
var closeBtn = document.querySelector(".result-close");
var submitElm = document.querySelector(".form-submit");
var nameElm = document.querySelector("#name");
var emailElm = document.querySelector("#email");
var myRadio = document.querySelectorAll(".myRadio");
var myGroupRadio = document.querySelectorAll(".form-group-radio");

myRadio.forEach(function (radio) {
  if (radio.checked) {
    var formGroup = radio.closest(".form-group-radio");
    formGroup.classList.add("active");
    data.form = radio.value;
  }
  radio.addEventListener("change", function () {
    var formGroup = this.closest(".form-group-radio");
    if (this.checked) {
      myGroupRadio.forEach(function (e) {
        e.classList.remove("active");
      });
      formGroup.classList.add("active");
      data.form = radio.value;
    }
  });
});

submitElm.onclick = function (e) {
  data.name = nameElm.value;
  data.email = emailElm.value;

  if (data.name != "" && data.email != "" && data.email.indexOf("@") != -1) {
    e.preventDefault();
    console.log(data);
    resultNameElm.innerHTML = `Name: ${data.name}`;
    resultEmailElm.innerHTML = `Email: ${data.email}`;
    resultFormElm.innerHTML = `Luffy Form: ${data.form}`;
    resultImgElm.innerHTML = `<img src="./imgs/luffy_${data.form}.png" alt="${data.form}_image">`;
    popupElm.classList.add("show");
    bgPopupElm.classList.add("show");
  }
};

closeBtn.onclick = function () {
  bgPopupElm.classList.remove("show");
  popupElm.classList.remove("show");
};

bgPopupElm.onclick = function () {
  bgPopupElm.classList.remove("show");
  popupElm.classList.remove("show");
};
