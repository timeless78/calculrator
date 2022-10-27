const getPriority = (operator, inStack) => {
  if (operator === "+" || operator === "-") {
    return 1;
  } else if (operator === "*" || operator === "/") {
    return 2;
  } else if (operator === "(") {
    if (inStack) return 0;
    else return 5;
  } else if (operator === ")") {
    return 4;
  }
};

const isOperator = (token) => {
  const operators = ["(", ")", "+", "-", "x", "÷"];
  return operators.includes(token);
};

const isOperand = (token) => {
  return !isOperator(token);
};

const infixToPostfix = (infix) => {
  const stack = [];
  const postfix = [];

  infix.forEach((token) => {
    if (isOperator(token)) {
      if (token === ")") {
        // 토큰이 ')' 연산자인 경우, '('를 만날 때까지 Postfix에 삽입
        let popped = stack.pop();
        while (popped !== "(") {
          postfix.push(popped);
          popped = stack.pop();
        }
      } else {
        if (stack.length === 0) {
          stack.push(token);
        } else {
          // 마지막 노드와 토큰의 우선순위 비교
          let last = stack.slice(-1);
          if (getPriority(last, true) >= getPriority(token, false)) {
            postfix.push(stack.pop());
          }
          stack.push(token);
        }
      }
    } else {
      // 피연산자는 Postfix에 push!
      postfix.push(token);
    }
  });

  console.log("stack is ", stack);

  // 스택의 남은 노드(연산자)를 모두 후위에 붙임
  while (stack.length !== 0) {
    postfix.push(stack.pop());
  }

  return postfix.join(" ");
};

const calculate = (postfix) => {
  const stack = [];

  postfix.split(" ").forEach((token) => {
    if (isOperator(token)) {
      let operand1 = parseFloat(stack.pop());
      let operand2 = parseFloat(stack.pop());
      let temp;

      if (token === "+") temp = operand2 + operand1;
      else if (token === "-") temp = operand2 - operand1;
      else if (token === "x") temp = operand2 * operand1;
      else if (token === "÷") temp = operand2 / operand1;

      stack.push(temp);
    } else {
      stack.push(token);
    }
  });

  return stack[0];
};

const convertCalc = { isOperator, isOperand, infixToPostfix, calculate };

export default convertCalc;
