const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  address: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3,
  },
  age: {
    type: Date,
    required: true,
    unique: false,
    trim: true,
    minlength: 3,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    if (!this.isModified("password")) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods = {
  isValidPassword: async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  },
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
