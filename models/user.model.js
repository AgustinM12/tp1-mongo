import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    month_employee: {
        type: Boolean,
        required: true,
    },
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleado',
        required: true,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: "Rol",
        required: true
    },
}, {
    timestamps: true
});

const Usuario = model('Usuario', userSchema);

export default Usuario;