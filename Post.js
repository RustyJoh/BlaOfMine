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
    this._bgImageSelector = 'post-background';
    this._templateImageSelector = 'post-theme';
    this._logoImageSelector = 'post-logo';

  }
  get bgImageElement() {
    return document.getElementsByClassName(this._bgImageSelector)[0]
  }
  get templateImageElement() {
    return document.getElementsByClassName(this._templateImageSelector)[0]
  }

  get logoImageElement() {
    return document.getElementsByClassName(this._logoImageSelector)[0]
  }

  set bgImage(imageFile) {
    this._loadImage(imageFile, this.bgImageElement)
    this._bgImage = imageFile;

  }
  get bgImage() {
    return this._bgImage
  }
  set templateImage(imageFile) {
    this._loadImage(imageFile, this.templateImageElement)
    this._templateImage = imageFile;


  }
  get templateImage() {
    return this._templateImage
  }
  set logo(imageFile) {
    this._loadImage(imageFile, this.logoImageElement) 
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
  convertInputToCanvasText() {
    let input = document.getElementsByClassName("textbox");
    let textValue = document.getElementsByClassName("textbox")[0].value;
    drawText(this._ctx, textValue);
    document.getElementsByClassName("post")[0].removeChild(input[0]);
  }

  convertImgToCanvas(imgElement) {
    this._ctx.drawImage(this.bgImageElement, 0, 0);
    //     drawImageProp(this._ctx, imgElement)
    document.getElementsByClassName("post")[0].removeChild(img[0]);
  }
  convertAndDownloadPost(e) {
    this.convertImgToCanvas(this.bgImageElement)
    post.convertInputToCanvasText();
    post.convertImgToCanvas(imgElement);

    let link = document.getElementsByClassName('downloadButton')[0];
    link.href = canvas.toDataURL();
    link.download = "Post-1";
  }

  _loadImage(imageFile, parentDivElement) {
    if (imageFile) {
      let img = document.createElement("img");
      img.className = "post";
      img.src = window.URL.createObjectURL(imageFile);
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
        parentDivElement.appendChild(img);
      }
    }
  }
}