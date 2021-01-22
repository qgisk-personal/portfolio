const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Log = require("./Log");

const UserSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  permissons: {
    ACCESS: {
      type: Boolean,
      default: true,
    },
    WRITE: {
      type: Boolean,
      default: false,
    },
    DELETE: {
      type: Boolean,
      default: false,
    },
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  let user = this;

  if (user.isModified("email")) {
    user.email = user.email.toLowerCase();
  }

  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(user.password, 10);
  }

  next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return bcrypt.compareSync(plaintext, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
