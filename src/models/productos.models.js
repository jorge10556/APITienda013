const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: [Number, 'el type debe ser numerico'],
        required: [true, "la referencia es obligatoria"]
    },
    nombre: {
        type: [String, "el nombre debe ser un texto"],
        required: [true, "el nombre es obligatorio"]
    },
    precio: {
        type: [mongoose.Types.Decimal128, "el precio debe tener decimales"],
        default: 0.0,
        min: [0.0, "los precios no pueden ser negativos"]
    }
}, { versionKey: false });

const productos = mongoose.model("productos", schemaProducto);
module.exports = productos;