document.getElementsByClassName("button-background")[0].addEventListener("change", function(e){ loadImage(e, 'button-background', 'post-background') }, false);
document.getElementsByClassName("button-theme")[0].addEventListener("change",  function(e){ loadImage(e, 'button-theme', 'post-theme') }, false);
document.getElementsByClassName("button-logo")[0].addEventListener("change",  function(e){ loadImage(e, 'button-logo', 'post-logo') }, false);

function loadImage(e, buttonSelector, targetSelector) {
  const files = document.getElementsByClassName(buttonSelector)[0].children[0].files
  if (files.length > 0) {
    let img = document.createElement("img");
    img.className="post";
    img.src = window.URL.createObjectURL(files[0]);

    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      document.getElementsByClassName(targetSelector)[0].appendChild(img);
      

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

