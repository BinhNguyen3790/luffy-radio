// get json
var loadElm = document.querySelector(".loading-icon");

fetch("data.json")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    var radioData = [];
    var pageElm = document.querySelector(".formPage");
    var headElm = document.querySelector(".formDesc .head");
    var pageDesc = document.querySelector(".formDesc .page_desc");
    var formTtlElm = document.querySelector(".form-title");
    var labelElm = document.querySelector(".label-radio");
    var formElm = document.querySelector(".formCtn");
    var grRadioElm = document.querySelector(".group-radio");
    var charName = document.querySelector(".result-nameCharater");
    var charPrice = document.querySelector(".result-price");
    var stylePageBg = document.createElement("style");
    var styleBeforeChar = document.createElement("style");
    var styleAfterChar = document.createElement("style");
    var videoBg = document.querySelector(".videoBg");

    stylePageBg.innerHTML = `.${json.data.form_name} { background-image: url(./imgs/${json.data.bg_page}); }`;
    styleBeforeChar.innerHTML = `.formCtn:before { background-image: url(./imgs/${json.data.character}); }`;
    styleAfterChar.innerHTML = `.formCtn:after { background-image: url(./imgs/${json.data.meme}); }`;

    document.head.appendChild(stylePageBg);
    document.head.appendChild(styleBeforeChar);
    document.head.appendChild(styleAfterChar);

    pageElm.classList.add(json.data.form_name);
    formElm.style.backgroundImage = `url('./imgs/${json.data.bg_form}')`;
    headElm.innerHTML = json.data.head;
    pageDesc.innerHTML = json.data.title;
    formTtlElm.innerHTML = json.data.title_form;
    labelElm.innerHTML = json.data.label_name;
    charName.innerHTML = json.data.character_name;
    charPrice.innerHTML = `$ ${json.data.character_price}-`;

    json.data.radios.forEach(function (radio, index) {
      var check,
        active = "";
      if (index == 0) {
        check = "checked";
        active = "active";
      }
      var elm = `<div class="form-group-radio ${active}">
        <input type="radio" value="${radio.radio_type}" name="luffy" class="myRadio" id="${radio.radio_type}" ${check}>
        <label class="label-group" for="${radio.radio_type}">
          <span class="radio-icon"></span>
          <span class="label-text">
            <span>${radio.radio_name}</span><br />
            <span>${radio.radio_desc}</span>
          </span>
        </label>
      </div> 
        `;
      radioData.push(elm);
    });
    setTimeout(() => {
      grRadioElm.innerHTML = radioData;
    }, 1000);
    setTimeout(() => {
      loadElm.style.display = "none";
      videoBg.classList.add("hide");
    }, 2000);
    setTimeout(() => {
      videoBg.style.width = "0px";
      showHide("boundman");
    }, 2500);
  })
  .then(function (err) {
    console.log(err);
  });

setTimeout(() => {
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
      showHide(radio.id);
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
}, 1500);

function showHide(data) {
  var boxChar = document.querySelector(".boxCharacter");
  var charImg = document.querySelector(".imgChar");
  charImg.src = `./imgs/luffy_${data}.png`;
  boxChar.classList.add("show");
  setTimeout(() => {
    boxChar.classList.add("hide");
  }, 2000);
  setTimeout(() => {
    boxChar.classList.remove("show");
    boxChar.classList.remove("hide");
  }, 2500);
}
