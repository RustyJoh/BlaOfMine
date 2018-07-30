let id = 0
class Post {
  constructor(canvas) {
    canvas.width = 512;
    canvas.height = 512;
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._id = id++;
    this._name = '';
    this._bgImage = null;
    this._templateImage = null;
    this._logo = null;
    this._text = '';
  }

  set bgImage(imageFile) {
    this._loadImage(imageFile, 'post-background')
    this._bgImage = imageFile;

  }
  get bgImage() {
    return this._bgImage
  }
  set templateImage(imageFile) {
    this._loadImage(imageFile, 'post-theme')
    this._templateImage = imageFile;

  }
  get templateImage() {
    return this._templateImage
  }
  set logo(imageFile) {
    this._loadImage(imageFile, 'post-logo', 0.2, {
      top: 10,
      left: 200
    })
    this._logo = imageFile;

  }
  get logo() {
    return this._logo
  }
  set text(textInput) {
    this._text(textInput, 'post-text')
    this._text = textInput;

  }
  get text() {
    return this._text
  }
  savePost(e) {
    let link = document.getElementsByClassName('downloadButton')[0];
      link.href = canvas.toDataURL();
      link.download = "Post-1";
  }
  convertInputToCanvasText(e) {
    let input = document.getElementsByClassName("textbox");
    let textValue = document.getElementsByClassName("textbox")[0].value;
    drawText(this._ctx, textValue);
    document.getElementsByClassName("post")[0].removeChild(input[0]);
    console.log(input);
  }

  _loadImage(imageFile, targetSelectorClassName, scaleFactor, position) {
    if (!scaleFactor) {
      scaleFactor = 1
    }
    if (!position) {
      position = {
        left: 0,
        top: 0
      }
    }
    if (imageFile) {
      let img = document.createElement("img");
      img.className = "post";
      img.src = window.URL.createObjectURL(imageFile);
      let canvas = this._canvas
      let ctx = this._ctx
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
        scaleAndDraw(canvas, ctx, img, scaleFactor, position.left, position.top)
      }
    }
  }
}

let post = new Post(document.getElementById('myCanvas'))

document.getElementsByClassName("button-background")[0].addEventListener("change", function(e) {
  post.bgImage = e.target.files[0]
}, false);
document.getElementsByClassName("button-theme")[0].addEventListener("change", function(e) {
  post.templateImage = e.target.files[0]
}, false);
document.getElementsByClassName("button-logo")[0].addEventListener("change", function(e) {
  post.logo = e.target.files[0]
}, false);
document.getElementsByClassName("downloadButton")[0].addEventListener("click", function(e) {
  post.convertInputToCanvasText(e)
  post.savePost(e)
}, false);
// document.getElementsByClassName("button-text")[0].addEventListener("change", function(e) {
//   post.text = e.target.input[0]
// }, false);
window.onload = function() {
  canvas = document.getElementById('myCanvas');
  document.getElementsByClassName("textbox");
}

function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r, // new prop. width
    nh = ih * r, // new prop. height
    cx, cy, cw, ch, ar = 1;

  // decide which gap to fill    
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  ctx.drawImage(img, cx + tempCounter, cy + (tempCounter += 50), cw, ch, x, y, w, h);
}

function scaleAndDraw(canvas, ctx, img, scaleFactor, x, y) {
  let w = canvas.width * scaleFactor;
  let h = canvas.height * scaleFactor;
  ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
    x, y, w, h); // destination rectangle
  return (canvas);
}
let font = "25px Arial";

function drawText(ctx, textValue) {
  ctx.textAlign = 'rtl';
  ctx.fillStyle = 'white';
  ctx.font = font;
  ctx.fillText(textValue, 190, 240);
}

// addEventListener('save-button', () => {
//   convertInputToCanvasText()
//   savePost()
//   movePostToPostsCollection()
//   cleanMainPost()
//   createNewMainPost()
// })