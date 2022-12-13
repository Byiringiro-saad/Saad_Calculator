import Joi from "joi";

import mathService from "../services/math.services.js";

export const doMath = (req, res) => {
  const data = {
    one: req.body.one,
    two: req.body.two,
    operation: req.body.operation,
  };

  try {
    checkBody
      .validateAsync(data)
      .then((_) => {
        if (data.two === 0) {
          throw new Error("Can not divide by zero");
        } else {
          mathService(data.one, data.two, data.operation)
            .then((response) => {
              return res.status(200).json({
                status: "success",
                message: "Calculation successful",
                calcResponse: response,
              });
            })
            .catch((error) => {
              return res.status(400).json({
                status: "error",
                message: error.message,
              });
            });
        }
      })
      .catch((err) => {
        return res.status(400).json({
          status: "error",
          message: err.message,
        });
      });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

//check the body

const checkBody = Joi.object({
  one: Joi.number().required(),
  two: Joi.number().required(),
  operation: Joi.string().required(),
});
