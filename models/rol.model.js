import mongoose, { Schema, model } from 'mongoose';

const roleSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
});

const Rol = model('Rol', roleSchema);

export default Rol;
