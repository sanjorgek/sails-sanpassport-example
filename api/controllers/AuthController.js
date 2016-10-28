/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res){
    res.ok();
  },
  logout: function(req, res){
    res.ok();
  },
  signup: function(req, res){
    var jsonBody = req.body;
    sanpassport.createUser(jsonBody, function(err, user){
      if(err || !user){
        res.badRequest(404);
      }else{
        res.ok();
      }
    });
  }
};

