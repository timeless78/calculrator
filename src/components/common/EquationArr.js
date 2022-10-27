// Equation.js

let EquationArr = new Array(0);

const toString = () => {
  var outStr = "";
  EquationArr.forEach((element) => {
    outStr += `${element} `;
  });
  return outStr;
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

const removeObj = (obj) => {
  EquationArr.push(obj);
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
  removeObj,
};
export default equationObj;
