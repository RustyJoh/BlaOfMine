document.getElementsByClassName("button-background")[0].addEventListener("change", function(e) {
  loadImage(e, 'button-background', 'post-background')
}, false);
document.getElementsByClassName("button-theme")[0].addEventListener("change", function(e) {
  loadImage(e, 'button-theme', 'post-theme')
}, false);
document.getElementsByClassName("button-logo")[0].addEventListener("change", function(e) {
  loadImage(e, 'button-logo', 'post-logo')
}, false);
let ctx 
let canvas

function loadImage(e, buttonSelectorClassName, targetSelectorClassName) {
  const files = document.getElementsByClassName(buttonSelectorClassName)[0].children[0].files
  const targetSelector = document.getElementsByClassName(targetSelectorClassName)[0]
  
  if (targetSelector.childNodes[0]) {
    targetSelector.removeChild(targetSelector.childNodes[0]);
  }
  
  
  if (files.length > 0) {
    let img = document.createElement("img");
    img.className = "post";
    img.src = window.URL.createObjectURL(files[0]);

    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
      targetSelector.appendChild(img);
//      ctx.drawImage(img, 0,0,600,600, 0, 0, 600, 600);
      let scaledImage = scaleIt(img,0.5)
      
      canvas.width=scaledImage.width/2;
      canvas.height=scaledImage.height/2;
      drawImageProp(ctx, scaledImage)
      
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
/*upload a canvas  */
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

}


/**
 * By Ken Fyrstenberg Nilsen
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
*/
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
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
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
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}

function scaleIt(source,scaleFactor){
  let c=document.createElement('canvas');
  let ctx1=c.getContext('2d');
  let w=source.width*scaleFactor;
  let h=source.height*scaleFactor;
  c.width=w;
  c.height=h;
  ctx1.drawImage(source,0,0,w,h);
  return(c);
}


