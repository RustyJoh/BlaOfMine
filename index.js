document.getElementsByClassName("button-background")[0].addEventListener("change", loadBackgroundImage, false);

function loadBackgroundImage(e) {
  const files = document.getElementsByClassName('button-background')[0].children[0].files
  if (files.length > 0) {
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 646;
    img.width = 646;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      document.getElementsByClassName("post-background")[0].appendChild(img);

    }
  }
}
document.getElementsByClassName("button-theme")[0].addEventListener("change", loadThemeImage, false);

function loadThemeImage(e) {
  const files = document.getElementsByClassName('button-theme')[0].children[0].files
  if (files.length > 0) {
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 646;
    img.width = 646;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      document.getElementsByClassName("post-theme")[0].appendChild(img);

    }
  }
}
document.getElementsByClassName("button-logo")[0].addEventListener("change", loadLogoImage, false);

function loadLogoImage(e) {
  const files = document.getElementsByClassName('button-logo')[0].children[0].files
  if (files.length > 0) {
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 175;
    img.width = 175;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      document.getElementsByClassName("post-logo")[0].appendChild(img);

    }
  }
}
document.getElementsByClassName("button-text")[0].addEventListener("click", showTextInput, false);

function showTextInput(e) {
  const text = document.getElementsByClassName("post-text")[0];
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
  console.log("button-text");
}