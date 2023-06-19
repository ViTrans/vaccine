const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    code_number: String,
    name: String,
    address: String,
    birthday: Date,
    gender: String,
    guardian: String, //ng dám hộ
    phoneNumber: String,
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
