import mathService from "../services/math.services.js";

export const doMath = (req, res) => {
  const data = {
    operand1: req.body.operand1,
    operand2: req.body.operand2,
    operation: req.body.operation,
  };

  try {
    if (data.operand1 && data.operand2 && data.operation) {
      if (data.operand2 === 0) {
        throw new Error("Can not divide by zero");
      } else {
        mathService(data.operand1, data.operand2, data.operation)
          .then((response) => {
            return res.status(200).json({
              status: "success",
              message: "Calculation successful",
              calcResponse: response,
            });
          })
          .catch((error) => {
            throw new Error(error);
          });
      }
    } else {
      throw new Error("Something is missing!");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
