module.exports.passport = {
  strategies: [
    {
      name: 'local',
      model: "user"
    }
  ],
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.status(404);
    next(404);
  }
}