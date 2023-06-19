const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientVaccinationSchema = new Schema({
  vaccineId: {
    type: Schema.Types.ObjectId,
    ref: "Vaccine",
  },
  code_number: String,
  name: String,
  address: String,
  birthday: String,
  gender: String,
  guardian: String, //ng dám hộ
  phone_number: String,
  cough: { type: Number, default: 0 }, //ho
  fever: { type: Number, default: 0 }, //sốt
  spew: { type: Number, default: 0 }, //ói mửa
  breath_heavily: { type: Number, default: 0 }, // khó thở
  convulsions: { type: Number, default: 0 }, // co giật
  note: String,
  status: { type: String, default: "Chưa tiêm" },
});

const PatientVaccination = mongoose.model(
  "PatientVaccination",
  patientVaccinationSchema
);

module.exports = PatientVaccination;
