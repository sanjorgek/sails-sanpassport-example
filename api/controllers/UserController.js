/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.secureRoute()`
   */
  secureRoute: function (req, res) {
    return res.json({
      todo: 'secureRoute() is not implemented yet!'
    });
  },


  /**
   * `UserController.adminRoute()`
   */
  adminRoute: function (req, res) {
    return res.json({
      todo: 'adminRoute() is not implemented yet!'
    });
  },

  /**
   * `UserController.login()`
   */
  login: function (req, res, next) {
    sails.sanpassport.login(req,res, next);
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    var jsonBody = req.body;
    sails.sanpassport.createUser(jsonBody, function(err, user){
      if(err || !user){
        console.log(err);
        res.send(404);
      }else{
        res.send(200);
      }
    });
  },

  ensureAuth: function(req, res) {
    res.send(200);
  }
};

