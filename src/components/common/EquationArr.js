// Equation.js

let EquationArr = new Array(0);

const toString = () => {
  return EquationArr.join(",");
};

const isNumberofLastObj = () => {
  var lastObj = getLastObj();
  //   console.log("isNumberofLastObj is ", !isNaN(Number(lastObj)) ? true : false);
  return !isNaN(Number(lastObj));
};

const getEquation = () => {
  return EquationArr;
};

const clear = () => {
  EquationArr = [];
  return getEquation();
};

const getLastObj = () => {
  return EquationArr.slice(-1);
};
const getLength = () => {
  return EquationArr.length;
};

const modifyLastObj = (obj) => {
  EquationArr[getLength() - 1] = obj;
};

const appendObj = (obj) => {
  EquationArr.push(obj);
};

const removeLastObj = () => {
  return EquationArr.pop();
};

const equationObj = {
  toString,
  clear,
  isNumberofLastObj,
  getEquation,
  getLastObj,
  getLength,
  modifyLastObj,
  appendObj,
  removeLastObj,
};
export default equationObj;
