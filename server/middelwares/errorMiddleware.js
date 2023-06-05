const errorResponse = require("../utils/errroResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error to console for debugging purposes
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new errorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new errorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(message, 400);
  }

  // Send error response to client
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
    //alert: error.alert || null, // add alert message to the response
  });
};

module.exports = errorHandler;
