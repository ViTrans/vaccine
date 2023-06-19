const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storageSchema = new Schema(
  {
    vaccineId: {
      type: Schema.Types.ObjectId,
      ref: "Vaccine",
    },
    quantity: { type: Number, default: 0 },
    quantity_sold: { type: Number, default: 0 },
    quantity_import: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Storage = mongoose.model("Storage", storageSchema);
module.exports = Storage;
