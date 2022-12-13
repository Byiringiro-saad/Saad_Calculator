const mathService = (operand1, operand2, operation) => {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case "*":
        resolve(operand1 * operand2);

      case "/":
        resolve(operand1 / operand2);

      case "+":
        resolve(operand1 + operand2);

      case "-":
        resolve(operand1 - operand2);

      case "**":
        resolve(Math.pow(operand1, operand2));

      case "log":
        resolve(operand1 * Math.log10(operand2));

      case "ln":
        resolve(operand1 * Math.log(operand2));

      default:
        reject("Unknown operation");
    }
  });
};

export default mathService;
