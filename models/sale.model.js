import mongoose, { Schema, model } from 'mongoose';

const ventasSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },
    cantidad_productos: {
        type: Number,
        required: true,
    },
    precio_total: {
        type: Number,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
    }],
});

const Venta = model('Venta', ventasSchema);

export default Venta;
