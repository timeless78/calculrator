// Equation.js

let EquationArr = new Array(0);

const toString = () => {
  var outStr = "";
  EquationArr.forEach((element) => {
    outStr += `${element} `;
  });
  return outStr;
};

const isValid = () => {
  return true;
};

let getEquation = () => {
  return EquationArr;
};

const getLastObj = () => {
  return EquationArr.slice(-1);
};
const getLength = () => {
  return EquationArr.length;
};

const appendObj = (obj) => {
  var test = isValid();
  console.log(test);
  EquationArr.push(obj);
};

const removeObj = (obj) => {
  EquationArr.push(obj);
};

const equationObj = {
  toString,
  getEquation,
  getLastObj,
  getLength,
  appendObj,
  removeObj,
};
export default equationObj;
