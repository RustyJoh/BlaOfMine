document.getElementsByClassName("button-background")[0].addEventListener("change", loadBackgroundImage, false);
function loadBackgroundImage(e) {
  const files = document.getElementsByClassName('button-background')[0].children[0].files
  if (files.length > 0) {
    let img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.height = 566;
    img.width = 1080;
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
    img.height = 566;
    img.width = 1080;
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      document.getElementsByClassName("post-theme")[0].appendChild(img);
   
    }
  }
}