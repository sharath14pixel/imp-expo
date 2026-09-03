const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  
  const response = {
    success: false,
    message: 'Server Error'
  };

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    response.message = `Resource not found`;
    return res.status(404).json(response);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    response.message = 'Duplicate field value entered';
    return res.status(400).json(response);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = {};
    Object.values(err.errors).forEach(val => {
      errors[val.path] = val.message;
    });
    
    response.message = 'Validation failed';
    response.errors = errors;
    return res.status(400).json(response);
  }

  response.message = error.message || 'Server Error';
  res.status(error.statusCode || 500).json(response);
};

module.exports = errorHandler;
