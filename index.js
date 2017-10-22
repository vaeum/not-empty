// const ARGUMENTS = 'Arguments';
// const GLOBAL = 'Global';
const ARRAY = 'Array';
const DATE = 'Date';
const ERROR = 'Error';
const FUNCTION = 'Function';
const NULL = 'Null';
const NUMBER = 'Number';
const OBJECT = 'Object';
const REG_EXP = 'RegExp';
const STRING = 'String';
const UNDEFINED = 'Undefined';
const BOOL = 'Boolean';

export const notEmpty = (...arg) => {
  if (!arg.length) return false;

  function classof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }

  let arr = arg.filter((e, i) => {
    switch (classof(e)) {
      case STRING: return stringFunc(e); break;
      case BOOL: return e; break;
      case ARRAY: return arrayFunc(e); break;
      case OBJECT: return objectFunc(e); break;
      case NUMBER: return isFinite(e); break;
      case REG_EXP: return true; break;
      case ERROR: return true; break;
      case DATE: return true; break;
      case FUNCTION: return true; break;
      case NULL: return false; break;
      case UNDEFINED: return false; break;

      default: return false;
    }
  });

  function stringFunc(string) {
    if (string != null) return true;
    return false;
  }

  function arrayFunc(array) {
    if (array.length) return true;
    return false;
  }

  function objectFunc(object) {
    if (Object.keys(object).length) return true;
    return false;
  }

  return arr.length == arg.length ? true : false;
};
