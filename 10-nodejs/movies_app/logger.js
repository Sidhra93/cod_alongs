var logger = function(req, res, next){
  console.log("%s - %s request %s", new Date(), req.method, req.path);
  next();// continues to the next middleware in the pipeline
}

module.exports = logger;
