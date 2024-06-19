const mongoose = require("mongoose");

let Schema = mongoose.Schema;

var eventosSchema = Schema({
  nombre: String,
  descripcion: String,
  
  hotel: { type: Schema.Types.ObjectId, ref: "hoteles" },
  idUsuario: { type: Schema.Types.ObjectId, ref: "usuarios" }

});

module.exports = mongoose.model("eventos", eventosSchema);