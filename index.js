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
    }
  }


})
