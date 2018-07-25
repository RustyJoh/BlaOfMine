let id = 0

class Post {
  constructor(canvas) {
    this._canvas = canvas;
    this._id = id++;
    this._name = '';
    this._bgImage = null;
    this._templateImage = null;
    this._logo = null;
    this._text = '';
  }
}

module.exports = Post