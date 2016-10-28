/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    email : { type: 'email' },

    username : { type: 'string',required: true , unique: true},

    password : { type: 'string', required: true },

    comparePassword : function(candidatePassword, cb) {
			cb(null, candidatePassword==this.password);
    }
  }
};

