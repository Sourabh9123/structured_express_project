const testMiddleware = (req, res, next) => {
  console.log(`Request IP: ${req.ip}  ---> i am middleware`);
  next(); // Call next() to pass control to the next middleware or route
};

export default testMiddleware;
