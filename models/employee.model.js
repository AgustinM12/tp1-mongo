import mongoose, { Schema, model } from "mongoose";

const empleadosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
});

const Empleado = model('Empleado', empleadosSchema);

export default Empleado
