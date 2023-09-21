import mongoose, { Schema, model } from 'mongoose';

const productosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    cantidad_en_stock: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
});

const Producto = model('Producto', productosSchema);

export default Producto;
