let ctx
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
    this._loadImage(imageFile, 'post-logo')
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

  _loadImage(imageFile, targetSelectorClassName) {
    if (imageFile) {
      let img = document.createElement("img");
      img.className = "post";
      img.src = window.URL.createObjectURL(imageFile);
      let canvas = this._canvas
      let ctx = this._ctx
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
//         targetSelector.appendChild(img)
//         ctx.drawImage(img, 0,0,600,600, 0, 0, 600, 600);
        let scaledImage = scaleIt(canvas,ctx,img, 0.5) 
 
//         canvas.width = scaledImage.width / 2;
//         canvas.height = scaledImage.height / 2;
//         drawImageProp(ctx, scaledImage)
      }
    }
  }
}