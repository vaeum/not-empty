const notEmpty = (...arg) => {
  if(!arg.length) return false;

  function classof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  let arr = arg.filter((e, i) => {
    switch (classof(e)){
      case("String"): return stringFunc(e); break;
      case("Boolean"): return booleanFunc(e); break;
      case("Array"): return arrayFunc(e); break;
      case("Object"): return objectFunc(e); break;
      case("Null"): return false; break;
      case("Undefined"): return false; break;
      default: return false;
    }
  });

  function stringFunc(string) {
    if(string) return true;
    return false;
  }

  function booleanFunc(bool) {
    if(bool) return true;
    return false;
  }

  function arrayFunc(array) {
    if(array.length) return true;
    return false;
  }

  function objectFunc(object) {
    if(Object.keys(object).length) return true;
    return false;
  }

  return arr.length == arg.length ? true : false;
}
