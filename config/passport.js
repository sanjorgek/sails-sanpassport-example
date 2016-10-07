module.exports.passport = {
  model: "user",
  //optional
  redirecCB: null,
  //optional
  strategyFun: null,
  //optional
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.status(404);
    next(404);
  }
}