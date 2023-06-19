const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerVaccinationSchema = new Schema({
  vaccine_id: {
    type: Schema.Types.ObjectId,
    ref: "Vaccine",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  relationship_guardian: String,
  status: { type: String, default: "Chờ duyệt" },
  code_number: String,
  name: String,
  address: String,
  birthday: String,
  gender: String,
  guardian: String, //ng dám hộ
  phone_number: String,
  target_date: String,
});

const RegisterVaccination = mongoose.model(
  "RegisterVaccination",
  registerVaccinationSchema
);

module.exports = RegisterVaccination;
