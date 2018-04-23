const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let userSchema = new schema({
  email: {
    type: String,
    reuqired: true,
    unique: true
  },
  username: {
    type: String,
    reuqired: true
  },
  password: {
    type: String,
    reuqired: true
  },
  role: []
});

userSchema.pre('save', function(next) {
  let user = this;
  console.log(user);
  user.role.push('user');
  bcrypt.hash(user.password, null, null, (err, hash) => {
    if(err) {
      return next(err);
    }
    console.log(hash);
    user.password = hash;
    console.log(user.password);
    next();
  });
});

module.exports = mongoose.model('user', userSchema);
