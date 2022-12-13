const mathService = (operand1, operand2, operation) => {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case "*":
        resolve(operand1 * operand2);
        break;

      case "/":
        resolve(operand1 / operand2);
        break;

      case "+":
        resolve(operand1 + operand2);
        break;

      case "-":
        resolve(operand1 - operand2);
        break;

      case "**":
        resolve(Math.pow(operand1, operand2));
        break;

      case "log":
        resolve(operand1 * Math.log10(operand2));
        break;

      case "ln":
        resolve(operand1 * Math.log(operand2));
        break;

      default:
        reject("Unknown operation");
        break;
    }
  });
};

export default mathService;
