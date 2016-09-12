var Pool = (function()
{
  // exposed methods:

  var create = function(type, size)
  {
    var obj = Object.create(def);
    obj.init(type,size);

    return obj;
  };

  // Ship Definition:

  var def =
  {
    _type: null,
    _size: null,
    _pointer: null,
    _elements: null,

    init: function(type,size)
    {
      this._type = type;
      this._size = size;
      this._pointer =size;
      this._elements = [];

      var i = 0;
      var length - this._size;

      for(i; i < length; ++i)
      {
        this._elements[i] = this._type.create();
        this._elements[i] = this._type.create();
      }
    }
  }
// fds
// http://codepen.io/jeffibacache/pen/bzBsp?editors=0010

})
